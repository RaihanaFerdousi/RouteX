import FrameIcon from "../../../assets/icons/Frame2.png";
import ArrowLeftIcon from "../../../assets/icons/arrow-left3.png";
import FolderIcon from "../../../assets/icons/.png"; // Make sure this path is correct
import WounderImage from "../../../assets/image/wounder.jpg"; // Ensure this path is correct
import LogoIcon from "../../../assets/icons/Logo.png"; // Ensure this path is correct

const Creator = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col lg:flex-row sm:my-24 lg:my-20 max-w-5xl mx-auto items-center justify-center mb-16 lg:mb-32">
          <div className="w-1/2">
            <img
              className="h-[300px] w-full lg:h-[420px] lg:w-[350px] rounded-2xl object-cover"
              src={WounderImage}
              alt="Wounder Image"
            />
          </div>

          <div className="bg-[#83CD20] w-1/2 p-4 lg:p-14 text-white rounded-2xl lg:ml-10 lg:mt-0 mt-10">
            <img
              className="mb-5 w-10 lg:w-auto"
              src={FrameIcon}
              alt="Frame Icon"
            />
            <p className="font-light mb-5">
              We have been operating for over a decade, providing top-notch
              services to our clients and building a strong track record in the
              industry.
            </p>
            <div className="flex gap-5 items-center mb-5">
              <div>
                <img className="w-14 lg:w-auto" src={LogoIcon} alt="Logo" />{" "}
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold">
                  Albert Flores
                </h3>
                <p className="font-light text-sm lg:text-base">Web Designer</p>
              </div>
            </div>
            <div className="flex items-center gap-5 justify-center">
              <div className="flex-1">
                <hr className="border-[1px] w-full lg:w-60 mx-auto" />
              </div>
              <div className="flex gap-5 lg:gap-8">
                <img
                  className="p-3 lg:p-4 rounded-full bg-white"
                  src={ArrowLeftIcon}
                  alt="Left Arrow"
                />
                <img
                  className="p-3 lg:p-4 rounded-full bg-white"
                  src={FolderIcon}
                  alt="Right Arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creator;
