import { Boxes, Book, Github, MessageCircleMore } from 'lucide-react';

export const routes = [
    {
        title: "Features",
        href: "#features",
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
        href: "https://offentlig-paas-no.slack.com/archives/C08ALK1JVT4", // TODO make a page for people who are not in the Slack to explain how to join
        Icon: () => <MessageCircleMore />
    },
];
