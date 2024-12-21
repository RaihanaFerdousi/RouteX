import CoachingImage from "../../../assets/image/Coaching.jpg";
import FrameIcon from "../../../assets/icons/Frame.png";
import ArrowLeftIcon from "../../../assets/icons/arrow-left-2.png";
import FolderIcon from "../../../assets/icons/.png"; // Assuming this is the correct icon
import SomethingIcon from "../../../assets/icons/something.png";

const Couching1 = () => {
    return (
      <div className="bg-gray-100 rounded-2xl py-20">
        <section className="container mx-auto px-5 sm:px-10 lg:px-20">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-end gap-5 lg:gap-20 justify-between mb-10">
            <div>
              <p className="flex items-center text-[#034833] gap-2 sm:gap-5">
                <img src={FrameIcon} alt="Supporting Coaching" />
                Supporting Coaching
              </p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#034833] max-w-xl">
                A Tapestry of Experiences: Cultural Encounters
              </h1>
            </div>
            <div className="flex gap-5 sm:gap-10">
              <img
                className="p-2 sm:p-4 rounded-full bg-[#83CD20] w-10 sm:w-12 hover:scale-110 transition-transform"
                src={ArrowLeftIcon}
                alt="Previous"
              />
              <img
                className="p-2 sm:p-4 rounded-full bg-gray-300 w-10 sm:w-12 hover:scale-110 transition-transform"
                src={FolderIcon}
                alt="Next"
              />
            </div>
          </div>
  
          {/* Coaching Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="relative shadow-lg rounded-2xl hover:shadow-xl transition-shadow"
              >
                {/* Coaching Image */}
                <img
                  className="w-full sm:w-[300px] lg:w-[350px] rounded-2xl object-cover"
                  src={CoachingImage}
                  alt="Coaching"
                />
                {/* Coaching Info Overlay */}
                <div className="flex gap-5 bg-white p-5 rounded-2xl rounded-tr-none absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[300px] lg:w-[350px]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#034833]">
                      TOFEL Coaching
                    </h3>
                    <p className="text-gray-600 font-light">
                      There are many variations of passages of engineering.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 sm:p-5 border-2 border-gray-400 rounded-2xl h-14 w-14 flex justify-center items-center">
                      <img src={SomethingIcon} alt="Icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default Couching1;