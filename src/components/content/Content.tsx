import { useEffect, useState, createContext } from "react";
import { Post, ContentTab, ContentTabContextProps } from "@/types";
import mockData from "@assets/mock_data.json";
import "@components/content/Content.scss";

export const ContentTabContext = createContext<ContentTabContextProps>([
  "latest",
  () => {},
]);

function Content() {
  const [tab, setTab] = useState<ContentTab>("latest");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setPosts(mockData);
    setIsLoading(false);
    //   fetch(`https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }, []);

  useEffect(() => {
    if (tab === "latest") setPosts([]);
    if (tab === "popular") setPosts([]);
  }, [tab]);

  return (
    <section className="content">
      {isLoading ? (
        <div>{/* Loader */}</div>
      ) : (
        <ContentTabContext.Provider value={[tab, setTab]}>
          <div>
            {/* Content Tabs */}
            {/* Content Filter */}
          </div>
          <div>
            {posts.map((/* post */ _, index) => (
              <div key={index} /* key={post.id} */> {/* Post */}</div>
            ))}
          </div>
        </ContentTabContext.Provider>
      )}
    </section>
  );
}

export default Content;
