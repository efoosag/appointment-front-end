import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signInUser, useSelect } from './UserSlice';
import { useNavigate } from 'react-router-dom';

const Login= () => {  
  const navigation = useNavigate(); 

  const dispatch = useDispatch();
  const { isSuccess } = useSelector( useSelect )
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
 
  const loginUser = (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };
    dispatch(signInUser(loginDetails));
    setEmail("");
    setPassword("");
  };  
  useEffect(() => {
    if (isSuccess) {
      navigation("/doctors");
    }
  }, [isSuccess,  navigation]);

  
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              method="POST"
            >
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />              
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />              
            </div>
            <button type='submit' onClick={loginUser}>Submit</button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or <Link to="/signup"> Sign Up</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;