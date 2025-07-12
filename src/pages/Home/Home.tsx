
import Hero from '../../compoents/Hero/Hero';
import Services from '../../compoents/Services/Services';
import FeaturedProjects from '../../compoents/FeaturedProjects/FeaturedProjects';
import SkillsTabs from '../../compoents/SkillsTabs/SkillsTabs';
import About from '../../compoents/About/About';
import ContactForm from '../../compoents/ContactForm/ContactForm';
import Tools from '../../compoents/Tools/Tools';
import ProductDesignProcess from '../../compoents/ProductDesignProcess/ProductDesignProcess';
import Testimonials from '../../compoents/Testimonials/Testimonials';
import Footer from '../../compoents/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Services/>
            <FeaturedProjects/>
            <SkillsTabs/>
            <About />
            <Tools/>
            <Testimonials />
            <ProductDesignProcess />

            <ContactForm/>
            <Footer/>
       
            {/* Add more components as needed */}
            {/* <Works /> */}
            {/* <About /> */}
            {/* <Articles /> */}
            {/* <Contact /> */}         
        </div>
    );
};

export default Home;