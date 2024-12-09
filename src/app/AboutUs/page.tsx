import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      {/* First Section */}
      <div className="flex flex-col xs:flex-row sm:flex-row justify-between mt-[80px] px-4 sm:px-8">
        {/* Left Block */}
        <div className="relative w-full xs:w-full sm:w-[672px] h-[478px] bg-[#007580]">
          <div className="absolute w-full sm:w-[495px] h-[161px] top-[64px] left-[64px] gap-[12px]">
            <p className="font-Inter font-[700] text-[20px] sm:text-[32px] leading-[38.73px] text-[#FFFFFF]">
              About Us - Comforty
            </p>
            <p className="w-full sm:w-[495px] font-Inter font-[400] text-[14px] sm:text-[18px] leading-[21.78px] text-[#FFFFFF] mt-4">
              At Comforty, we believe that the right chair can transform your space and elevate your comfort.
              Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <button className="absolute w-[179px] h-[56px] top-[368px] left-[64px] bg-blue-500 flex items-center justify-center pt-[16px] px-[32px] mt-[1000px] sm:mt-0">
            <p className="font-Inter font-[400] text-[14px] sm:text-[16px] leading-[24px] text-[#FFFFFF]">
              View collection
            </p>
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full xs:w-full sm:w-[619px] h-[478px] mt-8 sm:mt-0">
          <Image
            src="/assets/ImageBlock.png"
            alt="Loading"
            width={719}
            height={700}
            layout="responsive"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="text-center mt-[60px] sm:mt-[120px]">
        <p className="font-Inter font-[600] text-[20px] sm:text-[32px] text-[#272343]">
          What makes our Brand Different
        </p>
      </div>

      {/* Features Block */}
      <div className="w-full sm:w-[1320px] bg-[#F9F9F9] py-10 px-4 sm:px-8 mt-8">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <p className="font-Inter font-[400] text-[16px] sm:text-[20px] text-[#007580]">Next day as standard</p>
            <p className="font-Inter font-[400] text-[14px] sm:text-[16px] text-[#007580] mt-4">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <p className="font-Inter font-[400] text-[16px] sm:text-[20px] text-[#007580]">Next day as standard</p>
            <p className="font-Inter font-[400] text-[14px] sm:text-[16px] text-[#007580] mt-4">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <p className="font-Inter font-[400] text-[16px] sm:text-[20px] text-[#007580]">Next day as standard</p>
            <p className="font-Inter font-[400] text-[14px] sm:text-[16px] text-[#007580] mt-4">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <p className="font-Inter font-[400] text-[16px] sm:text-[20px] text-[#007580]">Next day as standard</p>
            <p className="font-Inter font-[400] text-[14px] sm:text-[16px] text-[#007580] mt-4">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="mt-10 text-center">
            <div className="w-full sm:w-[630px] mx-auto top-[1449px] left-[320px] gap-[24px]">
              <Image
                src="/assets/couch.png"
                alt="Loading"
                width={630}
                height={462}
                layout="responsive"
              />
            </div>
            <p className="font-Inter font-[400] text-[16px] sm:text-[20px] text-[#2A254B] mt-4">
              The Popular suede sofa
            </p>
            <p className="font-Inter font-[400] text-[14px] sm:text-[18px] text-[#2A254B] mt-2">
              $99.00
            </p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full sm:w-[1320px] bg-[#F9F9F9] py-10 px-4 sm:px-8 mt-8">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/parent.png"
              alt="Loading"
              width={305}
              height={375}
              layout="responsive"
            />
            <p className="font-Inter font-[400] text-[16px] sm:text-[20px] text-[#2A254B] mt-4">
              The Popular suede sofa
            </p>
            <p className="font-Inter font-[400] text-[14px] sm:text-[18px] text-[#2A254B] mt-2">
              $99.00
            </p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/parent.png"
              alt="Loading"
              width={305}
              height={375}
              layout="responsive"
            />
            <p className="font-Inter font-[400] text-[16px] sm:text-[20px] text-[#2A254B] mt-4">
              The Popular suede sofa
            </p>
            <p className="font-Inter font-[400] text-[14px] sm:text-[18px] text-[#2A254B] mt-2">
              $99.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
