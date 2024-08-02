import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import ImageBox from "./ImageBox";
import Slider from "react-slick";
import { productSettings } from "../../helpers/settings";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductLines() {

  const [productSlider, setProductSlider] = useState<Slider | null>(null);
  
 


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
          <FiArrowLeftCircle
            size={40}
            className="cursor-pointer"
            onClick={() => productSlider?.slickPrev()}
          />
          <FiArrowRightCircle
            size={40}
            className="cursor-pointer"
            onClick={() => productSlider?.slickNext()}
          />
        </div>
      </div>

      <div className="">
        <Slider {...productSettings} ref={setProductSlider}>
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
        </Slider>
      </div>
    </section>
  );
}

export default ProductLines;
