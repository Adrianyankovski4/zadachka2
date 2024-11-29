export interface MenuItem {
    id: string;
    title: string;
    link?: string;
    iconId?: string;
    children?: MenuItem[];
}

export const menu: MenuItem[] = [
    {
        id: "1",
        title: "Home",
        link: "/home",
        iconId: "Home",
    },
    {
        id: "2",
        title: "Products",
        iconId: "Category",
        children: [
            {
                id: "2-1",
                title: "Electronics",
                iconId: "Devices",
                children: [
                    {
                        id: "2-1-1",
                        title: "Mobile Phones",
                        link: "/products/electronics/mobiles",
                        iconId: "Smartphone",
                        children: [
                            {
                                id: "2-1-1-1",
                                title: "Smartphones",
                                link: "/products/electronics/mobiles/smartphones",
                                children: [
                                    {
                                        id: "2-1-1-1-1",
                                        title: "Android",
                                        link: "/products/electronics/mobiles/smartphones/android",
                                        children: [
                                            {
                                                id: "2-1-1-1-1-1",
                                                title: "Samsung",
                                                link: "/products/electronics/mobiles/smartphones/android/samsung",
                                                children: [
                                                    {
                                                        id: "2-1-1-1-1-1-1",
                                                        title: "Galaxy S Series",
                                                        link: "/products/electronics/mobiles/smartphones/android/samsung/galaxy-s",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "3",
        title: "Contact",
        link: "/contact",
        iconId: "Phone",
    },
    {
        id: "4",
        title: "Services",
        iconId: "Build",
        children: [
            {
                id: "4-1",
                title: "Consulting",
                link: "/services/consulting",
                iconId: "Support",
            },
            {
                id: "4-2",
                title: "Support",
                link: "/services/support",
                iconId: "Help",
            },
        ],
    },
    {
        id: "5",
        title: "About Us",
        link: "/about",
        iconId: "Info",
    },
    {
        id: "6",
        title: "Settings",
        link: "/settings",
        iconId: "Settings",
    },
];
