import { BsShieldFillCheck } from "react-icons/bs";

const ServiceCard = ({ color, title, icons, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 curor-pointer hover:shaddow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center ${color} `}>
      {icons}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-lg text-white">{title}</h1>
      <p className="text-white text-sm mt-2 md:w9/12  ">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center jusfity-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col items-start items-center">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            Our services
            <br />
            Cointinue to improveruu
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center ">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Securitu"
          icons={
            <BsShieldFillCheck
              fontSize={21}
              className="text-white"
            ></BsShieldFillCheck>
          }
          subtitle="Sercurtity is our number one priority xD 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo tempore sed molestiae dolorem consequuntur numquam illo itaque ut similique tenetur. Sequi rerum necessitatibus ea. Eligendi consequuntur repellendus blanditiis itaque laboriosam."
        />
        <ServiceCard
          color="bg-[purple]"
          title="Best Exchange Rates"
          icons={
            <BsShieldFillCheck
              fontSize={21}
              className="text-white"
            ></BsShieldFillCheck>
          }
          subtitle="Sercurtity is our number one priority xD 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo tempore sed molestiae dolorem consequuntur numquam illo itaque ut similique tenetur. Sequi rerum necessitatibus ea. Eligendi consequuntur repellendus blanditiis itaque laboriosam. "
        />
        <ServiceCard
          color="bg-[red]"
          title="Securitu"
          icons={
            <BsShieldFillCheck
              fontSize={21}
              className="text-white"
            ></BsShieldFillCheck>
          }
          subtitle="Sercurtity is our number one priority Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo tempore sed molestiae dolorem consequuntur numquam illo itaque ut similique tenetur. Sequi rerum necessitatibus ea. Eligendi consequuntur repellendus blanditiis itaque laboriosam.  "
        />
      </div>
    </div>
  );
};

export default Services;
