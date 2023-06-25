import { gql } from "@apollo/client";
import { getClient } from "./apolloClient";

export async function getCategories() {
  const queryCategories = gql`
    query categories {
      categories {
        id
        title
        description
      }
    }
  `;
  const { data } = await getClient().query({ query: queryCategories });
  return data.categories;
}
