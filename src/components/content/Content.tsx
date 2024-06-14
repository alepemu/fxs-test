import "@components/content/Content.scss";

import { useEffect, useState, createContext } from "react";
import { PostProps, ContentTab, ContentTabContextProps } from "@/types";

import ContentTabs from "@components/content/ContentTabs";
import ContentFilter from "@components/content/ContentFilter";
import ContentLoader from "@components/content/ContentLoader";
import Post from "@components/post/Post";

import mockData from "@assets/mock_data.json";

export const ContentTabContext = createContext<ContentTabContextProps>([
  "latest",
  () => {},
]);

function Content() {
  const [tab, setTab] = useState<ContentTab>("latest");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(`https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c`)
        .then((response) => response.json())
        .then((data) => {
          const latestPosts = [...data].sort(
            (a, b) =>
              new Date(b.publicationTime).getTime() -
              new Date(a.publicationTime).getTime()
          );
          setPosts(latestPosts.slice(0, 2));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    if (tab === "latest") {
      const latestPosts = [...mockData].sort(
        (a, b) =>
          new Date(b.publicationTime).getTime() -
          new Date(a.publicationTime).getTime()
      );
      setPosts(latestPosts.slice(0, 2));
    }
    if (tab === "popular") {
      const popularPosts = [...mockData]
        .filter((post) => post.isPopular)
        .sort(
          (a, b) =>
            new Date(b.publicationTime).getTime() -
            new Date(a.publicationTime).getTime()
        );
      setPosts(popularPosts.slice(0, 1));
    }
  }, [tab]);

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
