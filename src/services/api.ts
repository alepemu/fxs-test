import axios from "axios";
import { PostProps } from "@/types";

// const url = "https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c";
const url = "https://run.mocky.io/v3/6c6371eb-e63d-4f31-944e-74013695680e";

export const getAPIwithDelay = async (delay: number): Promise<PostProps[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await axios.get(url);
      resolve(response.data as PostProps[]);
    }, delay);
  });
};
