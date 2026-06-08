import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${pathname.startsWith(href) ? "bg-sky-500 text-white px-5 py-2" : "text-white px-5 py-2"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
