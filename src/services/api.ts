import axios from "axios";
import { PostProps } from "@/types";

const url = "https://fxsfrontend.fxstreet.workers.dev/";

export const getAPIwithDelay = async (delay: number): Promise<PostProps[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await axios.get(url);
      resolve(response.data as PostProps[]);
    }, delay);
  });
};
