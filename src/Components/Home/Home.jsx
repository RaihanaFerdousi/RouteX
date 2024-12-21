import Banner from "../Header/Banner/Banner";
import AvailableCountry from "../Sections/AvailableCountry/AvailableCountry";
import Couching1 from "../Sections/Couching1/Couching1";
import ContactUs from "../Sections/ContactUs/ContactUs";
import OurCountries from "../Sections/OurCountries/OurCountries";
import YearsOfExperience from "../Sections/YearsOfExprience/YearsOfExperience";
import Creator from "../Sections/Creator/Creator";
import ProcessOverview from "../Sections/ProcessOverview/ProcessOverview";
import RecentBlogs from "../Sections/RecentBlogs/RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <YearsOfExperience/>
            <OurCountries/>
            <AvailableCountry/>
            <ContactUs/>
            <Couching1/>
            <Creator/>
            <ProcessOverview/>
            <RecentBlogs/>
        </div>
    );
};

export default Home;