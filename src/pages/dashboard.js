import React, { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
