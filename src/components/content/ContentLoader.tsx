import { LoaderCircle } from "lucide-react";

function ContentLoader() {
  return (
    <section className="content-loader">
      <LoaderCircle size={96} strokeWidth={1} />
      <h3>Loading...</h3>
    </section>
  );
}

export default ContentLoader;
