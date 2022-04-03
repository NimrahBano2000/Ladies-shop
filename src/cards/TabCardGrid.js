import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "misc/Layouts.js";
import { SectionHeading } from "misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { PrimaryLink } from "headers/light";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-blue-100 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-blue-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-gray-800 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-3 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-gray-800`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-2 text-xs font-bold`;
const CardSize = tw.p`mt-2 text-xs font-bold`;
const Date = tw.p`mt-2 text-xs font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none  absolute right-0 top-0 h-64 w-64 opacity-20 transform translate-x-2/3 -translate-y-12 text-blue-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none  absolute left-0 bottom-0 h-80 w-80 opacity-20 transform -translate-x-2/3 text-gray-800`}
`;

export default ({
  heading = "Checkout the Dresses",
  tabs = {
    Bridal_Dress: [
      {
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfGyUnFXlz50tlxYUTcSw7dZtxHgE3LXpAUAM1cO7HvV5dR0crO7jShZSZPyabxi0xQ4&usqp=CAU",
        title: "Lehanga",
        content: "Red",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        date: "Available Date",
        Available_Size : <input type="date" id="birthday" name="birthday"/>
        
      },
      {
        imageSrc:
          "https://media.istockphoto.com/photos/indian-girl-wearing-modern-wedding-dress-picture-id153509177?b=1&k=20&m=153509177&s=170667a&w=0&h=JNF2Z4lD0uL4ZL_2PoXK7n304kv86k5AFP5BpYGJu7I=",
        title: "Lehanga",
        content: "Red",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        date: "Available Date",
        Available_Size : <input type="date" id="birthday" name="birthday"/>,
        url: "#",
      },
      {
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOmpvx1-qsMXI5ihxuLmAICdk0BH_Tve4zQ&usqp=CAU",
        title: "Long Frock",
        content: "Red",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        date: "Available Date",
        Available_Size : <input type="date" id="birthday" name="birthday"/>,
        url: "#"
      },
      {
        imageSrc:
          "https://media.istockphoto.com/photos/bride-wearing-red-lehenga-on-the-wedding-picture-id1313032489?b=1&k=20&m=1313032489&s=170667a&w=0&h=xm3llHewcXN-cmVSSpDm_leDMEYtVqDlAKwZyp9NmpU=",
        title: "Lehanga",
        content: "Red",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        date: "Available Date",
        Available_Size : <input type="date" id="birthday" name="birthday"/>,
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFraXN0YW5pJTIwYnJpZGFsJTIwZHJlc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Saree",
        content: "shock Pink and green",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        date: "Available Date",
        Available_Size : <input type="date" id="birthday" name="birthday"/>,
        url: "#"
      },
      {
        imageSrc:
          "https://media.istockphoto.com/photos/pakistani-bridal-this-picture-was-taken-at-wedding-ceremony-picture-id1326439328?b=1&k=20&m=1326439328&s=170667a&w=0&h=SShtXiXk3SGGmDLDHKfbU3cRQkzttJj-yfcUiDrb9zw=",
        title: "Lehanga",
        content: "Baby pink",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        date: "Available Date",
        Available_Size : <input type="date" id="birthday" name="birthday"/>,
        url: "#"
      },
      {
        imageSrc:
          "https://www.stylesgap.com/wp-content/uploads/2019/01/Pakistani-Designer-Bridal-Dresses-Maria-B-Brides-3.jpg",
        title: "Lahanga with long shirt",
        content: "Dark Red",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        date: "Available Date",
        Available_Size : <input type="date" id="birthday" name="birthday"/>,
        url: "#"
      },
      {
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhA3E-yIeRZl9pBwcec6-1SCtjrJpG6lUwnZy6xq6qjUb6fX8U8iUmzIcFA3UXVMm5Qk&usqp=CAU",
        title: "Long Frock",
        content: "Mehroon",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
        date: "Available Date",
        Available_Size : <input type="date" id="birthday" name="birthday"/>,
        url: "#"
      }
    ],
    Casual: getRandomCards(),
    Party_Wear: getRandomCards(),
    Formal: getRandomCards()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton><PrimaryLink href="/cart">Buy Now</PrimaryLink></CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                    <Date>{card.date}</Date>
                    <CardSize>{card.Available_Size}</CardSize>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      {/* <DecoratorBlob1 />
      <DecoratorBlob2 /> */}
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cExIaHP38M5A3W9oykckmJX1CpcWvax2GMKRXgWspEff2MA_wL6VT6MSi0RWWEOSnL4&usqp=CAU",
      title: "Short Shirt with flapper",
      content: "White",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      date: "Available Date",
      Available_Size : <input type="date" id="birthday" name="birthday"/>,
      url: "#"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Q2LexC2KFfzOVNNF3wTn7qI4i5Q8pm9_k1xfxUWbO-NeeNBSFG9IDP6kzp7JKS8zKFE&usqp=CAU",
      title: "Shirt with garara",
      content: "light blue",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      date: "Available Date",
      Available_Size : <input type="date" id="birthday" name="birthday"/>,
      url: "#"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGKqEJafae75Wfp5uExN8Bp-ud1E4FC-20-1Ki6a3KlpcT-Zf4TYsSay_uxWftgQ--Dg&usqp=CAU",
      title: "Frock with pajama",
      content: "Light purple",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      date: "Available Date",
      Available_Size : <input type="date" id="birthday" name="birthday"/>,
      url: "#"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmw4-6Tx7N40eGyIqPrlUBwwsAat0odV3FDnEs10JpJ-rkGlAzj2D37H-pmLmEo5BqEE8&usqp=CAU",
      title: "Kameez shalwar",
      content: "Peach",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      date: "Available Date",
      Available_Size : <input type="date" id="birthday" name="birthday"/>,
      url: "#"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLPuCYShu2EXDCotV00qM9mc36XdwHoBUHTMCXPBdK3oQg1bcDDOPqvJzha4oV3hEVvE&usqp=CAU",
      title: "Long Maxi",
      content: "soft pink",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      date: "Available Date",
      Available_Size : <input type="date" id="birthday" name="birthday"/>,
      url: "#"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ejy_oTbY8raIfMVPPtfOHjCJR0hoYTzsj_zH-wI8W_GyCejVPvp9mjqu_xSNnrSVBCA&usqp=CAU",
      title: "Long Maxi",
      content: "White",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      date: "Available Date",
      Available_Size : <input type="date" id="birthday" name="birthday"/>,
      url: "#"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPNPu3LD420tvVBmVMrpVqDuPs8VTV7nRfTrdmCDx7_IORzUxnL7FIKtqeyPbUiGo69Y&usqp=CAU",
      title: "Lehanga with short Shirt",
      content: "light gray",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      date: "Available Date",
      Available_Size : <input type="date" id="birthday" name="birthday"/>,
      url: "#"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoav5Xd1ROehE0V_670VxOWcLs1xcScMs0gY0BiJ7wi6v5lO_Yfwbdm8Qvi5tpreMlhI&usqp=CAU",
      title: "Long Frock",
      content: "Sky blue",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      date: "Available Date",
      Available_Size : <input type="date" id="birthday" name="birthday"/>,
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
