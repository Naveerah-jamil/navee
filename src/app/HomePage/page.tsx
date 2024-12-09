import { LuShoppingCart } from "react-icons/lu";
import React from 'react';
import Image from 'next/image';

export default function Home () {
  return (
    <div className="w-full h-auto gap-0 rounded-[0px_0px_48px_48px] bg-white">

{/* Hero Section */}
<section className="container mx-auto flex flex-col lg:flex-row items-center mt-8 gap-8 bg-[#F0F2F3]">
  <div className="flex-1 text-center lg:text-left">
    <h2 className="text-[60px] font-bold leading-[66px]">
      Best Furniture Collection For Your Interior.
    </h2>
    <p className="text-gray-600 mt-4">
      Explore our exclusive range of furniture crafted for comfort and style.
    </p>
    <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
      Shop Now
    </button>
  </div>
  <div>
    <Image
      src="/assets/Product Image.png"
      alt="Furniture"
      width={434}
      height={584}
      className="w-full h-auto rounded-lg"
    />
  </div>
</section>

      {/* Brands Section */}
<section className="container mx-auto mt-16">
  <h3 className="text-center text-xl font-semibold text-gray-700 mb-8">Our Trusted Brands</h3>
  <div className="flex justify-between items-center flex-wrap gap-4">
    {["zapier", "pipedrive", "cib_bank", "burnt_toast", "moz"].map((brand) => (
      <div key={brand} className="w-32 h-16 bg-gray-200 rounded-lg shadow-sm hover:shadow-md flex items-center justify-center">
        <Image
          src={`/${brand}.png`}
          alt={brand}
          className="max-h-12 object-contain"
          width={32}
          height={16}
        />
      </div>
    ))}
  </div>
</section>

      {/* Featured Products Section */}
<section className="container mx-auto mt-16 bg-white">
  <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mb-8">Featured Products</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { src: "/assets/image5.png", label: "New", price: "$20" },
      { src: "/assets/image6.png", label: "Sales", price: "$20" },
      { src: "/assets/image7.png", label: "", price: "$20" },
      { src: "/assets/image8.png", label: "", price: "$20" }
    ].map((product, index) => (
      <div key={index} className="w-[312px] h-[377px] relative">
        <div className="rounded-[6px]">
          <Image src={product.src} alt="loading" width={312} height={312} />
          {product.label && (
            <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] bg-[#01AD5A] rounded-tl-[4px]">
              <p className="text-white text-[13px]">{product.label}</p>
            </div>
          )}
        </div>
        <div className="w-[256px] h-[51px] mt-[10px]">
          <p className="text-[#007580]">Library Stool Chair</p>
          <p>{product.price}</p>
        </div>
        <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
          <LuShoppingCart className="w-[22px] h-[22px]" />
        </div>
      </div>
    ))}
  </div>
</section>
{/*Top catogories */}
      {/* Product Section */}
<div className="flex flex-wrap justify-center gap-8 pt-8">
  {[
    { src: "/assets/image5.png", label: "New", price: "$20" },
    { src: "/assets/image6.png", label: "Sales", price: "$20" },
    { src: "/assets/image7.png", label: "", price: "$20" },
  ].map((product, index) => (
    <div key={index} className="w-full sm:w-[424px] relative">
      <div className="rounded-[6px]">
        <Image src={product.src} alt="Product" width={424} height={424} />
        {product.label && (
          <div className="absolute top-[20px] left-[20px] bg-[#01AD5A] rounded-tl-[4px] text-white text-[13px]">
            {product.label}
          </div>
        )}
      </div>
      <div className="w-[256px] h-[51px] mt-[10px]">
        <p className="text-[#007580]">Library Stool Chair</p>
        <p>{product.price}</p>
      </div>
      <div className="absolute top-[250px] right-[-20px] bg-[#029FAE] text-white rounded-[6px] p-[10px]">
        <LuShoppingCart className="w-[22px] h-[22px]" />
      </div>
    </div>
  ))}
