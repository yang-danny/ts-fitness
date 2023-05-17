type Props = {
    name: string;
    icon: string;
    image: string;
    classTime: string;
  };
  
  const ClassBox = ({ name, icon, image,classTime }: Props) => {
  
    return (
      <li className="relative mx-5 inline-block h-[450px] w-[400px] ">
           <div className="item-0 p-6 ">
            <div className="grayscale transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:duration-700 hover:grayscale-0">
                 <img alt={`${image}`} src={image} className="" />
              <div className="absolute right-2 mt-2">
                <img alt={`${icon}`} src={icon} />
              </div>
            </div>
                <p className="text-[2rem] font-bold mt-2">{name}</p>
                <p className="rounded-md text-white bg-red-800  hover:bg-red-600 text-[18px] mt-8 py-2  px-5">
                  {classTime}
                </p>
            </div>
      </li>
    );
  };
  
export default ClassBox