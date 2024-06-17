import "./MoreOptions.scss";
import { EyeOff, SlidersHorizontal } from "lucide-react";
import { forwardRef, useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import HideOptions from "./HideOptions";

const MoreOptions = forwardRef<HTMLDivElement>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref2 = useOutsideClick(() => {
    setIsOpen(false);
  });

  return (
    <>
      <div className="more-options" ref={ref}>
        <button onClick={() => setIsOpen(true)}>
          <EyeOff size={14} strokeWidth={2.5} />
          <p>Hide</p>
        </button>
        <button>
          <SlidersHorizontal size={14} strokeWidth={2.5} />
          <p>Improve my feed</p>
        </button>
        <div className="hide-options-container">
          {isOpen && <HideOptions ref={ref2} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </>
  );
});

export default MoreOptions;
