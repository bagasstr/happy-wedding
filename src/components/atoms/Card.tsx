import cn from "@/lib/cn";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TCardProps {
  image?: string | StaticImport;
  title?: string;
  description?: any;
  w?: string;
  h?: string;
  classNames?: string;
  cta1?: any;
  cta2?: any;
  price?: number;
}
const Card = ({
  image,
  title,
  description,
  w,
  h,
  classNames,
  cta1,
  cta2,
  price,
}: TCardProps) => {
  return (
    <>
      <div
        className={cn(
          classNames,
          "mx-auto xl:h-[21rem] rounded-2xl shadow flex flex-col items-center justify-center"
        )}>
        <div className='flex flex-col py-8 px-4 h-full w-full items-center'>
          {image && (
            <div className={cn(w, h, "relative")}>
              <Image src={image} fill alt='undangan-digital' className='' />
            </div>
          )}
          <div className="xl:w-56 text-center text-foreground xl:text-lg font-bold font-['SF Pro']">
            {title}
          </div>
          {price && <div className=''>{price}</div>}
          <div className="w-56 xl:mt-4 text-center text-foreground text-base font-normal font-['SF Pro']">
            {description}
          </div>
          <div className='xl:space-y-3 space-y-3 w-full xl:mt-4 mt-10'>
            {cta1}
            {cta2}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
