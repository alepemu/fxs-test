import { Heart, Bookmark, Ellipsis } from "lucide-react";
import { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import MoreOptions from "./options/MoreOptions";

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

const MorePost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref1 = useOutsideClick(() => {
    setIsOpen(false);
  });

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Ellipsis size={16} strokeWidth={2.5} />
      </button>
      <div className="more-options-pre">
        {isOpen && <MoreOptions ref={ref1} />}
      </div>
    </>
  );
};

function PostOptions() {
  return (
    <section className="post-options">
      <LikePost />
      <BookmarkPost />
      <MorePost />
    </section>
  );
}

export default PostOptions;
