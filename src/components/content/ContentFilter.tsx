import { Filter } from "lucide-react";

function ContentFilter() {
  return (
    <section className="content-filter">
      <div>Show: All ˅</div>
      <div>
        <Filter size={16} strokeWidth={2.5} />
      </div>
    </section>
  );
}

export default ContentFilter;
