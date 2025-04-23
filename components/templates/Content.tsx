import React from "react";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="test" className={`flex flex-1 flex-col h-full relative`}>
      {children}
    </div>
  );
};
export default Content;
