import { Dispatch, SetStateAction, forwardRef } from "react";
import { ArrowLeft } from "lucide-react";

type HideOptionsProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const HideOptions = forwardRef<HTMLDivElement, HideOptionsProps>(
  ({ setIsOpen }, ref) => {
    return (
      <div className="hide-options" ref={ref}>
        <h3>
          <ArrowLeft onClick={() => setIsOpen(false)} />
          Tell us why:
        </h3>
        <div className="hide-options-content">
          <div>
            <input type="radio" id="1" name="hide_option" />
            <label htmlFor="1">I'm not interested in this author</label>
          </div>
          <div>
            <input type="radio" id="2" name="hide_option" />
            <label htmlFor="2">I'm not interested in this topic</label>
          </div>
          <div>
            <input type="radio" id="3" name="hide_option" />
            <label htmlFor="3">I've seen too many posts on this topic</label>
          </div>
          <div>
            <input type="radio" id="4" name="hide_option" />
            <label htmlFor="4">The information is incorrect</label>
          </div>
          <div>
            <input type="radio" id="5" name="hide_option" />
            <label htmlFor="5">I've seen this post before</label>
          </div>
          <div>
            <input type="radio" id="6" name="hide_option" />
            <label htmlFor="6">Other reasons</label>
          </div>
          <button>Hide content</button>
        </div>
      </div>
    );
  }
);

export default HideOptions;
