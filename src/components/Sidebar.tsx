import "@components/Sidebar.scss";
import fxsLogo from "@/assets/FXStreet premium.svg";
import fxsLogoSmall from "@/assets/FXStreet premium_small.svg";
import { Bar, Circle } from "@components/skeletons";

const SidebarMenu = () => (
  <div>
    {[...Array(5)].map((_, index) => (
      <Bar key={index} className="white w-75" />
    ))}
  </div>
);

const TopMenuSmall = () => (
  <div>
    {[...Array(2)].map((_, index) => (
      <Circle key={index} className="light-grey" />
    ))}
  </div>
);

function Sidebar() {
  return (
    <nav className="side-bar">
      <div className="side-bar-logo">
        <img src={fxsLogo} alt="fxs_logo" />
        <img src={fxsLogoSmall} alt="fxs_logo" />
      </div>
      <div className="side-bar-options">
        <SidebarMenu />
        <TopMenuSmall />
      </div>
    </nav>
  );
}

export default Sidebar;
