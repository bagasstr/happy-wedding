import cn from "@/lib/cn";

type TButtonProps = {
  title: string;
  click: () => void;
  className?: string;
};
const Button: React.FC<TButtonProps> = ({ title, click, className }) => {
  return (
    <>
      <button onClick={click} className={cn(className)}>
        {title}
      </button>
    </>
  );
};
export default Button;
