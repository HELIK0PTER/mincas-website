import React from "react";

import Background from "../organisms/Background";

const Section = ({
  children,
  bgColor = "none",
  ...props
}: {
  children: React.ReactNode;
  bgColor?: "none" | "primary" | "secondary" | "background" | undefined;
  id?: string;
}) => {
  return (
    <section id={props.id} className={`flex min-h-[50vh]`}>
      <Background color={bgColor}>{children}</Background>
    </section>
  );
};
export default Section;
