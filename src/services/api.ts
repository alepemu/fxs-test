import axios from "axios";
import { PostProps } from "@/types";

const url = "https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c";

export const getAPIwithDelay = async (delay: number): Promise<PostProps[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await axios.get(url);
      resolve(response.data as PostProps[]);
    }, delay);
  });
};
