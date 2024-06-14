import parse from "html-react-parser";
import { PostProps } from "@/types";

type PostContentProps = Pick<PostProps, "author" | "title" | "content">;
type PostHeadProps = Pick<PostContentProps, "author" | "title">;
type PostBodyProps = Pick<PostContentProps, "content">;

const PostHead = ({ author, title }: PostHeadProps) => {
  return (
    <div className="post-head">
      <div className="post-head-logo">
        <img src={author.imageUrl} alt="author_logo" />
      </div>
      <div className="post-head-title">
        <h3>{`${author.name} | ${author.companyName}`}</h3>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const PostBody = ({ content }: PostBodyProps) => {
  return <div className="post-body">{parse(`<p>${content}</p>`)}</div>;
};

function PostContent({ author, title, content }: PostContentProps) {
  return (
    <section className="post-content">
      <PostHead author={author} title={title} />
      <PostBody content={content} />
    </section>
  );
}

export default PostContent;
