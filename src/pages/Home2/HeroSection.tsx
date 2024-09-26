import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <div
        style={{ fontFamily: "" }}
        className="mt-3 font-raleway dark:text-white  flex items-center  mx-auto w-[400px] h-[240px]  text-[50.33px] font-bold leading-[56.33px] text-center"
      >
        <h1>Awesome UI Dark Template for Webflow Agency</h1>
      </div>
      <div className=" text-center">
      <button class="bg-black text-white font-raleway h-[60px] w-[221px]   rounded">Get in Touch</button>
    
      </div>
    
    </div>
  );
}
export default HeroSection;
// Reusable text content component for clarity

// Reusable image component for flexibility
