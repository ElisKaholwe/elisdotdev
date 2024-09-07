import Link from 'next/link';
import { IoSparkles } from 'react-icons/io5';
const Contact = () => {
  return (
    <>
      <div
        className={`w-full bg-gradient-to-br from-cyan-900/35 to-[#102044] border-[1.25px] border-cyan-900/10 rounded-[12px] lg:rounded-none md:rounded-none`}>
        <div className={`flex flex-col items-center text-center p-[1rem] my-4`}>
          <p className={`lg:text-[24px] font-[600] md:text-[22px]`}>Are you looking to create something awesome together?</p>
          <button className='flex items-center justify-center gap-3 px-4 py-2 my-3 text-[22px] font-[600] rounded-full border-[1.5px]'>
            <Link href='mailto:eliskaholwe@gmial.com'>Let&apos;s connect !</Link> <IoSparkles className='animate-shine' />{' '}
          </button>
          <p className={`lg:text-[20px] md:text-[18px]`}>I am available for hire and open contribution at </p>
          <span className={`text-theme-orange text-[17px] font-[500]`}>eliskaholwe@gmail.com</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
