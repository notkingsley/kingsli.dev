import type { icon_paths } from "./icon_paths";

import { links } from "./links";

export const nav_menu_links: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects/" },
    { label: "About", href: "/about/" },
    { label: "Work", href: "/work" },
    { label: "Resume", href: "/resume" },
];

export const nav_social_links: {
    label: string;
    href: string;
    icon: keyof typeof icon_paths;
}[] = [
    { label: "GitHub", href: links.github, icon: "github-logo" },
    {
        label: "Stack Overflow",
        href: links.stack_overflow,
        icon: "stack-overflow",
    },
    { label: "Email", href: `mailto:${links.email}`, icon: "gmail" },
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
