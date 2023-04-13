import React, { RefObject, useRef } from "react";
import { Input } from "../Form/Input/Input";

export const Login = () => {
  const emailRef: RefObject<HTMLInputElement> | null = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> | null = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    if (emailRef.current.value === "admin@example.com") {
      return;
    }
  };
  return (
    <>
      <div className='col-md-6 offset-md-3'>
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <Input
            title='Email Address'
            type='email'
            className='form-control'
            name='email'
            autoComplete='email-new'
            ref={emailRef}
            onChange={e => console.log(emailRef.current?.value)}
          />

          <Input
            title='Password'
            type='password'
            className='form-control'
            name='password'
            autoComplete='password-new'
            ref={passwordRef}
            onChange={e => console.log(passwordRef.current?.value)}
          />
        </form>
      </div>
    </>
  );
};
