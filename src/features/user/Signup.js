import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { signUpUser } from './UserSlice';


function Signup() {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);

  const addUser = (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      email,
      password,
    };
    dispatch(signUpUser(newUser));
    setUserName("");
    setEmail("");
    setPassword("");
  };


  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch();    
  }, [dispatch, state]);


  return (
    <Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={ addUser()}
              method="POST"
            >
             <div className="name">
                    <label className="form__label" for="name">Last Name </label>
                    <input  type="text" name="" id="userName" value={userName}  className="form__input" onChange = {(e) => setUserName(e.target.value)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <button
            type="submit"
            onClick={ addUser }
            className="register__registerButton"
          >
            Create your Account
          </button>
            </form>
            <div class="mt-6">
              <div class="relative">
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Or <Link to="login"> Login</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Signup