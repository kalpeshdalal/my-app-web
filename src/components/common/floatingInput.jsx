import React from "react";

const FloatingLabelInput = (props) => {
	return (
			<div className="relative w-full mt-8">
				<input
					type={props?.type || "text"}
					id={`floating_outlined_${props.id}`}
					className={`block text-white  w-full !text-[14px]  sm:text-base h-7 bg-transparent border-b pr-10 
					 ${props.value != '' ?
							props.error ? "border-[red]" : "border-b-[#c0c0c0]"
							: props.error ? "border-[red]" : "border-b-[#c0c0c0]"
						}
					 appearance-none focus:outline-none focus:ring-0 peer`}
					placeholder=""
					onKeyUp={(e) => {
						if (e.keyCode === 13 && 
							(props.onKeyUp?.title === 'login' || props.onKeyUp?.title === 'forgot')
							) {
							props?.onKeyUp?.loginCall()
						}
					}}
					onKeyDown={(e)=>{
						if(props.exceptThisSymbols){
							props.exceptThisSymbols.includes(e.key) && e.preventDefault()
						}
					}}
					value={props.value}
					onChange={props.onChange}
					autoComplete='new-password'
				/>

				<label
					htmlFor={`floating_outlined_${props.id}`}
					className={`absolute duration-300 transform bg-transparent 
					top-2 origin-[0] 
					${props.value != '' ? '-translate-y-6 scale-75 text-[16px] text-[#8B8B8B]' : 'translate-y-[-6px] peer-focus:text-[#8B8B8B] text-white scale-100'}
					peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:top-2 text-[20px] sm:text-[16px]`}
				>
					{props.label}
				</label>
			</div>
	);
};

export default FloatingLabelInput;
