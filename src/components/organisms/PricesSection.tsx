"use client";
import cn from "@/lib/cn";
import { Prices } from "@/lib/constant";
import { IPrices } from "@/lib/types";
import Button from "../atoms/Button";
const PricesSection = () => {
  return (
    <>
      <div className={cn("xl:py-28 py-28")} id='harga'>
        <div className=''>
          <div className='text-center justify-center flex'>
            <h1 className='font-bold border-b-2 w-fit pb-2 border-primary xl:text-2xl text-xl text-foreground'>
              Harga Undangan Digital
            </h1>
          </div>
          <div className='xl:flex xl:justify-center xl:mt-12 mt-12'>
            <div className='shadow-lg xl:w-1/4 w-8/12 py-4 mx-auto rounded-lg'>
              {Prices.map((data: IPrices, index: number) => (
                <div className='rounded-lg' key={index}>
                  <div className='bg-primary p-4 rounded-t-lg'>
                    <h1 className='text-xl text-center font-bold text-background'>
                      {data.title}
                    </h1>
                  </div>
                  <div className='p-4'>
                    <div className='py-8'>
                      <p className='text-4xl text-center font-bold text-primary'>
                        {data.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <div className=''>
                      {data.description.map((desc) => (
                        <>
                          <p className='text-foreground xl:font-medium'>
                            - {desc.title}
                          </p>
                          <hr className='my-2 border-primary border-opacity-30' />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className='px-4 my-8'>
                <Button
                  title='Pilih Sekarang'
                  click={() => {}}
                  className='bg-primary text-background px-4 w-full py-[10px] rounded-md'
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PricesSection;
