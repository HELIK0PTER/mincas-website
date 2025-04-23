import React from "react";

import LogoutButton from "@/components/atoms/LogoutButton";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="relative w-full h-14">
        <div className="absolute top-4 right-10">
          <LogoutButton />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
