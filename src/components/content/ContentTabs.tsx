import { useContext } from "react";

import { ContentTabContext } from "./Content";

function ContentTabs() {
  const [tab, setTab] = useContext(ContentTabContext);
  return (
    <section className="content-tabs">
      <button
        onClick={() => setTab("latest")}
        className={`${tab === "latest" ? "active" : ""}`}
      >
        Latest
      </button>
      <button
        onClick={() => setTab("popular")}
        className={`${tab === "popular" ? "active" : ""}`}
      >
        Popular
      </button>
    </section>
  );
}

export default ContentTabs;
