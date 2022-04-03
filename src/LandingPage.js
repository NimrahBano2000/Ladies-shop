import React from "react";
import AnimationRevealPage from "./helpers/AnimationRevealPage.js";
import Hero from "./hero/FullWidthWithImage.js";
import Features from "./features/ThreeColSimple.js";
import SliderCard from "./cards/ThreeColSlider.js";
import SliderCard2 from "./cards/ThreeColSlider2.js";
import TrendingCard from "./cards/TwoTrendingPreviewCardsWithImage.js";
import Testimonial from "./testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "./faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "./forms/SimpleSubscribeNewsletter.js";
import Footer from "./footers/MiniCenteredFooter.js";
import "tailwindcss/dist/base.css";
import "App.css";

const LandingPage = () => {
  return(<>
  <AnimationRevealPage> 
    <Hero/>
    <Features />
    <SliderCard />
    <SliderCard2 />
    <Testimonial textOnLeft={true}/>
    <TrendingCard />
    <FAQ />
    <SubscribeNewsLetterForm />
    <Footer />
    </AnimationRevealPage>
  </>
);
}
export default LandingPage;