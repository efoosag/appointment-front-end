/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { fetchDoctors } from './doctorsSlice';
import Doctor from './Doctor';
import './Doctors.css';

function Doctors() {
  const dispatch = useDispatch();

  const firstThree = { i: 0, n: 3 };
  const [indexes, setIndexes] = useState(firstThree);

  const next = () => {
    if (indexes.n < doctors.length) {
      setIndexes({ i: indexes.i + 3, n: indexes.n + 3 });
    } else {
      setIndexes(firstThree);
    }
  };

  const prev = () => {
    if (indexes.i > 3) {
      setIndexes({ i: indexes.i - 3, n: indexes.n - 3 });
    } else {
      setIndexes(firstThree);
    }
  };

  const retrieveDoctors = () => {
    dispatch(fetchDoctors());
  };
  const doctors = useSelector((state) => state?.doctors?.doctors);
  useEffect(() => {
    retrieveDoctors();
  }, []);

  return (
    <div className="doctor">
      <div>
        <h1 className="doctor-title">Doctors List</h1>
        <p className="doctor-paragraph">Please select a Doctors</p>
        <p className="dashes">----------------------------</p>
      </div>
      <div className="doctors-box">
        <div className="prev" onClick={prev}>
          <AiFillCaretLeft className="back-arrow" />
        </div>
        {
          doctors?.map((doctor) => (<Doctor key={doctor.id} doctor={doctor} />))
        }
        <div className="next" onClick={next}>
          <AiFillCaretRight className="next-arrow" />
        </div>
        <hr className="hr-btn" />
        <div className="btns">
          <div className="prev-mob" onClick={prev}>
            <AiFillCaretLeft className="back-arrow" />
          </div>
          <div className="next-mob" onClick={next}>
            <AiFillCaretRight className="next-arrow" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Doctors;
