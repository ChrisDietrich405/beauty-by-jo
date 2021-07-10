import "../styles/pages/home.scss"
import Waxing from "../assets/images/home1.jpg"
import Eyebrow from "../assets/images/home2.jpg"
import BeautySupplies from "../assets/images/home5.jpg"
import SlideShow from "../components/SlideShow"

export default function Home() {
    return (
        <div className="home-container">
            <SlideShow/>
            {/* <div className="waxing-container">
                <img className="waxing-img" src={Waxing}/>
            </div> */}
            <div className="bar-separator">
                <h4>Serving the Glen Burnie and Pasadena communities</h4>
            </div>
            <div className="about-section">
                <img className="eyebrow-img" src={Eyebrow}/>
                <div className="about-section-definition">
                    <h2>Beauty By Jo Salon</h2>
                    <p>Visit She Brows And Beauty for all of your eyebrow and eyelash needs. When you come to our salon in Philadelphia, we treat you with the same high level of care we would want to receive. Our main goal is for you to leave here feeling more confident with beautiful eyebrows and eyelashes.</p>
                </div>
            </div>
            <div className="beauty-supplies-container">
                <img className="beauty-supplies-img" src={BeautySupplies}/>
                <div className="centered">
                    <h1>A Range of Beauty Services To Keep You Looking and Feeling Great</h1>
                    <p>The trained and experienced beauty experts at She Brows And Beauty LLC offer more than just skill and    expertise. Visit our esthetician salon for attentive service that is customized according to your  particular requirements. Benefit from practical beauty tips from our qualified estheticians. Treat yourself  to top quality beauty products at a fully equipped esthetician salon offering a range of services.
                    </p>
                </div>
            </div>
        </div>
    )
}