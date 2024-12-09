import { FaPlus } from "react-icons/fa6";

// Name the component for better readability
const FAQSection = () => {
  return (
    <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-screen-xl mx-auto py-8">
        <div className="text-center mb-8">
          <p className="font-Helvetica font-[700] text-[28px] sm:text-[36px] md:text-[48px] text-[#333333]">
            Questions Looks Here
          </p>
          <p className="font-Inter font-[400] text-[14px] sm:text-[16px] md:text-[18px] text-[#4F4F4F] mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="flex flex-col space-y-8 sm:w-1/2">
            {['What types of chairs do you offer?', 'What types of chairs do you offer?', 'What types of chairs do you offer?'].map((question, idx) => (
              <div key={idx} className="w-full bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <p className="font-Inter font-[400] text-[14px] sm:text-[16px] leading-[24px] text-[#4F4F4F]">
                    {question}
                  </p>
                  <FaPlus className="w-[24px] h-[24px] text-[#B88E2F]" />
                </div>
                <p className="mt-4 font-Inter font-[400] text-[12px] sm:text-[14px] leading-[24px] text-[#4F4F4F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis
                  enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </p>
              </div>
            ))}
          </div>

          {/* Second column */}
          <div className="flex flex-col space-y-8 sm:w-1/2 mt-8 sm:mt-0">
            {['What types of chairs do you offer?', 'What types of chairs do you offer?', 'What types of chairs do you offer?'].map((question, idx) => (
              <div key={idx} className="w-full bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <p className="font-Inter font-[400] text-[14px] sm:text-[16px] leading-[24px] text-[#4F4F4F]">
                    {question}
                  </p>
                  <FaPlus className="w-[24px] h-[24px] text-[#B88E2F]" />
                </div>
                <p className="mt-4 font-Inter font-[400] text-[12px] sm:text-[14px] leading-[24px] text-[#4F4F4F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis
                  enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Assign a display name if needed (useful for debugging)
FAQSection.displayName = "FAQSection";

export default FAQSection;
