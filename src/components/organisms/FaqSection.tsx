import cn from "@/lib/cn";
import Accordion from "../atoms/Accordion";
const FaqSection = () => {
  return (
    <>
      <div className={cn("py-28")}>
        <div className=' justify-center flex flex-col items-center'>
          <div className='text-center mb-8'>
            <h1 className='font-bold border-b-2 w-fit pb-2 border-primary xl:text-2xl text-[24px] text-foreground'>
              FAQ
            </h1>
          </div>
          <div className='xl:w-2/5 xl:mt-8'>
            <Accordion
              title='Berapa lama proses pembuatan undangan digital?'
              content='Proses pembuatan sangat instant, karena kamu sendiri yang buat undangannya.'
            />
            <Accordion
              title='Bagaimana cara pesannya?'
              content='1. Pilih desain undangan yang Anda suka. 2. Isi data undangan dengan lengkap. 3. Lakukan pembayaran. 4. Setelah pembayaran berhasil, Anda akan menerima link undangan.'
            />
            <Accordion
              title='Apakah bisa revisi data undangan?'
              content='Tentu saja bisa! Jika ada data yang perlu diubah, silahkan hubungi kami.'
            />
            <Accordion
              title='Apakah tema undangan bisa diganti ketika sudah jadi?'
              content='Mohon maaf, saat ini tema undangan belum dapat diganti. Pastikan Anda telah memilih tema yang paling sesuai dengan keinginan Anda sebelum melanjutkan.'
            />
            <Accordion
              title='Bisa request musik?'
              content='Bebas pilih musik favoritmu! Cukup masukkan judul lagu saat mengisi data undangan.'
            />
            <Accordion
              title='Perlu diingat!'
              content='Saat ini, kami belum bisa mengubah warna atau tema undangan sesuai permintaan.'
            />
            <Accordion
              title='Berapa lama masa aktif undangan?'
              content='Masa aktif undangan hingga H+2 acara'
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FaqSection;
