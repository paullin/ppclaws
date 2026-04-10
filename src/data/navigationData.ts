const navigationData = [
    {
        label: "common:menu.list.home",
        href: "",
        children: [],
    },
    {
        label: "common:menu.list.guides",
        href: "#",
        children: [
            {
                label: "common:menu.list.openclaw",
                href: "/guides/openclaw",
            },
            {
                label: "common:menu.list.hermes_agent",
                href: "/guides/hermes-agent",
            },
            {
                label: "common:menu.list.cli",
                href: "/guides/cli",
            },
            {
                label: "common:menu.list.faq",
                href: "/guides/faq",
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
        label: "common:menu.list.community",
        href: "common:menu.list.community_link",
        children: [],
        isButton: true,
        isExternal: true,
    },
];
export default navigationData;
