import { FaPlantWilt } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import { PiPottedPlantFill } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import Navbar from "../components/navbar";

export default function Benefits() {
    return (
      <div>
              <Navbar/>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
        Plant benefits
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 ml-[18px]">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
              <FaPlantWilt />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Physical Health Benefits
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            Purifying the air <br />
 Producing oxygen <br />
 Preventing allergies <br />
Regulating blood pressure <br />

            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <GoArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <PiPlantFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Mental Health Benefits
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            Reducing stress and anxiety <br />
 Boosting mood <br />
 Improving sleep quality <br />
Enhancing focus and productivity
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <GoArrowRight className="ml-2" />

            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <PiPottedPlantFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Environmental Benefits
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            Cleaning the air <br />
Reducing noise pollution <br />
 Regulating temperature <br />
 Promoting biodiversity
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <GoArrowRight className="ml-2" />

            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    );
  }
