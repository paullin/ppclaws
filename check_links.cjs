const http = require('http');

const baseUrl = 'http://localhost:4323';
const visited = new Set();
const queue = [baseUrl + '/'];
const brokenLinks = new Set();

const fetchUrl = (url) => {
    return new Promise((resolve) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ statusCode: res.statusCode, data }));
        }).on('error', (e) => {
            resolve({ statusCode: 0, error: e.message });
        });
    });
};

const extractLinks = (html, currentUrl) => {
    const links = [];
    const regex = /href=["'](.*?)["']/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        let link = match[1];
        // skip anchor links
        if (link.startsWith('#')) continue;
        if (link.startsWith('data:')) continue;
        // resolve relative links
        if (link.startsWith('/')) {
            link = baseUrl + link;
        } else if (!link.startsWith('http')) {
            // handle relative to current
            const urlObj = new URL(currentUrl);
            urlObj.pathname = urlObj.pathname.split('/').slice(0, -1).join('/') + '/' + link;
            link = urlObj.href;
        }

        // only include internal links
        if (link.startsWith(baseUrl)) {
            // strip hash
            link = link.split('#')[0];
            links.push(link);
        }
    }
    return links;
};

const run = async () => {
    console.log('Starting link crawl on ' + baseUrl);
    while (queue.length > 0) {
        const currentUrl = queue.shift();
        if (visited.has(currentUrl)) continue;
        visited.add(currentUrl);

        const { statusCode, data } = await fetchUrl(currentUrl);
        if (statusCode >= 400 || statusCode === 0) {
            brokenLinks.add(currentUrl + ' (Status: ' + statusCode + ')');
            process.stdout.write('X');
        } else {
            process.stdout.write('.');
            const links = extractLinks(data, currentUrl);
            for (const link of links) {
                if (!visited.has(link) && !queue.includes(link)) {
                    queue.push(link);
                }
            }
        }
    }
    console.log('\n\nCrawl complete.');
    console.log('Checked ' + visited.size + ' internal links.');
    if (brokenLinks.size > 0) {
        console.log('Broken links found:');
        brokenLinks.forEach(link => console.log(link));
    } else {
        console.log('No broken internal links found!');
    }
};

run();
