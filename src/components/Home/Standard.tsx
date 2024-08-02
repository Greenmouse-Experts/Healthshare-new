import Button from "../buttons/Button";
import Lab from "/img/lab.png"

function Standard() {
  return (
    <section className="flex flex-col lg:flex-row justify-between space-y-10">
      <div className="flex flex-col gap-6 lg:w-[50%]">
        <div>
          <h2>Setting New Standards with Innovative Equipment</h2>
          <p>
            Healthshare Nigeria has an extensive experience in procurement,
            installation and maintenance of medical equipment, adding value to
            the private and public health sectors, also providing healthcare
            solutions on, pre-operational and operational levels to clients.
          </p>
        </div>

        <hr className="" />
        <div className="flex items-start gap-8">
          <div>
            <h2>25+</h2>
            <p>Years of Experience</p>
          </div>
          <div>
            <h2>512+</h2>
            <p>Successful Project</p>
          </div>
          <div>
            <h2>112+</h2>
            <p>Business Partners</p>
          </div>
          <div>
            <h2>1520+</h2>
            <p>Happy Clients</p>
          </div>
        </div>
        <Button
          to={""}
          className=" px-8 py-4 font-medium  bg-[#00A24D] hover:bg-[#145b36] transition-all mt-3 self-start"
        >
          {" "}
          LEARN MORE
        </Button>
      </div>

      <div className="flex items-center justify-center ">
        <div className="z-10">
          <img src={Lab} alt="lab image" className=" w-full  h-[300px] desktop:h-[400px] z-40" />
        </div>
        <div className="absolute w-[20%] h-[30rem] bg-[#202020] right-0"></div>
      </div>
    </section>
  );
}

export default Standard
