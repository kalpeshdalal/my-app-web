
import React from "react";
import { SignupComp } from "../../components/auth/signupComp";

export const Signup = () => {


	return (

		<div className=" w-full ">
			<div className="grid md:grid-cols-2 grid-cols-1">
				<div className="flex justify-center min-h-screen items-center">
					<SignupComp />
				</div>
			</div>
		</div>
	);
};


