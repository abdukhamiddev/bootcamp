import Link from "next/link";

export const MovingLink = ({ text, href, textColor, children, ...rest }) => {
  return (
    <Link href={href}>
      <em>
        <span>{text}</span>
      </em>
    </Link>
  );
};

export const UnderlineLink = ({ href, children, ...rest }) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};
