import Logo from "@/assets/hiper.png";
import hiper from "@/assets/HomePageText.png"
import { FaEnvelope,FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt } from 'react-icons/fa'
import { SiWechat } from "react-icons/si";
import { GoLocation } from 'react-icons/go'
import Link from "../navbar/Link";
import { SelectedPage } from '@/shared/types';
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
const Footer = ({selectedPage, setSelectedPage}: Props) => {
  return (
    <footer className="bg-gray-20 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-10 basis-1/2 md:mt-0">
          <div className="flex items-center">
          <img alt="logo" src={Logo} className="w-20"/>
          <img alt="hiper" src={hiper} className="h-14 mt-7 px-3"/>
          </div>
          <span className="mt-2 absolute w-[26rem] h-[4px] bg-red-600"></span>
          <p className="my-6">
          We Are Always Providing Best Fitness Service For You.
          </p>
          <p className="text-xs">Hiper Fitness © All Rights Reserved.</p>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
          <h3 className="font-bold">Links</h3>
          <span className="absolute w-[7rem] h-[4px] bg-red-600"></span>
          <div className="mt-3 flex flex-col gap-3">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                  page="BMI"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
        <h3 className="font-bold">Contact Us</h3>
        <span className="absolute w-[7rem] h-[4px] bg-red-600"></span>
                <div className="mt-3 " >
                <span className="flex my-2 items-center">
                  <FaPhoneAlt />
                  <p className="px-2">+61 (02) 9789 1234</p>
                </span>
                <span className="flex my-2 items-center">
                  <FaEnvelope />
                  <p className="px-2">info@hiperfitness.com.au</p>
                </span>
                <span className="flex my-2 items-center">
                  <GoLocation />
                  <p className="px-2">199 Burwood Road, Burwood NSW 2134.</p>
                </span>
                <div className="flex gap-7 text-[18px] min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="bg-white p-4 rounded-full hover:bg-red-600 hover:text-white"
                > <FaFacebookF /></i>
                 <i
                  style={{ transition: "all 0.3s" }}
                  className="bg-white p-4 rounded-full hover:bg-red-600 hover:text-white"
                > <FaTwitter /></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="bg-white p-4 rounded-full hover:bg-red-600 hover:text-white"
                >  <SiWechat /></i>  
                <i
                  style={{ transition: "all 0.3s" }}
                  className="bg-white p-4 rounded-full hover:bg-red-600 hover:text-white"
                >  <FaYoutube /></i>
              </div>
              </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;