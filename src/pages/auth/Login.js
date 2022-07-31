import { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login } from "firebase.js";
import { Formik, Form } from "formik";
import { LoginSchema } from "validation";
import Button from "components/Button";
import Separator from "components/Separator";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

export default function Login() {

    const ref = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector(state => state.auth.user);
  
    useEffect(() => {
      let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
      const imageSlider = () => {
        images[(current > 0 ? current : total) -1].classList.add("opacity-0");
        images[current].classList.remove("opacity-0");
        current = (current === total-1) ? 0 : current + 1;
      }
      imageSlider()
      let interval = setInterval(imageSlider, 3000);
  
      return () => {
        clearInterval(interval);
      }
  
    }, [ref]);

    const images = [
      "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
      "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
      "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
      "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
    ]

    if (user) {
        navigate(location.state?.return_url || "/", {
            replace: true
        });
    }

    const handleSubmit = async (values, actions) => {
        const response = await login(values.username, values.password)
    }
        
  
    return (
      <div className="h-full w-full flex items-center justify-center flex-wrap overflow-auto">
        <Helmet>
          <title>Login • Instagram</title>
        </Helmet>   
        <div className="hidden md:block mr-8 w-[380px] h-[581px] bg-login-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
          <div className="w-[250px] h-[530px] top-[27px] right-[18px] absolute" ref={ref}>
            {images.map((image, index) => (
              <img key={index} className="h-full w-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src={image} alt="instagram"/>
            ))}
          </div>
        </div>
  
        <div className="max-w-[350px] w-full">        
          <div className="bg-white border border-db  w-full px-[40px] pt-[46px] pb-[20px] mb-2.5">
            <div className="flex justify-center">
              <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram"/>
            </div>

            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                onSubmit={handleSubmit}
                validationSchema={LoginSchema}
            >
              {({ isSubmitting, isValid, dirty, values }) => (
                <Form className="mt-9 flex flex-col">
                  <Input name="username" label="Phone number, username or email"/>
                  <Input type="password" name="password" label="Password"/>
      
                  <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
                    Log In
                  </Button>
      
                  <Separator />
      
                  <a href="#" className="flex items-center justify-center text-sm font-semibold gap-x-2 text-facebook my-2">
                    <AiFillFacebook size={20.5}  />
                    Log in with Facebook
                  </a>
      
                  <a href="#" className="flex items-center justify-center text-xs mt-3 text-link">
                    Forgot password?
                  </a>

                </Form>
              )}
            </Formik>
          </div>
  
          <div className="bg-white border border-db py-[25px] px-[15px] text-26 text-center text-sm">
            Don't have an account? <Link to="/accounts/register" className="text-link-light font-semibold">Sign up</Link>
  
          </div>
        </div>
      </div>
    );
  }
