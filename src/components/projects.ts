import { getCollection } from "astro:content";

export const projects = (
    await getCollection("projects")
).sort((a, b) => a.data.order - b.data.order);

for (let project of projects) {
    if (
        project.data.source &&
        project.data.tags.indexOf("open-source") === -1
    ) {
        project.data.tags.unshift("open-source");
    }

    if (project.data.site && project.data.tags.indexOf("live") === -1) {
        project.data.tags.push("live");
    }
}
