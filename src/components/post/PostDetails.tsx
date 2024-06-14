import dayjs from "dayjs";
import { PostProps } from "@/types";
import { FileSearch, Clock4 } from "lucide-react";

type PostDetailsProps = Pick<PostProps, "publicationTime" | "feed" | "subFeed">;
type PostFeedProps = Pick<PostDetailsProps, "feed" | "subFeed">;
type PostDateProps = Pick<PostDetailsProps, "publicationTime">;

const PostFeed = ({ feed, subFeed }: PostFeedProps) => {
  return (
    <div className="post-details-feed">
      <div className="feed">
        <FileSearch size={15} strokeWidth={2} />
        <p>{feed}</p>
      </div>
      <p>⯈</p>
      <p className="subfeed">{subFeed}</p>
    </div>
  );
};

const PostDate = ({ publicationTime }: PostDateProps) => {
  return (
    <div className="post-details-date">
      <Clock4 size={15} strokeWidth={1} />
      {dayjs(publicationTime).format("MMM DD, HH:mm")}
    </div>
  );
};

function PostDetails({ publicationTime, feed, subFeed }: PostDetailsProps) {
  return (
    <section className="post-details">
      <PostFeed feed={feed} subFeed={subFeed} />
      <PostDate publicationTime={publicationTime} />
    </section>
  );
}

export default PostDetails;
