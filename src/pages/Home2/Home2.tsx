import Navbar from "@/pages/Home2/Navbar";
import HeroSection from "@/pages/Home2/HeroSection";
import Card from "@/pages/Home2/Card";
import Slider from "@/pages/Home2/Slider";
import Price from "@/pages/Home2/Price";
import Footer from "@/pages/Home2/Footer";
import Faq from "@/pages/Home2/Faq";
import ContactForm from "@/pages/Home2/ContactForm";
import img from "./logo.png";
import Fotter2 from "./Fotter2.png";
import blackBanner from "./blackBanner.png";
import { useState, useEffect } from "react";
import App from "@/App.css";
export default function Home2() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for dark mode preference on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Update the document class and local storage when darkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <div className="dark:bg-black bg-[rgba(245,248,255,1)] w-[1440px] mx-auto">
   
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center -91px",
          backgroundSize: "55%",
        }}
        className="bg-no-repeat bg-cover h-auto"
      >
        <div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <HeroSection />
          <Card />
          <Slider />
          <Price />
          <Faq />
          <hr />

          {/* Footer Section */}
          <div
            className="w-full bg-no-repeat bg-bottom bg-cover bg-blend-overlay"
            style={{
              backgroundImage: darkMode
                ? `url(${blackBanner})`
                : `url(${Fotter2})`,
            }}
          >
            <ContactForm />
            <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode}    />
          </div>
        </div>
      </div>
    </div>
  );
}











