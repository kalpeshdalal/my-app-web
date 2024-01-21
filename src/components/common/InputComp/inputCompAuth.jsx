import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
const InputCompAuth = ({ label, value, name = 'email', onChange, error, type = 'text', onFocus }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="mb-4 relative w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 absolute bg-white top-[-14px] left-2 px-1">
          {label}
        </label>
      )}
      <div className="mt-1  rounded-md  ">
        <input
          type={type === 'password' ? showPassword ? 'text' : 'password' : type}
          name={name}
          id={name}
          onFocus={onFocus}
          className={`shadow-sm py-3 px-2  focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${error ? 'border-1 border-red-500' : 'border'
            }`}
          value={value}
          onChange={onChange}
        // aria-invalid={error ? 'true' : 'false'}
        // aria-describedby="email-error"
        />
        {type === 'password' && <button
          type="button"
          className={`absolute inset-y-0 right-0 ${error ? "top-[-30px]" : ''} pr-3 flex items-center text-sm leading-5`}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputCompAuth;
