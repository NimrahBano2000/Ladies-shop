import React from "react";
import TabGrid from "cards/TabCardGrid";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "headers/light.js";

const Categories = () =>{
    const HighlightedText = tw.span`bg-blue-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return(<>
    <AnimationRevealPage>
      <Header/>
    <TabGrid
        heading={
          <>
            Checkout new <HighlightedText>dresses.</HighlightedText>
          </>
        }
      />
      </AnimationRevealPage>
    </>);

}
export default Categories;