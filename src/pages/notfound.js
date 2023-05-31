import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not found - Instagram";
  }, []);
  return <div className="flex items-center justify-center">Not Found</div>;
};

export default NotFound;
