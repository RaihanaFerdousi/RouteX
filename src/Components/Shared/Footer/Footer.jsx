import BackgroundImage from '../../../assets/image/Картинка.png';
import CurrencyIcon from '../../../assets/icons/010-currency.png';
import WorldwideIcon from '../../../assets/icons/050-worldwide.png';
import LogoIcon from '../../../assets/icons/logo-green.png';
import FacebookIcon from '../../../assets/icons/facebook.png';
import InstagramIcon from '../../../assets/icons/instagram.png';
import SomethingIcon from '../../../assets/icons/somthing.png';
import LinkedInIcon from '../../../assets/icons/in.png';
import CheckIcon from '../../../assets/icons/check.png';
import SidewaysTicIcon from '../../../assets/icons/sideways-tic.png';
import AirplaneIcon from '../../../assets/icons/airplain.png';

const Footer = () => {
    return (
        <footer 
            className="bg-[#034833] py-5 text-white" 
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="px-5 md:px-10 lg:px-20 mb-8 flex flex-col lg:flex-row justify-between items-center">
                <div className="flex items-center gap-4 lg:gap-8">
                    <button className="bg-[#83CD20] p-3 lg:p-5 rounded-full">
                        <img src={CurrencyIcon} alt="Currency Icon" className="w-6 lg:w-8" />
                    </button>
                    <h3 className="text-lg lg:text-2xl font-semibold">
                        Need any support for <br /> tour and visa?
                    </h3>
                </div>
                <div className="h-16 lg:h-24 border border-gray-300 my-4 lg:my-0"></div>
                <div className="flex items-center gap-4 lg:gap-8">
                    <button className="bg-[#83CD20] p-3 lg:p-5 rounded-full">
                        <img src={WorldwideIcon} alt="Worldwide Icon" className="w-6 lg:w-8" />
                    </button>
                    <h3 className="text-lg lg:text-2xl font-semibold">
                        Are you ready to get <br /> started traveling?
                    </h3>
                </div>
            </div>
            <hr className="border-gray-300" />
            <div className="px-5 md:px-10 lg:px-20 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 lg:pt-16">
                <div>
                    <h3 className="flex items-center text-lg lg:text-xl text-white gap-2 mb-6">
                        <img src={LogoIcon} alt="RouteX Logo" className="w-8 lg:w-10" />
                        RouteX
                    </h3>
                    <p className="font-light text-sm lg:text-base">
                        Corporate business typically refers to large-scale mansola enterprises or organizations.
                    </p>
                    <div className="flex gap-3 mt-6">
                        <img src={FacebookIcon} alt="Facebook" />
                        <img src={InstagramIcon} alt="Instagram" />
                        <img src={SomethingIcon} alt="Social Icon" />
                        <img src={LinkedInIcon} alt="LinkedIn" />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg lg:text-xl mb-6">Services</h3>
                    <ul className="font-light text-sm lg:text-base">
                        <li className="flex mb-2 items-center gap-2">
                            <img src={CheckIcon} alt="Check Icon" /> Mistakes To Avoid
                        </li>
                        <li className="flex mb-2 items-center gap-2">
                            <img src={CheckIcon} alt="Check Icon" /> Your Startup
                        </li>
                        <li className="flex mb-2 items-center gap-2">
                            <img src={CheckIcon} alt="Check Icon" /> Knew About Fonts
                        </li>
                        <li className="flex mb-2 items-center gap-2">
                            <img src={CheckIcon} alt="Check Icon" /> Knew About Fonts
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg lg:text-xl mb-6">Useful Links</h3>
                    <ul className="font-light text-sm lg:text-base">
                        <li className="flex mb-2 items-center gap-2">
                            <img src={SidewaysTicIcon} alt="Tic Icon" /> Latest News
                        </li>
                        <li className="flex mb-2 items-center gap-2">
                            <img src={SidewaysTicIcon} alt="Tic Icon" /> Careers
                        </li>
                        <li className="flex mb-2 items-center gap-2">
                            <img src={SidewaysTicIcon} alt="Tic Icon" /> General Inquiries
                        </li>
                        <li className="flex mb-2 items-center gap-2">
                            <img src={SidewaysTicIcon} alt="Tic Icon" /> Case Studies
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg lg:text-xl mb-6">Subscribe to Our Newsletter</h3>
                    <p className="font-light text-sm lg:text-base mb-4">
                        Corporate business typically refers to large-scale mansola enterprises.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center">
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="bg-black text-white placeholder-gray-400 py-2 px-4 rounded-full w-full lg:w-64 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="mt-2 lg:mt-0 lg:ml-2 bg-[#83CD20] rounded-full p-3 lg:p-4 hover:bg-green-600 transition duration-300 ease-in-out">
                            <img src={AirplaneIcon} alt="Airplane Icon" className="w-6 lg:w-8" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 lg:px-20 mt-5 text-white">
                <p className="font-light text-sm lg:text-base">
                    © Yoursitename 2024 | All Rights Reserved
                </p>
                <div className="flex gap-4 font-light text-sm lg:text-base">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
