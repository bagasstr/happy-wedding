"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import NavbarLargeScreen from "../atoms/NavbarLargeScreen";
import Logo from "../atoms/Logo";
import dynamic from "next/dynamic";
import NavbarSmallScreen from "../atoms/NavbarSmallScreen";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isSmall = useMediaQuery({
    maxWidth: 639,
  });
  const isMedium = useMediaQuery({
    minWidth: 640,
  });
  const isLarge = useMediaQuery({
    maxWidth: 1023,
  });

  return (
    <>
      {isSmall || isLarge ? (
        <>
          <div className='flex justify-center mt-4'>
            <Logo />
          </div>
          <NavbarSmallScreen />
        </>
      ) : (
        <NavbarLargeScreen />
      )}
    </>
  );
};
export default Navbar;
