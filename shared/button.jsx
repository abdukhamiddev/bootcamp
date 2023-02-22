import Link from "next/link";
import React from "react";

const Button = ({ href, to, target, children, ...rest }) => {
  return (
    <div className="relative w-fit">
      {href ? (
        <a
          className="btn-common"
          href={href}
          target={target || "_blank"}
          rel={target ? "noopener noreferrer" : undefined}
          {...rest}
        >
          {children}
        </a>
      ) : to ? (
        <Link href={to} {...rest} className="btn-common">
          {children}
        </Link>
      ) : (
        <button
          {...rest}
          className="text-xs font-semibold btn-common py-[0.4vw] px-[1.2vw] mr-[2vw]"
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
