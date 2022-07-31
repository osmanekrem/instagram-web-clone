import { Formik, Form } from "formik";
import Button from "components/Button";
import Separator from "components/Separator";
import Input from "../../components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RegisterSchema } from "validation/register-schema";
import { register } from "firebase.js";
import { Helmet } from "react-helmet";


export default function Register() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (values, actions) => {
        const response = await register(values);
        if (response) {
            navigate(location.state?.return_url || "/", {
                replace: true
            });
        }
    }
  return (
    <div className="max-w-[350px] w-full">
      <Helmet>
        <title>Register • Instagram</title>
        </Helmet>     
          <div className="bg-white border border-db  w-full px-[40px] pt-[46px] pb-[30px] mb-2.5">
            <a href="#" className="flex justify-center">
              <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram"/>
            </a>

            <Formik
                initialValues={{
                    email: "",
                    fullName: "",
                    username: "",
                    password: ""
                }}
                onSubmit={handleSubmit}
                validationSchema={RegisterSchema}
            >
              {({ isSubmitting, isValid, dirty, values }) => (
                <Form className="flex flex-col">
                    <h2 className="mt-3 text-8e mb-2.5 font-semibold text-[17px] text-center">
                        Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
                    </h2>
                    <Button>
                        <AiFillFacebook size={20.5}  />
                        Log in with Facebook
                    </Button>
                    <Separator />
                  <Input name="email" label="Phone number or email"/>
                  <Input name="fullName" label="Full Name"/>
                  <Input name="username" label="Username"/>
                  <Input type="password" name="password" label="Password"/>

                  <p className="text-8e text-xs my-2.5 text-center">
                    Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a yüklemiş olabilir.
                    <a href="#" className="font-semibold">Daha Fazla Bilgi Al</a>
                  <br/><br/>
                    Kaydolarak, <a href="#" className="font-semibold">Koşullarımızı, </a><a href="#" className="font-semibold">Gizlilik İlkemizi</a> ve <a href="#" className="font-semibold">Çerezler İlkemizi</a>  kabul etmiş olursun.
                  </p>

      
                  <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>
                    Sign Up
                  </Button>

                </Form>
              )}
            </Formik>
          </div>
  
          <div className="bg-white border border-db py-[25px] px-[15px] text-26 text-center text-sm">
            Have an account? <Link to="/accounts/login" className="text-link-light font-semibold">Log In</Link>
  
          </div>
        </div>
  )
}
