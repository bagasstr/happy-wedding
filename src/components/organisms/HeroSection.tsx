"use client";
import cn from "@/lib/cn";
import Image from "next/image";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const isSmall = useMediaQuery({
    maxWidth: 639,
  });
  const isMedium = useMediaQuery({
    minWidth: 640,
  });
  const isLarge = useMediaQuery({
    maxWidth: 1023,
  });
  const isExtraLarge = useMediaQuery({
    minWidth: 1024,
  });
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      {isSmall || isLarge || isExtraLarge ? (
        <div className={cn("xl:h-svh xl:scroll-pt-12 px-4")}>
          <div className='grid grid-cols-1 xl:grid-cols-2 justify-center gap-y-4 xl:items-center sm:items-end w-full xl:max-w-6xl px-4 mx-auto'>
            <div className='text-center xl:text-start'>
              <h1 className='xl:text-5xl text-[24px] sm:mx-auto text-primary font-bold sm:w-[80%] xl:w-[70%]'>
                Undangan Digital Solusi Praktis
              </h1>
              <p className='xl:mt-4 w-[70%] mt-4 mx-auto text-base font-medium text-foreground lg:text-center xl:text-start xl:mx-0'>
                Happy wedding adalah penyedia jasa pembuatan undangan digital
                berbasis website. Kami memudahkan kamu dalam urusan undangan.
              </p>
              <div className='xl:mt-4 mt-10 space-y-4 xl:space-x-4 space-x-4'>
                <Button
                  title={"Lihat Tema"}
                  click={() => {}}
                  className='border-primary bg-background border-2 text-primary px-4 py-[10px] rounded-md'
                />
                <Button
                  title={"Buat Undangan"}
                  click={() => {}}
                  className='bg-primary border-primary border-2 text-background px-4 py-[10px] rounded-md'
                />
              </div>
            </div>
            <div className='justify-self-center py-28 md:py-28 lg:py-28'>
              <Image
                src={"/wedding.png"}
                priority
                width={300}
                height={300}
                alt={"logo"}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default HeroSection;
