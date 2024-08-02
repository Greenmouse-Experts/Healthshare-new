import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Speciality() {
  return (
    <section className="space-y-9  bg-[url('/img/specialty.png')] bg-cover bg-center ">
      <div className="flex-col flex lg:flex lg:flex-row justify-between">
        <div className="flex flex-col lg:w-[45%]">
          <p className="text-[#00A24D]">OUR SPECIALTY</p>
          <h2>Empowering Healthcare with Advanced Technology and Facilities</h2>
        </div>

        <p className="lg:w-[45%]">
          At Healthshare Nigeria, we are dedicated to transforming the
          healthcare industry through the power of advanced technology and
          state-of-the-art facilities.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div
          className={` bg-[url('/img/banner.png')] bg-cover bg-center   lg:w-[50%] h-[20rem] overflow-hidden flex flex-col px-8 justify-end py-6 rounded-lg text-white`}
        >
          <h3>Project Management & Consultancy</h3>
          <p>
            Expert guidance in project planning and management for healthcare
            facilities, offering consultancy services to streamline processes.
          </p>
        </div>
        <div
          className={`  bg-[#202020] bg-cover bg-center  lg:w-[25%]  lg:h-[20rem] overflow-hidden flex flex-col px-8 justify-between py-8 rounded-lg text-white`}
        >
          <div>
            <h3>Installations and Training</h3>
            <p>We offer installation services and trainings</p>
          </div>
          <HiOutlineArrowUpRight size={50} className="self-end " />
        </div>
        <div
          className={`  bg-[#00A24D] bg-cover bg-center  lg:w-[25%] lg:h-[20rem] overflow-hidden flex flex-col px-8 justify-between py-8 rounded-lg text-white`}
        >
          <div>
            <h3>Products and Services</h3>
            <p>View our various range of products and services</p>
          </div>
          <HiOutlineArrowUpRight size={50} className="self-end " />
        </div>
      </div>
    </section>
  );
}

export default Speciality;
