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
                label: "common:menu.list.subpage-1",
                href: "/skills/1",
            },
        ],
    },
    {
        label: "common:menu.list.example",
        href: "/example",
        children: [
            {
                label: "common:menu.list.subpage-1",
                href: "/example/1",
            },
        ],
    },
    {
        label: "common:menu.list.training",
        href: "/training",
        children: [],
    },
    {
        label: "common:menu.list.submit",
        href: "/submit",
        children: [],
    },
];
export default navigationData;
