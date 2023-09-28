import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import SingleQuestion from './Question';
import data from './data';

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setName(uid);
        console.log('User is logged in:', user);
      } else {
        console.log('No user is logged in');
      }
    });
  }, []);
  const logOutHandler = async () => {
    await signOut(auth)
      .then(() => {
        navigate('/login');
        alert('Logged out Successfully');
      })
      .catch((err) => console.log(err.message));
  };
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <main>
        <div className='container'>
          <h3 className='title'>
            Frequently asked Customer Experience Questions
          </h3>
          <section className='info'>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
            <div>
              <button onClick={logOutHandler} className='logout-button'>
                Logout
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
