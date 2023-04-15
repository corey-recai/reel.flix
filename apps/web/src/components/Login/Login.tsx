import React, { RefObject, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { login } from "../../store/auth";
import { setAlert, clearAlert } from "../../store/log";

import { Input } from "../Form/Input/Input";

export const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const emailRef: RefObject<HTMLInputElement> | null = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> | null = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    // build request payload
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    };

    fetch("http://localhost:8080/authenticate", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          dispatch(
            setAlert({
              message: data.message,
              className: "alert-danger",
            })
          );
        } else {
          dispatch(login(data.access_token));
          dispatch(clearAlert());
          router.push("/");
        }
      })
      .catch(error => {
        dispatch(
          setAlert({
            message: error.message,
            className: "alert-danger",
          })
        );
      });
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
            // onChange={e => console.log(emailRef.current?.value)}
          />

          <Input
            title='Password'
            type='password'
            className='form-control'
            name='password'
            autoComplete='password-new'
            ref={passwordRef}
            // onChange={e => console.log(passwordRef.current?.value)}
          />
          <hr />
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
      </div>
    </>
  );
};
