import frameIcon from "../../../assets/icons/Frame.png";
import arrowLeftIcon from "../../../assets/icons/arrow-left.png";
import arrowRightIcon from "../../../assets/icons/arrow.png";
import companyLogo1 from "../../../assets/icons/Company logo-1.png";
import companyLogo2 from "../../../assets/icons/Company logo-2.png";
import companyLogo3 from "../../../assets/icons/Company logo-3.png";
import companyLogo4 from "../../../assets/icons/Company logo-4.png";
import companyLogo5 from "../../../assets/icons/Company logo-5.png";

import memory1 from "../../../assets/image/memories-1.jpg";
import memory2 from "../../../assets/image/memories-2.jpg";
import memory3 from "../../../assets/image/memories-3.jpg";
import memory4 from "../../../assets/image/memories-4.jpg";
import memory5 from "../../../assets/image/memories-5.jpg";

const OurCountries = () => {
  const companyLogos = [
    { src: companyLogo1, alt: "Company Logo 1" },
    { src: companyLogo2, alt: "Company Logo 2" },
    { src: companyLogo3, alt: "Company Logo 3" },
    { src: companyLogo4, alt: "Company Logo 4" },
    { src: companyLogo5, alt: "Company Logo 5" },
  ];

  const memoryImages = [
    { src: memory1, alt: "Memory Image 1" },
    { src: memory2, alt: "Memory Image 2" },
    { src: memory4, alt: "Memory Image 4" },
    { src: memory5, alt: "Memory Image 5" },
  ];

  return (
    <div>
      <section className="mx-5 my-20 sm:mx-10 lg:mx-18 section animate">
        {/* Company Logos */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 lg:gap-20 mt-10 sm:mt-16 lg:mt-24">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              className="w-24 sm:w-28 lg:w-32"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>

        <div className="rounded-2xl my-10 sm:my-16 lg:my-20 p-8 sm:p-10 lg:p-20 bg-[#f7f7f7]">
          <div className="flex flex-wrap items-center justify-between gap-5 sm:gap-10">
            <div className="flex-1">
              <p className="flex items-center text-[#034833] gap-3 sm:gap-5">
                <img src={frameIcon} alt="Frame Icon" /> Our Countries
              </p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl text-[#034833] font-bold max-w-full sm:max-w-[500px]">
                Making Memories Around the World Unforgettable
              </h1>
            </div>
            <div className="flex gap-5 sm:gap-10 mt-5 sm:mt-0">
              <img
                className="p-3 sm:p-4 rounded-full border-2 border-[#83CD20]"
                src={arrowLeftIcon}
                alt="Arrow Left"
              />
              <img
                className="p-3 sm:p-4 rounded-full bg-[#83CD20]"
                src={arrowRightIcon}
                alt="Arrow Right"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 lg:gap-10 mb-10 mt-10 sm:mt-16 lg:mt-20">
            {memoryImages.slice(0, 2).map((memory, index) => (
              <img
                key={index}
                className="rounded-2xl w-full sm:w-60 lg:w-72 h-64 sm:h-80 lg:h-96"
                src={memory.src}
                alt={memory.alt}
              />
            ))}
            <div
              className="relative w-full sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{
                backgroundImage: `url(${memory3})`,
              }}
            >
              <div className="absolute bg-[#83CD20] px-4 py-4 sm:px-5 sm:py-5 rounded-xl w-[230px] sm:w-[270px] lg:w-[330px] flex flex-col justify-center left-4 sm:left-5 lg:left-6 bottom-4 sm:bottom-5 lg:bottom-6">
                <h3 className="text-white mb-2 text-lg sm:text-xl font-semibold">
                  Working Visa
                </h3>
                <p className="text-white text-sm sm:text-base mb-4 sm:mb-5">
                  Lorem Ipsum is simply dummy text the printing and provides the
                  best visa ever
                </p>
                <button className="text-white py-2 sm:py-3 px-4 sm:px-5 border-2 border-white bg-transparent rounded-full font-bold">
                  Apply now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 lg:gap-10">
            {memoryImages.slice(2).map((memory, index) => (
              <img
                key={index}
                className="rounded-2xl w-full sm:w-60 lg:w-72 h-64 sm:h-80 lg:h-96"
                src={memory.src}
                alt={memory.alt}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCountries;
