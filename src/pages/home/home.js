import "../home/home.css";
import { React} from "react";
import Dashboard from "../dashboard/dashboard";
import Services from "../services/services";
import Courses from "../courses/course";
import AboutUs from "../about_us/about_us";
import OurSpecialization from "../specilization/our_specialization";
import Clients from "../Our_Clients/our_clients";
import ContactUs from "../Contact_us/contact_us";
import Footer from "../footer/footer";
function Home() {
 
  return (
    <>
      <Dashboard />
      <Services />
      <Courses />
      <AboutUs />
      <OurSpecialization />
      <Clients />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Home;
