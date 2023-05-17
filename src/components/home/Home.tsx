import { SelectedPage } from '@/shared/types';
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.jpeg";
import Logo1 from "@/assets/Logo1.png"
import Logo2 from "@/assets/Logo2.png"
import Logo3 from "@/assets/Logo3.png"
import Logo4 from "@/assets/Logo4.png"
import Logo5 from "@/assets/Logo5.png"

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-5  bg-gray-20 py-1 md:h-full md:pb-0">
        <motion.div  
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <div className="z-5 mt-12 md:basis-5/6">
              <motion.div 
              className="md:-mt-10"
              initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{duration:0.8}}
              variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}
            >
                <div className="relative">
                   <img alt="home-page-text" src={HomePageText} />
                </div>
                <p className="mt-8 text-sm">
                Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals. Get Your Dream
              Body Now.
               </p>
              </motion.div>
              <motion.div 
              className="mt-8 flex items-center gap-8"
              initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{delay:0.2, duration:0.8}}
              variants={{hidden: {opacity:0, x:-50}, visible: {opacity:1, x:0}}}
              >
              <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-rose-800 underline hover:text-rose-600"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More...</p>
            </AnchorLink>
              </motion.div>
            </div>
            <motion.div
          className="flex items-center justify-between md:z-10
              md:ml-40 md:justify-items-end"
              initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{delay:0.2, duration:0.8}}
              variants={{hidden: {opacity:0, x:50}, visible: {opacity:1, x:0}}}
        >
          <img className="w-11/12 rounded-lg" alt="home-pageGraphic" src={HomePageGraphic} />
        </motion.div>
        </motion.div>
        {isAboveMediumScreens && (
        <div className="h-[150px] w-full">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="sponsor1" src={Logo1} />
              <img alt="sponsor2" src={Logo2} />
              <img alt="sponsor3" src={Logo3} />
              <img alt="sponsor4" src={Logo4} />
              <img alt="sponsor5" src={Logo5} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home