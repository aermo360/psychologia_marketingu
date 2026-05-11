import { defineCollection, z } from 'astro:content';
import { strapiLoader } from "strapi-community-astro-loader";

// Prefer runtime env (Docker), fall back to Vite env, then localhost
const STRAPI_URL = process.env.STRAPI_URL || import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337";

if (!STRAPI_URL || STRAPI_URL === "http://localhost:1337") {
    console.warn("[Config] STRAPI_URL not set — using localhost fallback. Set PUBLIC_STRAPI_URL in .env.");
} else {
    console.log("[Config] Strapi URL:", STRAPI_URL);
}

// Custom simple loader to bypass library issues
const customStrapiLoader = (contentType: string, queryParams: string = "") => async () => {
    const url = `${STRAPI_URL}/api/${contentType}?populate=*${queryParams}`;
    console.log(`[CustomLoader] Fetching ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        // Strapi 5 returns { data: [...] } or { data: { ... } } for single types
        // The collection loader expects an array of items.
        // We map 'documentId' to 'id' for compatibility if needed, but Astro handles ID generation.
        if (Array.isArray(json.data)) {
            return json.data.map((item: any) => {
                // Normalize courses to always be an array (handle null/undefined)
                if (item.courses === null || item.courses === undefined) {
                    item.courses = [];
                }
                return {
                    ...item,
                    id: item.documentId || item.id // Use documentId as stable ID if available
                };
            });
        }
        return [];
    } catch (e) {
        console.error(`[CustomLoader] Error fetching ${contentType}:`, e);
        return [];
    }
};

// Note: modules collection removed — CurriculumGrid uses static data (Strapi had outdated data)

const lecturers = defineCollection({
    loader: customStrapiLoader("lecturers", "&sort=order:asc"),
    schema: z.object({
        name: z.string(),
        role: z.string(),
        order: z.number().nullable().optional(),
        description: z.string().nullable().optional(),
        image_url: z.string().nullable().optional(),
        image: z.any().nullable().optional(), // Adding raw image field from Strapi
    })
});

const articles = defineCollection({
    loader: customStrapiLoader("articles", "&sort=publish_date:desc"),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        excerpt: z.string().nullable().optional(),
        content: z.string().nullable().optional(),
        category: z.string().nullable().optional(),
        author_name: z.string().nullable().optional(),
        author_role: z.string().nullable().optional(),
        author_bio: z.string().nullable().optional(),
        author_image_url: z.string().nullable().optional(),
        featured_image_url: z.string().nullable().optional(),
        featured_image: z.any().nullable().optional(),
        publish_date: z.string().nullable().optional(),
        read_time: z.number().nullable().optional().default(5),
        featured: z.boolean().nullable().optional().default(false),
    })
});

export const collections = {
    lecturers,
    articles,
};
