import { GrClose } from "react-icons/gr";
import FloatingLabelInput from "../common/floatingInput";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SignupComp = (params) =>  {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword,setRePassword] = useState('')

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex flex-col">
                            <Link to={'/'} className="flex justify-end "><GrClose /></Link>
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Create your account
                            </h1>
                        </div>
                        <form className="space-y-4 md:space-y-6" >
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
                            <div className="mb-3">
                                <FloatingLabelInput
                                    value={repassword}
                                    id={"repassword"}
                                    label="Enter Password Again"
                                    type="password"
                                    onChange={(e) => {
                                        setRePassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mt-2">
                                <button type="submit" className="w-full text-[18px] text-white bg-[#39bdb2] hover:bg-[#26817a] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                            </div>
                            <p className="text-sm font-light text-gray-400">
                                Already have an account? <Link to={"/login"} className="font-medium text-gray-300 hover:underline ">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
  