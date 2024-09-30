import Image from "next/image";
import img2 from "../../../heroimg2.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font" id="hero">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl lg:text-5xl mb-4 font-bold text-gray-900">
            Plants for a Healthy Life
          </h1>
          <p className="mb-8 leading-relaxed">
            Bring the outdoors in with our vibrant collection of plants! Each one is carefully selected to provide a touch of natures beauty and serenity to your space. Whether you are looking for low-maintenance options or statement pieces, our plants will breathe life into your home or office.
          </p>
          <div className="flex justify-center">
            <Link href="/bestPlants">
              <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                <div className="relative px-5 py-2.5 text-3xl transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Best Plants
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src={img2}
            alt="plant"
            className="h-[400px] w-[400px] rounded-full shadow-2x1"
          />
        </div>
      </div>
    </section>
  );
}
