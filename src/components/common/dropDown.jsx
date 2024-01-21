import React from 'react';

const DropdownCompAuth = ({ label, options, value, onChange, error, onFocus }) => {
  return (
    <div className="mb-4 relative w-full">
      {label && (
        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700 absolute bg-white top-[-14px] left-2 px-1">
          {label}
        </label>
      )}
      <div className="mt-1 rounded-md">
        <select
          id="dropdown"
          name="dropdown"
          className={`shadow-sm py-3 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
            error ? 'border-1 border-red-500' : 'border'
          }`}
          value={value}
          onFocus={onFocus}
          onChange={onChange}
        >
          <option value="" disabled selected={!value}>
            Select
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="dropdown-error">
          {error}
        </p>
      )}
    </div>
  );
};

export default DropdownCompAuth;
