import FrameIcon from "../../../assets/icons/Frame.png";
import ArrowLeftIcon from "../../../assets/icons/arrow-left3.png";
import ArrowRightIcon from "../../../assets/icons/arrow.png";
import AdventureImage from "../../../assets/image/adventerue.jpg";
import DateIcon from "../../../assets/icons/icon.png";
import UserIcon from "../../../assets/icons/user.png";
import FolderIcon from "../../../assets/icons/.png";

const RecentBlogs = () => {
  return (
    <div>
      <section className="px-5 lg:px-20 my-20 lg:my-20 mx-5 lg:mx-20 section animate">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-10 justify-between mb-10 lg:mb-20">
          <div>
            <p className="flex items-center text-[#034833] gap-2 text-sm lg:text-base">
              <img src={FrameIcon} alt="Blog icon" /> Recent Blogs
            </p>
            <h1 className="mt-2 text-2xl lg:text-4xl text-[#034833] font-bold w-full max-w-full lg:max-w-[500px]">
              Journeys of Discovery Uncovering Hidden
            </h1>
          </div>
          <div className="flex gap-4">
            <img
              className="p-2 lg:p-4 rounded-full bg-[#C8C8C8]"
              src={ArrowLeftIcon}
              alt="Left Arrow"
            />
            <img
              className="p-2 lg:p-4 rounded-full bg-[#83CD20]"
              src={ArrowRightIcon}
              alt="Right Arrow"
            />
          </div>
        </div>

        {/* Grid for Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col items-center border-2 w-[380px] border-[#b4b4b3] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <img
              className="w-[400px] h-[300px] rounded-t-2xl"
              src={AdventureImage}
              alt="Adventure Blog Image"
            />
            <div className="py-5 px-7 w-full">
              <div className="flex gap-6 mb-4">
                <p className="flex items-center gap-2 text-xs lg:text-sm text-[#727272]">
                  <img src={DateIcon} alt="Date icon" /> October 19, 2022
                </p>
                <p className="flex items-center gap-2 text-xs lg:text-sm text-[#727272]">
                  <img src={UserIcon} alt="User icon" /> By admin
                </p>
              </div>
              <h3 className="text-lg lg:text-2xl text-[#034833] font-semibold mb-3">
                World of Wander Discovering Diverse Landscapes
              </h3>
              <p className="text-[#727272] text-sm lg:text-base mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry standard dummy text ever
                since the 1500s.
              </p>
              <button className="flex items-center gap-2 text-[#034833] font-semibold px-4 py-2 rounded-full hover:bg-[#034833] hover:text-white transition-all duration-300 ease-in-out">
                Read More <img src={FolderIcon} alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center border-2 w-[380px] border-[#b4b4b3] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <img
              className="w-[400px] h-[300px] rounded-t-2xl"
              src={AdventureImage}
              alt="Adventure Blog Image"
            />
            <div className="py-5 px-7 w-full">
              <div className="flex gap-6 mb-4">
                <p className="flex items-center gap-2 text-xs lg:text-sm text-[#727272]">
                  <img src={DateIcon} alt="Date icon" /> October 19, 2022
                </p>
                <p className="flex items-center gap-2 text-xs lg:text-sm text-[#727272]">
                  <img src={UserIcon} alt="User icon" /> By admin
                </p>
              </div>
              <h3 className="text-lg lg:text-2xl text-[#034833] font-semibold mb-3">
                World of Wander Discovering Diverse Landscapes
              </h3>
              <p className="text-[#727272] text-sm lg:text-base mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry standard dummy text ever
                since the 1500s.
              </p>
              <button className="flex items-center gap-2 text-[#034833] font-semibold px-4 py-2 rounded-full hover:bg-[#034833] hover:text-white transition-all duration-300 ease-in-out">
                Read More <img src={FolderIcon} alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center border-2 w-[380px] border-[#b4b4b3] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <img
              className="w-[400px] h-[300px] rounded-t-2xl"
              src={AdventureImage}
              alt="Adventure Blog Image"
            />
            <div className="py-5 px-7 w-full">
              <div className="flex gap-6 mb-4">
                <p className="flex items-center gap-2 text-xs lg:text-sm text-[#727272]">
                  <img src={DateIcon} alt="Date icon" /> October 19, 2022
                </p>
                <p className="flex items-center gap-2 text-xs lg:text-sm text-[#727272]">
                  <img src={UserIcon} alt="User icon" /> By admin
                </p>
              </div>
              <h3 className="text-lg lg:text-2xl text-[#034833] font-semibold mb-3">
                World of Wander Discovering Diverse Landscapes
              </h3>
              <p className="text-[#727272] text-sm lg:text-base mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry standard dummy text ever
                since the 1500s.
              </p>
              <button className="flex items-center gap-2 text-[#034833] font-semibold px-4 py-2 rounded-full hover:bg-[#034833] hover:text-white transition-all duration-300 ease-in-out">
                Read More <img src={FolderIcon} alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentBlogs;
