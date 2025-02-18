import OFFER_IMAGE from "../../../assets/image/offer.jpg";
import WORLDWIDE_ICON from "../../../assets/icons/050-worldwide.png";
import CONTACT_ICON from "../../../assets/icons/.png"; // Rename the file for clarity if needed

const ContactUs = () => {
  return (
    <div>
      <section className="mx-5 my-52 sm:mx-10 lg:mx-20 xl:mx-32 mb-10 sm:mb-20 lg:mb-32 section animate">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <img
              className="rounded-2xl h-auto lg:h-[620px] w-full object-cover"
              src={OFFER_IMAGE}
              alt="Offer"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-row bg-white rounded-2xl">
              <div className="w-full mb-5 sm:mb-0 p-5 py-8 pl-10">
                <img
                  className="bg-[#83CD20] p-3 mb-3 rounded-full"
                  src={WORLDWIDE_ICON}
                  alt="Worldwide Icon"
                />
                <h3 className="text-xl sm:text-2xl mb-3 font-semibold">
                  Get Our Best Offers Quickly
                </h3>
                <p className="text-sm sm:text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
                <button className="flex items-center border-2 border-[#b4b4b3] gap-4 rounded-full px-5 sm:px-10 py-2 sm:py-3 mt-4">
                  Contact Us
                  <img src={CONTACT_ICON} alt="Contact Icon" />
                </button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="w-[400px] h-full rounded-2xl object-cover"
                  src={OFFER_IMAGE}
                  alt="Offer"
                />
              </div>
            </div>

            <div className="bg-[#83CD20] text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 p-8 sm:p-14 rounded-2xl">
              {[
                { value: "10k+", label: "Complete Projects" },
                { value: "20+", label: "Team Members" },
                { value: "5k+", label: "Winning Awards" },
                { value: "100+", label: "Completed Projects" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 text-center sm:text-left"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 font-semibold">
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base whitespace-nowrap">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
