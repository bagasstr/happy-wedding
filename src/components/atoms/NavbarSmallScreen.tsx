import cn from "@/lib/cn";
import { NavlinksMobile } from "@/lib/constant";
import { TNavLinks } from "@/lib/types";
import { CircleDollarSign, Home, Palette, Route } from "lucide-react";
import Link from "next/link";
import NavLinks from "./NavLinks";
const NavbarSmallScreen = () => {
  return (
    <>
      <div className='fixed z-50 w-11/12 h-16 max-w-lg -translate-x-1/2 bg-white border border-primary rounded-full bottom-4 left-1/2 bg-secondary/30 backdrop-blur-md'>
        <div className='grid h-full max-w-lg grid-cols-5 '>
          {NavlinksMobile.links.map((link: TNavLinks, index: number) => (
            <NavLinks
              key={index}
              href={link.href}
              className='inline-flex flex-col items-center justify-center px-5 rounded-s-full'>
              <link.icon />
              <span className='sr-only'>{link.name}</span>
            </NavLinks>
          ))}
        </div>
      </div>
    </>
  );
};
export default NavbarSmallScreen;
