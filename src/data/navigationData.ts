const navigationData = [
    {
        label: "common:menu.list.home",
        href: "/",
        children: [],
    },
    {
        label: "common:menu.list.skills",
        href: "/skills",
        children: [
            {
                label: "common:menu.list.pm_skills",
                href: "/skills/product-manager",
            },
            {
                label: "common:menu.list.ux_skills",
                href: "/skills/ui-ux-designer",
            },
            {
                label: "common:menu.list.marketing_skills",
                href: "/skills/marketing",
            },
            {
                label: "common:menu.list.more",
                href: "/skills",
            },
        ],
    },
    {
        label: "common:menu.list.example",
        href: "/example",
        children: [
            {
                label: "common:menu.list.req_analysis",
                href: "/example/requirement-analysis",
            },
            {
                label: "common:menu.list.proto_design",
                href: "/example/prototyping",
            },
            {
                label: "common:menu.list.ab_testing",
                href: "/example/ab-testing",
            },
            {
                label: "common:menu.list.seo_mining",
                href: "/example/seo-keyword-mining",
            },
            {
                label: "common:menu.list.more",
                href: "/example",
            },
        ],
    },
    {
        label: "common:menu.list.training",
        href: "/#training",
        children: [],
    },
    {
        label: "common:menu.list.submit",
        href: "/#submit",
        children: [],
    },
];
export default navigationData;
