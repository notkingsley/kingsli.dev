import { icons } from "./icons";

export interface ProjectEntry {
    title: string;
    description: string;
    tags: Array<keyof typeof icons>;
    img: string;
    img_alt: string;
    source: string | undefined;
    site: string | undefined;
    content: string;
    order: number;
}
