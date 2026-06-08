import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${pathname.startsWith(href) ? "text-primaryColor px-1.5 py-2 border-b-2 border-primaryColor" : "text-white px-1.5 py-2 transition-all duration-300"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
