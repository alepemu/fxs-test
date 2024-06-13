import "@/Dashboard.scss";

import Sidebar from "@components/Sidebar";
import Header from "@components/Header";
import Content from "@/components/content/Content";
import Aside from "@components/Aside";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Header />
      <Content />
      <Aside />
    </div>
  );
}

export default Dashboard;
