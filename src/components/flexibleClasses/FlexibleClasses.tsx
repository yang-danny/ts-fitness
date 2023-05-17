import { SelectedPage, ClassType } from '@/shared/types';
import Cycling from "@/assets/cycling.jpg"
import Karate from "@/assets/karate.jpg"
import Weight from "@/assets/power.jpg"
import Yoga from "@/assets/meditation.jpg"
import MMA from "@/assets/mma.jpg"
import Workout from "@/assets/workout.jpg"
import iconBike from "@/assets/bike-red.png"
import iconBoxer from "@/assets/boxer-red.png"
import iconDumb from "@/assets/dumb-red.png"
import iconKarate from "@/assets/karate-red.png"
import iconWorkout from "@/assets/workout-red.png"
import iconYoga from "@/assets/yoga-red.png"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ClassBox from './ClassBox';

const classes: Array<ClassType> = [
    {
      name: "Weight Training",
      icon:iconDumb,
      image: Weight,
      classTime:"Monday: 9:00am-11:00am",
    },
    {
      name: "Yoga",
      icon:iconYoga,
      image: Yoga,
      classTime:"Tuesday: 11:00am-13:00am",
    },
    {
      name: "Cycling",
      icon:iconBike,
      image: Cycling,
      classTime:"Wednesday: 8:00am-10:00am",
    },
    {
      name: "Karate",
      icon:iconKarate,
      image: Karate,
      classTime:"Thursday: 9:00am-10:00am",
    },
    {
      name: "Martial Arts",
      icon:iconBoxer,
      image: MMA,
      classTime:"Friday: 9:00am-11:00am",
    },
    {
      name: "Workout Training",
      icon:iconWorkout,
      image: Workout,
      classTime:"Saturday: 9:00am-10:00am",
    },
  ];
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const FlexibleClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-gray-20 py-10">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <HText>We Are Offering Best Flexible Classes</HText>
          <p className="py-5">
          You're strong alone. At Hiper, we're stronger together. Are you ready to join us in-studio? 
          </p>
        </div>
      </motion.div>
      
        <motion.div 
        className='mt-5 items-center justify-between gap-8 md:flex'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8}}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
        <ul>
          {classes.map((item: ClassType, index) => (
            <ClassBox
              key={`${item.name}-${index}`}
              name={item.name}
              icon={item.icon}
              image={item.image}
              classTime={item.classTime}
            />
          ))}
        </ul>
      </motion.div>
    </motion.div>
  </section>
  )
}


export default FlexibleClasses