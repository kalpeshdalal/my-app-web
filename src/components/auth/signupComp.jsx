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
export const SignupComp = (params) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [rePassword, setRePassword] = useState('')

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('')
    const [rePasswordError, setRePasswordError] = useState('')

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
            setEmailError('Please enter a valid email.');
        }
    };
    const handleNameChange = (event) => {
        setNameError('');
        const newName = event.target.value;
        setName(newName);
        if (newName === '') {
            setNameError('Please Enter Name');
        } else {
            setNameError('');
        }
    };
    
    const handlePasswordChange = (event) => {
        setPasswordError('');
        setRePasswordError('')
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (newPassword.length < 6) { 
            setPasswordError('Password should be at least 6 characters long');
        } else {
            setPasswordError('');
        }
    };
    
    const handleRePasswordChange = (event) => {
        setRePasswordError('')
        const newRePassword = event.target.value;
        setRePassword(newRePassword);
        if (newRePassword == '' || newRePassword == undefined) {
            setRePasswordError(' Re-Password is required ');
        } else {
            setRePasswordError('')
        }
    };
    const validate = () => {
        if (!email) {
            setEmailError("Email is required");
            return;
        }
        else if (!password) {
            setPasswordError("Password is required");
            return;
        }
        else if (!rePassword) {
            setRePasswordError("Re-Password is required")
            return;
        }
        else if (!name) {
            setNameError("Name is Required")
            return;
        }
    }
    const signupHandler = async () => {
        validate();
        if (password != rePassword) {
            setRePasswordError('Password do not match !')
            return;
        }
        try {
            const payload = {
                name: name,
                email: email,
                password: password
            }
            console.log(payload);

            const response = await apiPOST("/v1/auth/signup", payload);
            console.log(response);
            if (response?.status === 201) {
                toast.success('Signup Successfull !!');
                navigate('/login')

            } else if (response.status === 400) {
                toast.error(response.data.data.data)
            }
            else {
                toast.error(response?.data?.data);
                setIsLoading(false);
            }
        }
        catch (error) {
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

            <div className="md:mt-10 mt-10">
                <div className="mb-10">
                    <InputCompAuth
                        label="Full Name"
                        value={name}
                        onChange={handleNameChange}
                        error={nameError}
                        type='text'
                    />
                </div>
                <div className="mb-10">
                    <InputCompAuth
                        label="Email ID"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                        type='email'
                    />
                </div>
                <div className="mb-10">
                    <InputCompAuth
                        label="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={passwordError}
                        type={'password'}
                    />
                </div>
                <div className="">
                    <InputCompAuth
                        label="Re-Enter Password"
                        value={rePassword}
                        onChange={handleRePasswordChange}
                        error={rePasswordError}
                        type={'password'}
                    />
                </div>
                <div className=" mt-6 md:mt-6 mb-3  ">
                    <PrimaryButton
                        text={'Sign Up'}
                        btnClass={'h-12 w-full rounded-lg'}
                        loading={isLoading}
                        onClick={signupHandler}
                    />
                    <div className="py-2 flex justify-center">Already have an Account? <Link to={'/login'} className="ml-1 hover:underline"> Login </Link></div>

                </div>

            </div>
        </div>

    );
};

