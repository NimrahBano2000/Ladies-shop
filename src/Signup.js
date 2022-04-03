import React, { useState,useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.jpg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import Header from "headers/light.js";

const Container = tw(ContainerBase)`min-h-screen bg-blue-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none  text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in-out flex items-center justify-center  focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;



const logoLinkUrl = "#";
const illustrationImageSrc = illustration;
const headingText = "Sign Up";
const socialButtons = [
  {
    iconImageSrc: googleIconImageSrc,
    text: "Sign Up With Google",
    url: "https://google.com"
  },
  {
    iconImageSrc: twitterIconImageSrc,
    text: "Sign Up With Twitter",
    url: "https://twitter.com"
  }
];
const submitButtonText = "Sign Up";
const SubmitButtonIcon = SignUpIcon;
const tosUrl = "#";
const privacyPolicyUrl = "#";
const signInUrl = "#";

const Signup = () =>{
  
const initialValues = {fname: "",lname: "",contact_no: "",cnic:"",address:"",email:"",password:"",cpassword:""};
const [FormValue,setFormValue]=useState(initialValues);
const [formError,setformError] = useState({});
const [isSubmit,setisSubmit] = useState(false);
  useEffect(() => {
    console.log(formError);
    if(Object.keys(formError.length === 0 && isSubmit))
    {
        console.log(FormValue);
    }
    
  }, [formError]);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValue({...FormValue,[name]:value});
    console.log(FormValue);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setformError(Validate(FormValue));
    console.log(formError);
    setisSubmit(true);
  }

  const Validate = (values) =>{
    console.log(FormValue);
    const errors = {};
    const regex1 = /^[A-Za-z]+$/;
    const regex2 = /^[0-9]*$/;
    if(!values.fname)
    {
      errors.fname = "First name is required feild";
    }
    else if(!regex1.test(values.fname))
    {
      errors.fname = "First name only contain ALphabet Charcters";
    }
    if(!values.lname)
    {
      errors.lname = "Last name is required feild";
    }
    else if(!regex1.test(values.lname))
    {
      errors.fname = "last name only contain ALphabet Charcters";
    }
    if(!values.contact_no)
    {
      errors.contact_no = "contact no is required feild";
    }
    else if(!regex2.test(values.contact_no))
    {
      errors.fname = "ContactNo only contain Numbers";
    }
    if(!values.cnic)
    {
      errors.cnic = "CNIC  is required feild";
    }
    else if(!regex2.test(values.cnic))
    {
      errors.fname = "CNIC only contain Numbers";
    }
    if(!values.password)
    {
      errors.password = "Password  is required feild";
    }
    if(!values.cpassword)
    {
      errors.cpassword = "confirm password  is required feild";
    }
    if(!values.address)
    {
      errors.address = "Address is required feild";
    }
    
    if(!values.email)
    {
      errors.email = "Email is required feild";
    }
   
    return errors;

  }

return(<>

  
    <Header/>
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Or Sign up with your e-mail</DividerText>
              </DividerTextContainer>
              <form>
              <Input type="text" name="fname" value={FormValue.fname} onChange={handleChange} placeholder="Firstname" />
              <pre>{formError.fname}</pre>
              <Input type="text" name="lname" value={FormValue.lname} onChange={handleChange} placeholder="Lastname" />
              <pre>{formError.lname}</pre>
              <Input type="number" name="contact_no" value={FormValue.contact_no} onChange={handleChange} placeholder="contact no" />
              <pre>{formError.contact_no}</pre>
              <Input type="number" name="cnic" value={FormValue.cnic} onChange={handleChange} placeholder="CNIC" />
              <pre>{formError.cnic}</pre>
              <Input type="text" name="address" value={FormValue.address} onChange={handleChange} placeholder="Address" />
              <pre>{formError.address}</pre>
                <Input type="email" name="email" value={FormValue.email}onChange={handleChange} placeholder="Email"  />
                <pre>{formError.email}</pre>
                <Input type="password" name="password" value={FormValue.password} onChange={handleChange} placeholder="Password" />
                <pre>{formError.password}</pre>
                <Input type="password" name="cpassword" value={FormValue.cpassword} onChange={handleChange} placeholder="confirm Password" />
                <pre>{formError.cpassword}</pre>
                <SubmitButton type="submit" onClick={handleSubmit}>
                  {/* <SubmitButtonIcon className="icon" /> */}
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  I agree with{" "}
                  <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>

                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href="Login" tw="border-b border-gray-500 border-dotted">
                    Sign In
                  </a>
                </p>
                </form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    

  </>);
};
export default Signup;
