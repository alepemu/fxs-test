import { PostProps } from "@/types";

export const filterLatest = (posts: PostProps[], quantity: number) => {
  return posts
    .sort(
      (a, b) =>
        new Date(b.publicationTime).getTime() -
        new Date(a.publicationTime).getTime()
    )
    .slice(0, quantity);
};

export const filterPopular = (posts: PostProps[], quantity: number) => {
  return posts
    .filter((post) => post.isPopular)
    .sort(
      (a, b) =>
        new Date(b.publicationTime).getTime() -
        new Date(a.publicationTime).getTime()
    )
    .slice(0, quantity);
};
