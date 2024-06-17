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
    <div className="content-filter">
      <div>
        <div>Show:</div>
        <div onClick={() => setIsOpen(true)}>All ˅</div>
      </div>
      <Filter size={16} strokeWidth={2.5} onClick={() => setIsOpen(true)} />
      {isOpen && <VisibilityFilter ref={ref} />}
    </div>
  );
}

export default ContentFilter;
