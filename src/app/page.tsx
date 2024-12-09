
import Products from "@/app/Products/page";
import SingleProduct from "@/app/SingleProduct/page";
import ContactUs from "@/app/ContactUs/page";
import FAQ from "@/app/FAQ/page"
import AboutUs from "@/app/AboutUs/page"

import Carts from '@/app/Carts/page'
import HomePage from "@/app/HomePage/page";



export default function Home() {
  return (
  <div>
   <HomePage />
   <Products />
   <SingleProduct />
   
   <Carts />
   <ContactUs />
   <FAQ/>
   <AboutUs/>
   
  </div> 
  );
}
