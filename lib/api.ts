import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const mapsDirectory = join(process.cwd(), "_maps");

export function getMapSlugs() {
  return fs.readdirSync(mapsDirectory);
}

export function getMapBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(mapsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllMaps(fields: string[] = []) {
  const slugs = getMapSlugs()
  const maps = slugs
    .map((slug) => getMapBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return maps
}
