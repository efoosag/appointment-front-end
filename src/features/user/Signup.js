/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signUpUser } from './UserSlice';

const Signup = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const { signedUp } = state;
  const [signedUpSuccess, setSignedUpSuccess] = useState(signedUp);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(signUpUser(newUser));
    setName('');
    setEmail('');
    setPassword('');
  };
  useEffect(() => {
    setSignedUpSuccess(() => signedUp);
    if (signedUpSuccess === 'up') {
      navigation('/');
    }
  }, [navigation, signedUpSuccess, signedUp]);

  return (
    <>
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
                <label>Name</label>
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
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
              <button type="submit" onClick={registerUser}>Submit</button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or
                    {' '}
                    <Link to="/login"> Login</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
