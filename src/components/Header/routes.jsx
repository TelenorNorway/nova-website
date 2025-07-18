import { Boxes, Book, Github, MessageCircleMore } from 'lucide-react';

export const routes = [
    {
        title: "Features",
        to: "/features",
        Icon: () => <Boxes />
    },
    {
        title: "Documentation",
        href: "https://nova.telenor.net",
        Icon: () => <Book />
    },
    {
        title: "GitHub",
        href: "https://github.com/TelenorNorway",
        Icon: () => <Github />
    },
    {
        title: "Contact",
        to: "/contact",
        Icon: () => <MessageCircleMore />
    },
];
