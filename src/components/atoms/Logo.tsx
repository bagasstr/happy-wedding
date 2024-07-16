import Image from "next/image";
import cn from "@/lib/cn";

interface TLogoProps {
  classNames?: string;
}
const Logo = ({ classNames }: TLogoProps) => {
  return (
    <>
      <div className={cn(classNames, "flex items-center")}>
        <Image
          src='/wedding-invitation.png'
          width={45}
          height={45}
          alt='Logo'
        />
        <div className='leading-none'>
          <h1 className='xl:text-2xl text-primary font-bold'>Happy Wedding</h1>
          <span className='text-sm text-foreground font-medium'>
            Undangan Digital
          </span>
        </div>
      </div>
    </>
  );
};
export default Logo;
