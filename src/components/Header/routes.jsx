import { Boxes, Book, Rss, MessageCircleMore } from 'lucide-react';

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
        title: "Documentation",
        href: "https://nova.telenor.net",
        Icon: () => <Book />
    },
    {
        title: "Contact",
        to: "/contact",
        Icon: () => <MessageCircleMore />
    },
];
