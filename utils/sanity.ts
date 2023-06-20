import { createClient } from "next-sanity";

async function getCategories() {
  // sanity categories fetch
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: "2021-08-31",
  });
  const queryCategories: string = `*[_type == "category"]`;
  const categories = await client.fetch(queryCategories);
  return categories;
}

export { getCategories };
