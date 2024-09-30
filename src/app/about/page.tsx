import Image from "next/image";
import about from "../../../about.avif";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function About() {
  return (
    
    <section className="text-gray-400 body-font">
            <Navbar/>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src={about}
            alt="plant"
            className="h-[400px] w-[400px] rounded-lg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            The Essence of Life
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Plants are an integral part of our lives, providing us with oxygen, purifying the air, and boosting our mood. Their beauty and vitality transform our homes and bring us closer to nature, enhancing our overall well-being. Lets explore the world of plants and discover their benefits.
          </p>
          <div className="flex justify-center">
            <Link href="/benefits">
              <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                <div className="relative px-5 py-2.5 text-2xl transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Benefits of Plants
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
