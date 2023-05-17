import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const BenefitBox = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
    variants={childVariant}
    className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center shadow-2xl"
  >
    <div className="mb-4 flex justify-center">
      <div className="rounded-full border-2 border-gray-100 bg-red-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600 hover:duration-700 p-4 text-white">
        {icon}
      </div>
    </div>

    <h4 className="font-bold">{title}</h4>
    <p className="my-3">{description}</p>
    <AnchorLink
      className="text-sm font-bold text-rose-800 underline hover:text-rose-600"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      <p>Learn More...</p>
    </AnchorLink>
  </motion.div>
  )
}

export default BenefitBox