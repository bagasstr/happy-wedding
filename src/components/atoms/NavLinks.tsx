"use client";
import cn from "@/lib/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface TNavLinksProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLinks = ({ href, children, className }: TNavLinksProps) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} className={cn(className)} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default NavLinks;
