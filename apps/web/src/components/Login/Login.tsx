import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";

import { Input } from "@components/Form/Input/Input";

import { useAppContext } from "@store";

const Login: Component = () => {
  const navigate = useNavigate();

  const [_, { login, setAlert, clearAlert }] = useAppContext();

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    console.log("email", (e.target as HTMLFormElement)["email"].value);
    console.log("password", (e.target as HTMLFormElement)["password"].value);

    // build request payload
    const payload = {
      email: (e.target as HTMLFormElement)["email"].value,
      password: (e.target as HTMLFormElement)["password"].value,
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
          setAlert!({
            message: data.message,
            display: "alert-danger",
          });
          // console.log(data.message);
        } else {
          login!(data.access_token);
          clearAlert!();
          navigate("/", { replace: true });
          // console.log(data.access_token);
        }
      })
      .catch(error => {
        setAlert!({
          message: error.message,
          display: "alert-danger",
        });

        // console.log(error.message);
      });
  };

  return (
    <>
      <div class='col-md-6 offset-md-3'>
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <Input
            title='Email Address'
            type='email'
            className='form-control'
            name='email'
            autoComplete='email-new'
          />

          <Input
            title='Password'
            type='password'
            className='form-control'
            name='password'
            autoComplete='password-new'
          />
          <hr />
          <input type='submit' class='btn btn-primary' value='Login' />
        </form>
      </div>
    </>
  );
};

export default Login;
