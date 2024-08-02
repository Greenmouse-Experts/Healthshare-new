import Button from "../buttons/Button";
import Glass from "/img/glass.png";

function Banner() {
  return (
    <section
      className={` bg-[url('/img/banner.png')] bg-cover bg-center  w-full  h-[50rem] overflow-hidden grid place-content-center`}
    >
      <div className=" flex flex-col justify-center items-center text-center lg:text-left lg:items-start w-full lg:w-[50%] mt-24 gap-3">
        <h1 className="text-white leading-[4rem]">
          Trusted Partners in Delivering Standard
          <span className="text-[#E6BD02] "> Healthcare</span> Products and
          Facilities
        </h1>
        <p className="font-medium text-white">
          Experience the future of healthcare with our state-of-the-art
          equipment and top-tier facilities, designed to provide unparalleled
          care and precision.
        </p>
        <Button
          to={""}
          className="  px-8 py-4 font-medium  bg-[#00A24D] hover:bg-[#145b36] transition-all mt-3 "
        >
          GET A FREE QUOTE{" "}
        </Button>
      </div>
      <div className="w-[35%] mt-8">
        <img src={Glass} alt="" />
      </div>
    </section>
  );
}

export default Banner;
