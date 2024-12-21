import OBJECTS_ICON from "../../../assets/icons/OBJECTS.png";
import ARROW_ICON from "../../../assets/icons/arrow.png";
import TIC_ICON from "../../../assets/icons/tic.png";

// Flags
import CANADA_FLAG from "../../../assets/image/canada-flag.jpg";
import BANGLADESH_FLAG from "../../../assets/image/bangladesh-flag (3).jpg";
import AUSTRALIA_FLAG from "../../../assets/image/Flag_of_Australia_(converted).svg";
import UK_FLAG from "../../../assets/image/download.png";

const AvailableCountry = () => {
  const countries = [
    {
      name: "Canada",
      flag: CANADA_FLAG,
      points: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    },
    {
      name: "Bangladesh",
      flag: BANGLADESH_FLAG,
      points: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    },
    {
      name: "Australia",
      flag: AUSTRALIA_FLAG,
      points: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    },
    {
      name: "United Kingdom",
      flag: UK_FLAG,
      points: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
    },
  ];

  return (
    <div>
      <section className="mb-10 my-52 sm:mb-20 lg:mb-32 mx-5 sm:mx-10 lg:mx-20 xl:mx-32 section animate">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row mb-10 sm:mb-16 lg:mb-20 justify-between items-start sm:items-center">
          <div>
            <p className="flex items-center text-[#034833] gap-3 sm:gap-5">
              Available Countries
              <img src={OBJECTS_ICON} alt="Icon" />
            </p>
            <h1 className="text-2xl sm:text-3xl text-[#034833] font-bold mt-3 sm:mt-0">
              Urban Escapes City Hopping Adventures
            </h1>
          </div>
          <div className="mt-5 sm:mt-0">
            <button className="bg-[#83CD20] px-4 py-3 sm:px-5 sm:py-4 rounded-full text-white flex items-center">
              View More
              <img src={ARROW_ICON} alt="Arrow" className="ml-2" />
            </button>
          </div>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
          {countries.map((country, index) => (
            <div
              key={index}
              className="p-6 border-2 border-[#b4b4b3] rounded-2xl"
            >
              <img
                className="w-16 h-14 mb-3 rounded-full object-cover"
                src={country.flag}
                alt={`${country.name} Flag`}
              />
              <h2 className="text-[#034833] whitespace-nowrap text-lg sm:text-xl lg:text-2xl mb-2 font-semibold">
                {country.name}
              </h2>
              <div className="mt-4">
                {country.points.map((point, i) => (
                  <p
                    key={i}
                    className="flex items-center text-gray-600 mb-2 gap-2"
                  >
                    <img src={TIC_ICON} alt="Tick" /> {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AvailableCountry;
