const navigationData = [
    {
        label: "common:menu.list.home",
        href: "",
        children: [],
    },
    {
        label: "common:menu.list.openclaw",
        href: "#",
        children: [
            {
                label: "common:menu.list.setup",
                href: "#",
            },
            {
                label: "common:menu.list.usage",
                href: "#",
            },
            {
                label: "common:menu.list.agent",
                href: "#",
            },
            {
                label: "common:menu.list.alternatives",
                href: "#",
            },
        ],
    },
    {
        label: "common:menu.list.skills",
        href: "#",
        children: [
            {
                label: "common:menu.list.pm_skills",
                href: "skills/product-manager",
            },
            {
                label: "common:menu.list.ux_skills",
                href: "skills/ui-ux-designer",
            },
            {
                label: "common:menu.list.marketing_skills",
                href: "skills/marketing",
            },
            {
                label: "common:menu.list.dev_skills",
                href: "skills/developer",
            },
            {
                label: "common:menu.list.all_skills",
                href: "skills",
            },
        ],
    },
    {
        label: "common:menu.list.example",
        href: "#",
        children: [
            {
                label: "common:menu.list.brainstorming",
                href: "#",
            },
            {
                label: "common:menu.list.writing_prd",
                href: "#",
            },
            {
                label: "common:menu.list.proto_design",
                href: "#",
            },
            {
                label: "common:menu.list.data_analysis",
                href: "#",
            },
            {
                label: "common:menu.list.seo_mining",
                href: "#",
            },
            {
                label: "common:menu.list.all_examples",
                href: "example",
            },
        ],
    },
    {
        label: "common:menu.list.community",
        href: "#footer",
        children: [],
        isButton: true,
    },
];
export default navigationData;
