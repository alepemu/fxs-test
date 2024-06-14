import "@components/post/Post.scss";
import PostDetails from "@components/post/PostDetails";
import PostContent from "@components/post/PostContent";
import PostOptions from "@components/post/PostOptions";
import { PostProps } from "@/types";

function Post({ data }: { data: PostProps }) {
  return (
    <section className="post">
      <PostDetails
        publicationTime={data.publicationTime}
        feed={data.feed}
        subFeed={data.subFeed}
      />
      <PostContent
        author={data.author}
        title={data.title}
        content={data.content}
      />
      <PostOptions />
    </section>
  );
}

export default Post;
