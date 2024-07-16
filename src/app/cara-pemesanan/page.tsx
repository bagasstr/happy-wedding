import cn from "@/lib/cn";
const CaraPesan = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center py-20'>
        <div className='mb-12'>
          <h1 className='text-2xl font-bold text-foreground'>Cara Pemesanan</h1>
        </div>
        <div className=''>
          <ol className='items-center w-2/4 mx-auto space-y-12 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse '>
            <li className='flex flex-col justify-center items-center text-primary space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-primary rounded-full shrink-0 mb-3'>
                1
              </span>
              <span className='text-center'>
                <h3 className='font-medium leading-tight'>Pilih Tema</h3>
                <p className='text-sm text-foreground w-fit'>
                  Pilih tema yang diinginkan. Perlu diperhatikan Tema yang sudah
                  dipilih tidak dapat diubah
                </p>
              </span>
            </li>
            <li className='flex flex-col justify-center items-center text-primary space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-primary rounded-full shrink-0 mb-3 '>
                2
              </span>
              <span className='text-center'>
                <h3 className='font-medium leading-tight'>
                  Isi data undangan dengan lengkap
                </h3>
                <p className='text-sm text-foreground'>
                  Isi data nama mempempelai, tanggal dan tempat acara, foto
                  prewedding kamu, isi kisah cinta kamu, amplop, dan lain-lain
                </p>
              </span>
            </li>
            <li className='flex flex-col justify-center items-center text-primary space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-primary rounded-full shrink-0 mb-3 '>
                3
              </span>
              <span className='text-center'>
                <h3 className='font-medium leading-tight'>
                  Lakukan pembayaran
                </h3>
                <p className='text-sm text-foreground'>
                  Selsaikan pembayaran untuk mendapatkan link undangan
                </p>
              </span>
            </li>
            <li className='flex flex-col justify-center items-center text-primary space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-primary rounded-full shrink-0 mb-3 '>
                4
              </span>
              <span className='text-center'>
                <h3 className='font-medium leading-tight'>
                  Link undangan: https://nama-mempelai.happy-wedding.com/
                </h3>
                <p className='text-sm text-foreground'>
                  Sebarkan undangan kamu di media sosial
                </p>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
export default CaraPesan;
