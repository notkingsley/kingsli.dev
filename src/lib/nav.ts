import type { IconType } from "./icons";
import { links } from "../components/config";

export const resume_page = "/resume";

export const nav_menu_links: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects/" },
    { label: "About", href: "/about/" },
    { label: "Work", href: "/work" },
    { label: "Resume", href: resume_page },
];

export const nav_social_links: {
    label: string;
    href: string;
    icon: IconType;
}[] = [
    { label: "GitHub", href: links.github, icon: "github-logo" },
    {
        label: "Stack Overflow",
        href: links.stack_overflow,
        icon: "stack-overflow",
    },
    { label: "Email", href: links.email, icon: "gmail" },
    { label: "Twitter", href: links.twitter, icon: "twitter-logo" },
    { label: "LinkedIn", href: links.linkedin, icon: "linkedin-logo" },
];

export function is_nav_link_active(current_url: string, href: string) {
    return (
        current_url === href ||
        (href !== "/" && current_url.startsWith(href)) ||
        (href === "/projects/" && current_url.startsWith("/project"))
    );
}
