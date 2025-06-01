import VectorImage from '../../../assets/image/Vector.png';
import FrameIcon from '../../../assets/icons/Frame.png';
import Icon1 from '../../../assets/icons/01.png';
import Icon2 from '../../../assets/icons/02.png';
import Icon3 from '../../../assets/icons/03.png';

const ProcessOverview = () => {
  return (
    <div>
      <section
        className="px-4 lg:px-16 xl:px-32 mx-auto rounded-2xl py-10 lg:py-20 bg-white bg-cover mb-16 lg:mb-32 mx-4 lg:mx-16 section animate"
        style={{ backgroundImage: `url(${VectorImage})` }}
      >
        <div className="text-center mb-10 lg:mb-20">
          <p className="flex items-center justify-center text-[#034833] gap-2 text-sm lg:text-base">
            <img src={FrameIcon} alt="Process Icon" /> Process Overview
          </p>
          <h1 className="text-2xl lg:text-4xl mt-3 text-[#034833] font-bold max-w-full lg:max-w-[500px] mx-auto">
            Unforgettable Getaways Escaping Routine
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="text-[#034833] p-6 lg:p-10 bg-white rounded-2xl shadow-lg">
            <img src={Icon1} alt="Icon 1" className="mx-auto" />
            <h3 className="text-lg lg:text-xl mt-5 mb-3 text-center">Visa Voyage Agency</h3>
            <p className="font-light text-sm lg:text-base text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="text-[#034833] p-6 lg:p-10 bg-white rounded-2xl shadow-lg">
            <img src={Icon2} alt="Icon 2" className="mx-auto" />
            <h3 className="text-lg lg:text-xl mt-5 mb-3 text-center">Visa Voyage Agency</h3>
            <p className="font-light text-sm lg:text-base text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="text-[#034833] p-6 lg:p-10 bg-white rounded-2xl shadow-lg">
            <img src={Icon3} alt="Icon 3" className="mx-auto" />
            <h3 className="text-lg lg:text-xl mt-5 mb-3 text-center">Visa Voyage Agency</h3>
            <p className="font-light text-sm lg:text-base text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessOverview;