import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { apiPOST } from "../../utilies/apiHandler";
import { Link } from "react-router-dom";
import FloatingLabelInput from "../common/floatingInput";

export const LoginComp = (params) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const loginHandler = async () => {
        try {
            if (!email) {
                setEmailError("Email is required");
                return;
            }
            if (!password) {
                setPasswordError("Password is required");
                return;
            }
            let payload = {
                "email": email,
                "password": password,
            }

            const res = await apiPOST('/v1/auth/login', payload)
            if (res.status === 200) {
            } else {
                alert('error')
            }
        } catch (err) {
            console.log("Error while login :-", err);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center  w-full ">
           
                <div className="flex flex-col w-full">
                    <Link to={'/'} className="flex justify-end  "><GrClose /></Link>
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Sign in to your account
                    </h1>
                </div>
                <form className="space-y-4 md:space-y-6 w-full" >
                    <div className="mb-3">
                        <FloatingLabelInput
                            value={email}
                            id={"email"}
                            label="Enter Your Email"
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <FloatingLabelInput
                            value={password}
                            id={"password"}
                            label="Enter Password"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mt-2">
                        <button type="submit" className="w-full text-[18px] text-white bg-[#39bdb2] hover:bg-[#26817a] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={loginHandler}>Sign in</button>
                    </div>
                    <p className="text-sm font-light text-center text-gray-400">
                        Don’t have an account yet? <Link to={"/signup"} className="font-medium text-gray-300 hover:underline ">Sign up</Link>
                    </p>
                </form>
        </div>
    );
};

