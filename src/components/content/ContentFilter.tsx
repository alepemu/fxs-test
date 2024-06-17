import { useState } from "react";
import { Filter } from "lucide-react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import VisibilityFilter from "@components/content/filter/VisibilityFilter";

function ContentFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  return (
    <>
      <div className="content-filter" onClick={() => setIsOpen(true)}>
        <div>Show: All ˅</div>
        <div>
          <Filter size={16} strokeWidth={2.5} />
        </div>
        {isOpen && <VisibilityFilter ref={ref} />}
      </div>
    </>
  );
}

export default ContentFilter;
