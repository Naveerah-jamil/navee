import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full">
      {/* Wrapper div to stack both headers vertically */}
      <div className="flex flex-col">

        {/* First header */}
        <div className="w-full h-[45px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] bg-[#272343] flex justify-between items-center text-xs sm:text-sm md:text-base">
          <div className="font-Inter font-[400] text-[#FFFFFF] flex items-center justify-center sm:justify-start">
            Free shipping on all orders over $50
          </div>

          {/* Faqs - Adjusted for smaller devices */}
          <div className="hidden sm:flex gap-[24px] opacity-70 text-white">
            <Link href="/FAQ" className="text-[13px] leading-[16.9px]">Faqs</Link>
            <Link href="/ContactUs" className="text-[13px] leading-[16.9px]">Contact</Link>
          </div>

          {/* For mobile, Faqs and Contact will be stacked */}
          <div className="sm:hidden flex gap-[24px]">
            <div className="text-[13px] leading-[16.9px] text-[#FFFFFF]">Faqs</div>
            <div className="text-[13px] leading-[16.9px] text-[#FFFFFF]">Contact</div>
          </div>
        </div>

        {/* Second header */}
        <div className="w-full h-[84px] pt-[20px] pr-[16px] pb-[20px] pl-[16px] bg-[#F0F2F3] flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-[40px] h-[40px]">
              {/* Logo placeholder */}
              {/* You can replace this div with an actual logo */}
            </div>
            <div className="text-[#272343] font-Inter font-[400] text-[13px] sm:text-[16px] leading-[31.2px]">
              Comforty
            </div>
          </div>

          {/* Image section */}
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/assets/image copy.png"
              alt="Comforty Logo"
              height={44}
              width={120}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
