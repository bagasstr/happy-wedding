import cn from "@/lib/cn";
import Card from "../atoms/Card";
import { DataValueFeatureSection } from "@/lib/constant";
import { IDataFeatureSection } from "@/lib/types";
const ValueFeatureSection = () => {
  return (
    <>
      <div className={cn("py-10 px-4")}>
        <div className='text-center bg-background py-12 rounded-xl  xl:max-w-6xl px-4 mx-auto'>
          <h1 className='xl:text-3xl xl:font-bold xl:mx-auto text-primary text-xl font-bold w-[80%] mx-auto xl:w-full'>
            Mengapa Memilih Happy Wedding?
          </h1>

          <div className='grid grid-cols-1 xl:grid-cols-[repeat(3,25%)] xl:justify-center xl:items-start gap-x-12 xl:pt-20 pt-20 gap-y-10 xl:gap-y-10'>
            {DataValueFeatureSection.map(
              (data: IDataFeatureSection, index: number) => (
                <Card
                  key={index}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  w={"w-14"}
                  h={"h-14"}
                  classNames={cn("bg-background xl:shadow-md w-72")}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ValueFeatureSection;
