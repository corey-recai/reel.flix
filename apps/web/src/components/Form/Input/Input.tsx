import React, { ChangeEventHandler, forwardRef, RefObject } from "react";

interface Props {
  name: string;
  type: string;
  title: string;
  className: string;
  placeholder?: string;
  // onChange: ChangeEventHandler<HTMLInputElement>;
  autoComplete: string;
  value?: string;
  errorDiv?: string;
  errorMsg?: string;
}

export const Input = forwardRef(
  (
    {
      name,
      type,
      title,
      className,
      placeholder,
      // onChange,
      autoComplete,
      value,
      errorDiv,
      errorMsg,
    }: Props,
    ref: RefObject<HTMLInputElement>
  ) => {
    return (
      <div className='mb-3'>
        <label htmlFor={name} className='form-label'>
          {title}
        </label>
        <input
          type={type}
          className={className}
          id={name}
          ref={ref}
          name={name}
          placeholder={placeholder}
          // onChange={onChange}
          autoComplete={autoComplete}
          value={value}
        />
        <div className={errorDiv}>{errorMsg}</div>
      </div>
    );
  }
);

export default Input;
