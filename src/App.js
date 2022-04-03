import React from "react";
import AnimationRevealPage from "./helpers/AnimationRevealPage.js";
import Hero from "./hero/FullWidthWithImage.js";
import Features from "./features/ThreeColSimple.js";
import MainFeature from "./features/TwoColSingleFeatureWithStats.js";
import SliderCard from "./cards/ThreeColSlider.js";
import SliderCard2 from "./cards/ThreeColSlider2.js";
import TrendingCard from "./cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "./blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "./testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "./faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "./forms/SimpleSubscribeNewsletter.js";
import Footer from "./footers/MiniCenteredFooter.js";
import "tailwindcss/dist/base.css";
import "App.css";
import { Switch,Route } from "react-router";
import LandingPage from "LandingPage.js";
import Login from "Login.js";
import Signup from "Signup.js";
import ContactUs from "ContactUs.js";
import AboutUs from "AboutUs.js";
import Categories from "Categories.js";
import Cart from "Cart.js";
import Wishlist from "Wishlist.js";
import Orders from "Orders.js";
import Logout from "Logout.js";

const App = () => {
  return(<>
  
  <Switch>
    <Route exact path="/" component={LandingPage}></Route>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/signup" component={Signup}></Route>
    <Route exact path="/contactus" component={ContactUs}></Route>
    <Route exact path="/aboutus" component={AboutUs}></Route>
    <Route exact path="/categories" component={Categories}></Route>
    <Route exact path="/cart" component={Cart}></Route>
    <Route exact path="/wishlist" component={Wishlist}></Route>
    <Route exact path="/myorders" component={Orders}></Route>
    <Route exact path="/logout" component={Logout}></Route>
    </Switch>
  </>
);
}
export default App;