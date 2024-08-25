import { icons } from "../lib/icons";

export const footer_copyright = "notkingsley";

export const EMAIL = "kingsley.not@gmail.com";

export const links = {
    twitter: "https://x.com/_notkingsley",
    github: "https://github.com/notkingsley",
    linkedin: "https://www.linkedin.com/in/notkingsley",
    stack_overflow: "https://stackoverflow.com/users/19434985/",
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

export const homePageRoles: {
    icon: keyof typeof icons;
    label: string;
}[] = [
    {
        icon: "code",
        label: "Software Developer",
    },
    {
        icon: "thinking",
        label: "Critical Thinker",
    },
    {
        icon: "machine-learning",
        label: "AI Engineer",
    },
];

const homePage = {
    title: "Kingsley | Home",
    description: "Kingsley's personal website",
    tagline:
        "I am a Software Developer with strong foundations in\
        Computer Science principles and a proven track record of delivering high-quality software.",
    heroTitle: "Hello, my name is Kingsley Oyelabi",
};

const aboutPage = {
    title: "Kingsley | About",
    description: "About Kingsley",
    tagline: "Thanks for stopping by. Read below to learn a bit about me.",
    heroTitle: "About",
};

const projectsPage = {
    title: "Kingsley | Projects",
    description: "Kingsley's most recent projects",
    tagline: "See my most recent projects below.",
    heroTitle: "Recent Projects",
};

const workPage = {
    title: "Kingsley | Work",
    description: "Kingsley's recent employment",
    tagline: "A selection of my recent work experiences.",
    heroTitle: "Work",
};

const oldWorkPage = {
    title: "Kingsley | Old Work",
    description: "Kingsley's employment history",
    tagline: "Some of the things I've done in the past..",
    heroTitle: "Old Work",
};

const oldProjectsPage = {
    title: "Kingsley | Old Projects",
    description: "Some of my older projects...",
    tagline: "Some of my older projects...",
    heroTitle: "Ancient Projects",
};

export const pages = {
    home: homePage,
    about: aboutPage,
    projects: projectsPage,
    work: workPage,
    oldWork: oldWorkPage,
    oldProjects: oldProjectsPage,
};