</div>

{/* Second Section */}
<div className="flex flex-wrap justify-center gap-8 mt-16">
  {/* Large Image */}
  <div className="w-full sm:w-[648px]">
    <Image src="/assets/Image3.png" alt="Main Feature" width={648} height={648} className="rounded-lg" />
  </div>

  {/* Small Images */}
  <div className="flex flex-wrap justify-center gap-4 mt-8">
    {Array(4).fill(null).map((_, index) => (
      <div key={index} className="w-full sm:w-[312px]">
        <Image src="/assets/Image3.png" alt={`Feature Image ${index + 1}`} width={312} height={312} className="rounded-lg" />
      </div>
    ))}
  </div>

  {/* Products Section */}
  <div className="flex flex-wrap justify-center gap-8 mt-10 px-4">
    {Array(4).fill(null).map((_, index) => (
      <div key={index} className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white rounded-lg shadow-md p-4">
        <div className="rounded-[6px] overflow-hidden">
          <Image src={`/assets/image${index + 1}.png`} alt={`Product ${index + 1}`} width={312} height={312} className="w-full h-auto" />
          <div className="absolute top-4 left-4 bg-[#01AD5A] text-white text-sm font-medium rounded px-2 py-1">
            {index % 2 === 0 ? "New" : "Sales"}
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-[#007580]">Library Stool Chair</p>
          <p className="text-gray-600">$20</p>
        </div>
        <div className="absolute top-[250px] right-4 bg-[#029FAE] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          <LuShoppingCart className="w-5 h-5" />
        </div>
      </div>
    ))}
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-4 sm:px-10 md:px-[100px] bg-white">
  {/* Product 1 */}
  <div className="w-full h-[377px] relative">
    <div className="rounded-[6px]">
      <Image
        src="/assets/image5.png"
        alt="loading"
        width={312}
        height={312}
      />
      <div className="absolute w-[49px] h-[26px] top-[20px] left-[20px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#01AD5A]">
        <p className="w-[29px] h-[29px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
          New
        </p>
      </div>
    </div>
    <div className="w-[256px] h-[51px] mt-[10px]">
      <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
        Library Stool Chair
      </p>
      <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
    </div>
    <div className="absolute w-[44px] h-[44px] bg-[#029FAE] text-[#FAFAFA] rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
      <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
    </div>
  </div>

  {/* Product 2 */}
  <div className="w-full h-[377px] relative">
    <div className="rounded-[6px]">
      <Image
        src="/assets/image6.png"
        alt="loading"
        width={312}
        height={312}
      />
      <div className="absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[#F5813F]">
        <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
          Sales
        </p>
      </div>
    </div>
    <div className="w-[256px] h-[51px] mt-[10px]">
      <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
        Library Stool Chair
      </p>
      <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
    </div>
    <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
      <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
    </div>
  </div>

  {/* Product 3 */}
  <div className="w-full h-[377px] relative">
    <div className="rounded-[6px]">
      <Image
        src="/assets/image7.png"
        alt="loading"
        width={312}
        height={312}
      />
    </div>
    <div className="w-[256px] h-[51px] mt-[10px]">
      <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
        Library Stool Chair
      </p>
      <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
    </div>
    <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
      <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
    </div>
  </div>

  {/* Product 4 */}
  <div className="w-full h-[377px] relative">
    <div className="rounded-[6px]">
      <Image
        src="/assets/image8.png"
        alt="loading"
        width={312}
        height={312}
      />
    </div>
    <div className="w-[256px] h-[51px] mt-[10px]">
      <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">
        Library Stool Chair
      </p>
      <p className="font-Inter text-[16px] leading-[20.8px]">$20</p>
    </div>
    <div className="absolute w-[44px] h-[44px] bg-[#F0F2F3] text-black rounded-[6px] top-[250px] right-[-20px] mt-[70px] mr-[20px]">
      <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
    </div>
  </div>
</div>
</div>
  ) }
    

