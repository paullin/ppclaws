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
                href: "/#pm-skills",
            },
            {
                label: "common:menu.list.ux_skills",
                href: "/#ux-skills",
            },
            {
                label: "common:menu.list.marketing_skills",
                href: "/#marketing-skills",
            },
            {
                label: "common:menu.list.more",
                href: "/#more-skills",
            },
        ],
    },
    {
        label: "common:menu.list.example",
        href: "/example",
        children: [
            {
                label: "common:menu.list.req_analysis",
                href: "#",
            },
            {
                label: "common:menu.list.proto_design",
                href: "#",
            },
            {
                label: "common:menu.list.ab_testing",
                href: "#",
            },
            {
                label: "common:menu.list.seo_mining",
                href: "#",
            },
            {
                label: "common:menu.list.more",
                href: "/#more-examples",
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
