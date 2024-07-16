import cn from "@/lib/cn";
import Logo from "../atoms/Logo";
import { Instagram } from "lucide-react";
const FooterSection = () => {
  return (
    <>
      <div className={cn("py-2 bg-primary")}>
        <p className='text-background text-center'>
          Copyright © 2024{" "}
          <span className='text-background'>Happy Weddings</span>
        </p>
      </div>
    </>
  );
};
export default FooterSection;
