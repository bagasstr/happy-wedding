"use client";
import cn from "@/lib/cn";
import { DataDesign } from "@/lib/constant";
import { IDesign } from "@/lib/types";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
const DesignSection = () => {
  const router = useRouter();

  return (
    <>
      <div id='desain' className={cn("py-10 bg-secondary px-4")}>
        <div className='text-center py-12 rounded-xl text-foreground  xl:max-w-6xl px-4 mx-auto'>
          <span>Pilih desain sesuai keinginan kamu</span>
          <h1 className='xl:text-3xl xl:font-bold xl:mx-auto text-primary text-xl font-bold w-[80%] mx-auto xl:w-full'>
            Desain Undangan
          </h1>

          <div className='grid grid-cols-1 xl:grid-cols-[repeat(4,25%)] xl:justify-center xl:items-start xl:gap-x-4 xl:pt-20 pt-20 gap-y-10 xl:gap-y-10'>
            {DataDesign.map((data: IDesign, index: number) => (
              <Card
                key={index}
                image={data.image}
                classNames={cn(
                  "bg-background xl:shadow-md w-[23rem] xl:w-[16rem] xl:h-[25rem] h-[25rem]"
                )}
                w={"w-[200px] xl:w-[150px]"}
                h={"h-[200px] xl:h-[150px]"}
                cta1={
                  <Button
                    title={"Demo"}
                    click={() => {}}
                    className='bg-background text-primary ring-2 ring-inset ring-primary px-4 w-full py-[8px] rounded-md'
                  />
                }
                cta2={
                  <Button
                    title={"Pilih Desain"}
                    click={() => {}}
                    className='bg-primary text-background px-4 w-full py-[8px] rounded-md'
                  />
                }
              />
            ))}
          </div>
          <div className='flex justify-center mt-12'>
            <Button
              title='lihat semua desain'
              click={() => router.push("/tema-undangan")}
              className='bg-primary text-background px-4 py-[8px] rounded-md'
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default DesignSection;
