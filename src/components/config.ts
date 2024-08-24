import { icons } from "./icons";

export const footer_copyright = "notkingsley";

export const EMAIL = "kingsley.not@gmail.com";

export const links = {
    twitter: "https://x.com/_notkingsley",
    github: "https://github.com/notkingsley",
    linkedin: "https://www.linkedin.com/in/notkingsley",
    stack_overflow: "https://stackoverflow.com/users/19434985/kingsley-oyelabi",
    email: `mailto:${EMAIL}`,
    resume_file: "/assets/files/kingsley_24_06.pdf",
};

export const CONTACT_TEMPLATE_SUBJECT = `Hey Kingsley, I'd like to work with you`;
export const CONTACT_TEMPLATE_BODY = `Hi Kingsley, I came across your website and I think it would be great to work with you. 
Can we schedule a meeting to discuss further?`;

export const DEFAULT_PAGE_TITLE = "Kingsley";
export const DEFAULT_PAGE_DESCRIPTION = "Kingsley's personal website";

export const NAV_TITLE = "kiŋsli";

export const skills: {
    icon: keyof typeof icons;
    title: string;
    description: string;
}[] = [
    {
        icon: "stack-plus",
        title: "Full Stack",
        description: `I have experience with backend development, databases, software
        architecture, and frontend technologies.`,
    },
    {
        icon: "strategy",
        title: "Strategy-Minded",
        description: `I am a goal-oriented developer and stategic thinker who takes
        pragmatic approaches to problem solving.`,
    },
    {
        icon: "trophy",
        title: "Battle Tested",
        description: `In my years in the industry, I've worked on several projects of
        varying sizes and complexities.`,
    },
];
