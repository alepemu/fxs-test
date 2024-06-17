import "@components/content/Content.scss";

import { useEffect, useState, createContext, useCallback } from "react";
import {
  PostProps,
  ContentTab,
  ContentTabContextProps,
  FilterFunction,
} from "@/types";

import ContentTabs from "@components/content/ContentTabs";
import ContentFilter from "@components/content/ContentFilter";
import ContentLoader from "@components/content/ContentLoader";
import Post from "@components/post/Post";

import { getAPIwithDelay } from "@/services/api";
import { filterLatest, filterPopular } from "@/services/filter";

export const ContentTabContext = createContext<ContentTabContextProps>([
  "latest",
  () => {},
]);

function Content() {
  const [tab, setTab] = useState<ContentTab>("latest");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = useCallback(
    async (filter: FilterFunction, quantity: number) => {
      setIsLoading(true);
      const postsData = await getAPIwithDelay(500);
      const filteredPosts = filter(postsData, quantity);
      setPosts(filteredPosts);
      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    if (tab === "latest") fetchPosts(filterLatest, 2);
    if (tab === "popular") fetchPosts(filterPopular, 1);
  }, [tab, fetchPosts]);

  return (
    <ContentTabContext.Provider value={[tab, setTab]}>
      <section className="content">
        {isLoading ? (
          <ContentLoader />
        ) : (
          <>
            <div className="content-top">
              <ContentTabs />
              <ContentFilter />
            </div>
            <div className="content-posts">
              {posts.map((post) => (
                <div key={post.id}>
                  <Post data={post} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </ContentTabContext.Provider>
  );
}

export default Content;
