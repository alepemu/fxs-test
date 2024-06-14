import { Dispatch, SetStateAction } from "react";

export type PostProps = {
  isPopular: boolean;
  id: number;
  author: {
    name: string;
    imageUrl: string;
    companyName: string;
  };
  title: string;
  feed: string;
  subFeed: string;
  publicationTime: string;
  content: string;
};

export type ContentTab = "latest" | "popular";

export type ContentTabContextProps = [
  ContentTab,
  Dispatch<SetStateAction<ContentTab>>
];
