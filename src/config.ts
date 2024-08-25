import type { IconType } from "./lib/icons";
import site_config from "./config.json";
import { z } from "zod";

const PageSchema = z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    hero_title: z.string(),
});

const SiteSchema = z.object({
    email: z.string(),
    links: z.object({
        twitter: z.string(),
        github: z.string(),
        linkedin: z.string(),
        stack_overflow: z.string(),
        email: z.string(),
        resume_file: z.string(),
    }),

    default_page_title: z.string(),
    default_page_description: z.string(),
    nav_title: z.string(),

    contact_template_subject: z.string(),
    contact_template_body: z.string(),

    skills: z.array(
        z.object({
            icon: z.string(), // IconType
            title: z.string(),
            description: z.string(),
        })
    ),

    home_page_roles: z.array(
        z.object({
            icon: z.string(), // IconType
            label: z.string(),
        })
    ),

    pages: z.object({
        home: PageSchema,
        about: PageSchema,
        projects: PageSchema,
        work: PageSchema,
        old_work: PageSchema,
        old_projects: PageSchema,
    }),

    footer_copyright: z.string(),
});

const config = SiteSchema.parse(site_config);

export const email = config.email;
export const links = config.links;

export const default_page_title = config.default_page_title;
export const default_page_description = config.default_page_description;

export const nav_title = config.nav_title;

export const contact_template_subject = config.contact_template_subject;
export const contact_template_body = config.contact_template_body;

export const skills = config.skills as {
    icon: IconType;
    title: string;
    description: string;
}[];

export const home_page_roles = config.home_page_roles as {
    icon: IconType;
    label: string;
}[];

export const pages = config.pages;

export const footer_copyright = config.footer_copyright;
