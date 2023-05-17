import Navbar from "@/components/navbar/Navbar"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/components/home/Home";
import Benefits from "@/components/benefits/Benefits";
import FlexibleClasses from "@/components/flexibleClasses/FlexibleClasses";
import ContactUs from "@/components/contactUs/ContactUs";
import Footer from "@/components/footer/Footer";
import BMI from "@/components/bmi/BMI";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
    <Navbar selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <FlexibleClasses setSelectedPage={setSelectedPage} />
      <BMI setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
