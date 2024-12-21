import image1 from '../../../assets/image/pexels-jyju-jossey-434389812-25849056.jpg'
import icon1 from '../../../assets/icons/Group 1000007977.png'
import icon2 from '../../../assets/icons/.png'
import icon3 from '../../../assets/icons/Frame.png'
import icon4 from '../../../assets/icons/006-browser.png'
import icon5 from '../../../assets/icons/check.png'
import icon6 from '../../../assets/icons/007-refugee camp.png'
import icon7 from '../../../assets/icons/call-icon.png'

const YearsOfExperience = () => {
  return (
    <div>
      <section className="flex flex-wrap items-center mx-5 sm:mx-10 lg:mx-20 justify-center gap-10 lg:gap-0 section animate">
        <div className="flex flex-wrap gap-5 sm:gap-10 w-full lg:w-1/2 justify-center lg:justify-start">
          <div className="flex flex-col gap-5">
            <img
              className="w-40 sm:w-48 h-56 sm:h-64 rounded-2xl object-cover"
              src={image1}
              alt="Experience Image"
            />
            <img src={icon1} alt="Group Icon" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex bg-[#83CD20] rounded-2xl gap-4 items-center p-5 text-white">
              <h1 className="text-3xl sm:text-4xl">25</h1>
              <p className="text-base sm:text-lg">
                Years Of <br /> Experience
              </p>
            </div>
            <img
              className="w-48 sm:w-56 h-80 sm:h-96 rounded-2xl object-cover"
              src={image1}
              alt="Experience Image"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#034833] font-semibold flex gap-4 items-center">
            <img src={icon3} alt="Frame Icon" /> Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl mb-5 font-bold mt-2">
            Where Wanderlust Meets <br />
            <span className="text-[#034833] font-semibold">
              Dream Destinations
            </span>
          </h2>
          <p className="font-normal text-gray-600 whitespace-pre-line mb-5">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
            venenatis cras sed eu massa. Et purus duis sollicitudin dignissim
            habitant. Egestas nulla quis venenatis cras sed eu massa. Et purus
            duis sollicitudin dignissim habitant.
          </p>
          <div className="mt-8 flex gap-8">
            <div className="flex flex-col p-4 sm:p-6 rounded-2xl border-2 border-[#8d8d8d]">
              <h3 className="flex items-center font-bold mb-4 gap-5 text-[#034833] font-semibold">
                <img
                  className="bg-[#83CD20] p-2 rounded-2xl"
                  src={icon4}
                  alt="Passport Plus Icon"
                />
                Passport Plus
              </h3>
              <p className="flex font-normal text-gray-600 items-center mb-2 whitespace-nowrap gap-2">
                <img src={icon5} alt="Check Icon" /> Beyond Border
                Immigration
              </p>
              <p className="flex font-normal text-gray-600 items-center mb-2 whitespace-nowrap gap-2">
                <img src={icon5} alt="Check Icon" /> Beyond Border
                Immigration
              </p>
            </div>
            {/* Global Entry Card */}
            <div className="flex flex-col p-4 sm:p-6 rounded-2xl border-2 border-[#8d8d8d]">
              <h3 className="flex items-center font-bold mb-4 gap-5 text-[#034833] font-semibold">
                <img
                  className="bg-[#83CD20] p-2 rounded-2xl"
                  src={icon6}
                  alt="Global Entry Icon"
                />
                Global Entry
              </h3>
              <p className="flex font-normal text-gray-600 items-center mb-2 whitespace-nowrap gap-2">
                <img src={icon5} alt="Check Icon" /> Beyond Border
                Immigration
              </p>
              <p className="flex font-normal text-gray-600 items-center mb-2 whitespace-nowrap gap-2">
                <img src={icon5} alt="Check Icon" /> Beyond Border
                Immigration
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mt-8">
            <button className="bg-transparent border-2 flex items-center gap-2 px-5 py-2 sm:px-10 sm:py-3 border-[#83CD20] rounded-full text-base sm:text-lg text-[#034833]">
              Read More <img src={icon2} alt="Read More Icon" />
            </button>
            <button className="flex items-center bg-transparent border-none text-[#034833] gap-5 text-base sm:text-lg">
              <img
                className=" bg-[#83CD20] p-2 sm:p-4 rounded-full"
                src={icon7}
                alt="Call Icon"
              />
              <span className='font-semibold w-[120px] text-left'>Need help? (808)
              555-0111</span> 
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YearsOfExperience;
