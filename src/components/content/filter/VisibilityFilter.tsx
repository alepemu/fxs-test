import { forwardRef } from "react";

const VisibilityFilter = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="visibility-filter" ref={ref}>
      <button>All</button>
      <button>Many</button>
      <button>Some</button>
    </div>
  );
});

export default VisibilityFilter;
