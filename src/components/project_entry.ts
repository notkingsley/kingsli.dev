import { icon_paths } from "./icon_paths";

export interface ProjectEntry {
    title: string;
    description: string;
    tags: Array<keyof typeof icon_paths>;
    img: string;
    img_alt: string;
    source: string | undefined;
    site: string | undefined;
    content: string;
    order: number;
}
