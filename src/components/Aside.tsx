import "@components/Aside.scss";
import { Bar, Circle } from "@components/skeletons";

const BlueSection = () => (
  <div>
    <Bar className="white w-75" />
    <Bar className="white w-50" />
  </div>
);

const TransparentSection = () => (
  <div>
    <Bar className="dark-blue w-75px" />
    <Circle className="dark-blue" />
  </div>
);

function Aside() {
  return (
    <aside className="aside">
      <BlueSection />
      <TransparentSection />
    </aside>
  );
}

export default Aside;
