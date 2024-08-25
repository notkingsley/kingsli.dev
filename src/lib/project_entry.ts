import type { IconType } from "./icons";

export interface ProjectEntry {
    title: string;
    description: string;
    tags: Array<IconType>;
    img: string;
    img_alt: string;
    source: string | undefined;
    site: string | undefined;
    content: string;
    order: number;
}
