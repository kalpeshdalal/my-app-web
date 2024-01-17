import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { apiPOST } from "../../utilies/apiHandler";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/authenticationReducer";
import DigitalFlakeLogo from '../../assets/digitalFlakeLogo.svg'
import InputCompAuth from "../common/InputComp/InputCompAuth";
import PrimaryButton from "../common/buttonComp/buttonComp";
import { toast } from "react-toastify";
export const LoginComp = (params) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const handleEmailChange = (event) => {
        setEmailError('')
        const newEmail = event.target.value;
        setEmail(newEmail);
        if (newEmail.includes('@') && newEmail.includes('.')) {
            setEmailError('');
        } else {
            setEmailError   ('Please enter a valid email.');
        }
    };

    const handlePasswordChange = (event) => {
        setPasswordError('')
        const newPasssword = event.target.value;
        setPassword(newPasssword);
    };
    const loginHandler = async () => {

        if (!email) {
            setEmailError("Email is required");
            return;
        }
        if (!password) {
            setPasswordError("Password is required");
            return;
        }

        try {
            const payload = {
                email: email,
                password: password
            }
            const response = await apiPOST("/v1/auth/login", payload);
            if (response?.data != 403) {
                if (response?.status === 200) {
                    toast.success('Login Successfull !!');
                    const { user, tokens } = response?.data?.data;
                    dispatch(setUser({ user }));
                    localStorage.setItem("isLogin", true);
                    localStorage.setItem("accessToken", tokens.access.token);
                    localStorage.setItem("refreshToken", tokens.refresh.token);

                    navigate('/')

                } else if (response.status === 400) {
                    toast.error(response.data.data)
                }
                else {
                    toast.error(response?.data?.data);

                    setIsLoading(false);
                }
            } else {

                console.log('errr');
            }
        } catch (error) {
            console.error("Error during login:", error);
            setIsLoading(false);
        }
    }

    return (

        <div className="w-[560px] m-3 md:m-6 p-4 md:p-9  bg-white rounded-2xl shadow-2xl">
            <div className="flex justify-center mt-3 ">
                <img src={DigitalFlakeLogo} alt='DigitalFlake Logo' className="max-w-[150px] md:max-w-[200px] "></img>
            </div>
            <div className="text-center  text-base md:text-xl text-[#717070]">
                Welcome to Digitalflake Admin
            </div>

            <div className="md:mt-16 mt-10">
                <div className="mb-10">
                    <InputCompAuth
                        label="Email ID"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                        type='email'
                    />
                </div>
                <div className="">
                    <InputCompAuth
                        label="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={passwordError}
                        type={'password'}
                    />

                </div>
                <div className="flex justify-end">
                    <button className="text-[#A08CB1] hover:text-[#7e4caa]"> Forgot Password?</button>
                </div>
                <div className=" mt-6 md:mt-16 mb-3  ">
                    <PrimaryButton
                        text={'Log In'}
                        btnClass={'h-12 w-full rounded-lg'}
                        onClick={loginHandler}
                    />
                    <div className="py-2 flex justify-center">Don't have an Account? <Link to={'/signup'} className="ml-1 hover:underline"> Sign Up </Link></div>
                </div>
            </div>
            
        </div>

    );
};

