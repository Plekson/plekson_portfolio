import React from "react";

type Props = {
  href?: string;
  text: string;
};

const CTA = (props: Props) => {
  return (
    <a
      href={props.href}
      className="text-lg px-4 py-4 border border-[#6ACFC7] cursor-pointer hover:bg-[#6ACFC7] duration-200 rounded"
    >
      {props.text}
    </a>
  );
};

export default CTA;
