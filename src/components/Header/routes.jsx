import { Boxes, Rss, MessageCircleMore } from 'lucide-react';

export const routes = [
    {
        title: "Features",
        to: "/features",
        Icon: () => <Boxes />
    },
    {
        title: "Tech Blog",
        to: "/blog",
        Icon: () => <Rss />
    },
    {
        title: "Contact",
        to: "/contact",
        Icon: () => <MessageCircleMore />
    },
];
