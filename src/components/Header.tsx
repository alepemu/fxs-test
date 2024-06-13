import "@components/Header.scss";
import { Bar, Circle } from "@components/skeletons";

const HeaderLeft = () => (
  <div className="header-left">
    <Circle className="dark-blue" />
    <Bar className="dark-blue w-25" />
  </div>
);

const HeaderRight = () => (
  <div className="header-right">
    <div>
      <Bar className="orange-primary w-100px" />
    </div>
    <div>
      <Circle className="medium-grey" />
    </div>
    <div>
      <Circle className="medium-grey" />
    </div>
    <div>
      <Circle className="medium-grey" />
      <Bar className="medium-grey w-100px" />
    </div>
  </div>
);

function Header() {
  return (
    <header className="header">
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
}

export default Header;
