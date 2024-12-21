import arrow from "../../../assets/icons/arrow.png";
import "./Banner.css";
import frameImage from "../../../assets/image/Frame 8365.png"; 

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${frameImage})`, 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="relative mb-24 mx-5 sm:mx-10 lg:mx-20">
      <div
        style={bannerStyle}
        className="banner bg-[#034833] p-10 sm:p-20 lg:p-40 text-white mt-8 flex text-center justify-center bg-no-repeat bg-center bg-cover rounded-3xl section animate"
      >
        <div>
          <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Visa Made Easy Dreams <br />{" "}
            <span className="text-[#83CD20]">Made Possible</span>
          </h1>
          <p className="font-normal text-white font-semibold mb-5 text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sed
            sit amet arcu nunc. Duis egestas ac ante sed tincidunt.
          </p>
          <div className="flex justify-center">
            <button className="font-bold bg-[#83CD20] px-5 py-2 lg:py-4 rounded-full text-white flex items-center">
              Read More
              <img src={arrow} alt="arrow icon" className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
