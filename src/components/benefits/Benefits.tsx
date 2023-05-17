import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitBox from './BenefitBox';
import GrilRun from "@/assets/girl-run.png";
import ActionButton from '@/shared/ActionButton';

  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-12 w-12" />,
      title: "State of the Art Facilities",
      description:
        "Equipped with the latest and most advanced exercise equipment, amenities, and services available in the fitness industry. ",
    },
    {
      icon: <UserGroupIcon className="h-12 w-12" />,
      title: "100's of Diverse Classes",
      description:
        "A variety of different classes to its members. Including Yoga, Pilates, Cycling, Strength training, Dance, and more.",
    },
    {
      icon: <AcademicCapIcon className="h-12 w-12" />,
      title: "Expert and Pro Trainers",
      description:
        "Professionals who have acquired extensive knowledge and skills in Fitness and GYM who have the necessary credentials, qualifications, and experience.",
    },
  ];
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Benefits({setSelectedPage}: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
<motion.div
   onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
   >
 <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>We Can Give A Shape Of Your Body Here!</HText>
          <p className="my-5 text-sm">
          At Hiper Fitness, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitBox
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <motion.div 
        className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}>
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="Gril Run"
            src={GrilRun}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                  Take Your Health And Body To Next {" "}
                    <span className="text-rose-600">LEVEL</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
              </p>

            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </motion.div>
</motion.div>
    </section>
  )
}

export default Benefits