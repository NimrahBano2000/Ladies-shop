import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "headers/light.js";
import MainFeature1 from "features/TwoColWithButton.js";
import Features from "features/ThreeColSimple.js";
import TeamCardGrid from "cards/ProfileThreeColGrid.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Us</Subheading>}
        heading="We have a classic look for you."
        // buttonRounded={false}
        // primaryButtonText="See Portfolio"
        imageSrc="https://16styletypes.com/wp-content/uploads/Classic-style.png"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to satisfy our customers."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThn4-CasYXRJDVFHtsimAHDp9HBsopm83bUQ&usqp=CAU"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description=""
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      />
      {/* <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
    
    </AnimationRevealPage>
  );
};
