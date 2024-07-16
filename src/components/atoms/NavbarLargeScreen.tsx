"use client";
import cn from "@/lib/cn";
import { NavlinksDesktop } from "@/lib/constant";
import { TNavLinks } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import React from "react";
import NavLinks from "./NavLinks";
const NavbarLargeScreen = () => {
  return (
    <>
      <div
        className={cn(
          "fixed z-10 backdrop-blur-md bg-background/50 top-0 py-4 right-0 left-0"
        )}>
        <div className='flex justify-between items-center xl:max-w-6xl mx-auto'>
          <Logo />
          <div className={cn()}>
            <ul className={cn("flex gap-4 items-center")}>
              {NavlinksDesktop.links.map((link: TNavLinks, index: number) => (
                <NavLinks
                  key={index}
                  href={link.href}
                  className='text-foreground font-medium hover:text-primary'>
                  {link.name}
                </NavLinks>
              ))}
              <Button
                title={"Buat Undangan"}
                click={() => {}}
                className='bg-primary text-background px-4 py-[10px] rounded-md'
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarLargeScreen;
