import { motion } from "framer-motion";
import imgBMI from "@/assets/BMI.png"
import { SelectedPage } from "@/shared/types";
import { FormEvent, useRef, useState } from "react";

type Props = { setSelectedPage: (value: SelectedPage) => void;}

const BMI = ({setSelectedPage }: Props) => {
  const [weight, setWeight] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [bmi, setBmi] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const inputRef= useRef<HTMLInputElement>(null);

  let calcBMI=(e:FormEvent)=>{
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));
      // logic for message
      if (bmi < 18.5) {
        setMessage("Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("Normal");
      }  else if (bmi >= 25 && bmi < 30) {
        setMessage("Overweight");
      }
      else if (bmi >= 30 && bmi < 40) {
        setMessage("Obese");
      }
       else {
        setMessage("Morbidly Obese!!!");
      }
    }
  }
  
  let calcReset=(e:FormEvent) => {
    setWeight(0)
    setHeight(0)
    setBmi('')
    setMessage('')
    inputRef.current?.focus();
  }

  return (
    <div id='bmi' className="w-full flex justify-around bg-neutral-800 mx-auto px-14 pt-6">
    <span className="w-full h-full absolute bg-transparent min620:bg-[#00000063] top-0 left-0"></span>
    <motion.div  onViewportEnter={() => setSelectedPage(SelectedPage.BMI)}
    className="text-white w-[52rem] min620:w-[100%] relative pb-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}>
      <h2 className="text-[2rem] font-bold leading-[1.1] mb-8">
        Let's Calculate Your <span className="text-red-600">BMI</span>
      </h2>
      <p className="text-[16px] text-[#a1a1a1] min620:text-white">
        Easily determine your body mass index with our accurate
        calculation tool.
      </p>
      <div className="flex flex-col">
        <form className="flex w-full gap-6 h-[50px] mt-10 ">
          <input
          id='weight'
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setWeight(parseInt(e.target.value))}
            className="w-[50%] rounded-md bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
            type="text"
            placeholder="Weight / kg"
            ref={inputRef}
          ></input>
          <input
          id='height'
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setHeight(parseInt(e.target.value))}
            className="w-[50%] rounded-md bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
            type="text"
            placeholder="Height / cm"
          ></input>
        </form>
        {/* output */}
        <p className="mt-10 gap-3 text-[16px] font-medium flex items-center w-full ">
          <span className="w-1/2">
            Your BMI is: &nbsp;
            <span className="text-red-600">{bmi}</span>
          </span>
          <span className="w-1/2">
            Your weight is: &nbsp;
            <span className="text-red-600">{message}</span>
          </span>
        </p>
        <div className="flex justify-around">
        <button
           onClick={calcBMI}
          style={{ transition: "all 0.3s" }}
          type="submit"
          className="text-[15px] rounded-lg uppercase font-bold mt-10 bg-red-800 w-[12rem] h-[3rem] hover:bg-red-600"
        >
          Calculate
        </button>
        <button
           onClick={calcReset}
          style={{ transition: "all 0.3s" }}
          type="submit"
          className="text-[15px] rounded-lg uppercase font-bold mt-10 bg-red-800 w-[12rem] h-[3rem] hover:bg-red-600"
        >
          Try Again
        </button>
        </div>
      </div>
    </motion.div>
    <motion.div
     className='w-3/5 '
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.8 }}
     variants={{
       hidden: { opacity: 0, x: 50 },
       visible: { opacity: 1, x: 0 },
     }}>
        <img src={imgBMI} alt="BMI" className="hidden md:block"/>
    </motion.div>
  </div>
  )
}

export default BMI