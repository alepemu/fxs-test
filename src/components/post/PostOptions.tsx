import { Heart, Bookmark, Ellipsis } from "lucide-react";
import { useState } from "react";

const LikePost = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={liked ? undefined : () => setLiked(true)}
      className={`like ${liked ? "liked" : ""}`}
    >
      <Heart size={16} strokeWidth={2.5} fill={liked ? "true" : "false"} />
      Like{liked && "d!"}
    </button>
  );
};

const BookmarkPost = () => {
  const [saved, setSaved] = useState(false);
  return (
    <button
      onClick={saved ? undefined : () => setSaved(true)}
      className={`save ${saved ? "saved" : ""}`}
    >
      <Bookmark size={16} strokeWidth={2.5} fill={saved ? "true" : "false"} />
      Save{saved && "d!"}
    </button>
  );
};

const OptionsPost = () => {
  return (
    <button>
      <Ellipsis size={16} strokeWidth={2.5} />
    </button>
  );
};

function PostOptions() {
  return (
    <section className="post-options">
      <LikePost />
      <BookmarkPost />
      <OptionsPost />
    </section>
  );
}

export default PostOptions;
