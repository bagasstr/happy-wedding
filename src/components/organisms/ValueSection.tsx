import cn from "@/lib/cn";
import Image from "next/image";
import Card from "../atoms/Card";
import { DataValueSection } from "@/lib/constant";
import { IDataValueSection } from "@/lib/types";
const ValueSection = () => {
  return (
    <>
      <div className={cn("py-10 px-4")}>
        <div className='text-center bg-secondary py-12 rounded-xl xl:max-w-6xl px-4 mx-auto'>
          <h1 className='xl:text-3xl xl:font-bold xl:w-full xl:mx-auto text-primary text-xl font-bold w-[80%] mx-auto'>
            Alasan Kamu Harus Beralih Ke Undangan Digital
          </h1>

          <div className='grid grid-cols-1 gap-x-4 xl:grid-cols-[repeat(3,25%)] xl:justify-center xl:items-start xl:pt-20 pt-20 gap-y-4 xl:gap-x-12 xl:gap-y-0'>
            {DataValueSection.map((data: IDataValueSection, index: number) => (
              <Card
                image={data.image}
                key={index}
                title={data.title}
                description={data.description}
                w={"w-14"}
                h={"h-14"}
                classNames={cn("bg-background w-72")}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ValueSection;
