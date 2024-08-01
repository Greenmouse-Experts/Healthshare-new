import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import ImageBox from "./ImageBox";

function ProductLines() {
  return (
    <section className="bg-[#E8FBF9] space-y-8 py-24">
      <div className="flex justify-between">
        <div className="">
          <h2>Our Products’ Lines</h2>
          <p>
            We support the delivery of quality healthcare equipment that
            represents global best practices.
          </p>
        </div>

        <div className="flex gap-4">
          <FiArrowLeftCircle size={40} className="cursor-pointer" />
          <FiArrowRightCircle size={40} className="cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-8 ">
        <ImageBox
          image="/img/imagebox1.png"
          title="Patient Monitoring & Life Support"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum est tortor, sit amet iaculis dolor pulvinar molestie."
        />
        <ImageBox
          image="/img/imagebox2.png"
          title="In-Vitro Diagnostic:"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum est tortor, sit amet iaculis dolor pulvinar molestie."
        />
        <ImageBox
          image="/img/imagebox3.png"
          title="Medical Imaging:"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum est tortor, sit amet iaculis dolor pulvinar molestie."
        />
      </div>
    </section>
  );
}

export default ProductLines;
