import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
import Header from './components/Layout/Header';


const App = () => {

  // let Element = document.body;

  // document.body.style.myStyle

  const [myStyle, setMyStyle] = useState({ backgroundColor: "white" })

  // const [btntext, setBtnText] = useState("Enable dark mode")
  // document.body.style.backgroundColor = "grey";

  const getRandomColor = ()=>{
    return "#" + Math.random().toString(16).slice(2,8);
 }

  useEffect(()=>{
    // change the bg-color of the body after every render
    document.body.style.backgroundColor = getRandomColor();
 })


  const toggleStyle = () => {
    if(myStyle.backgroundColor === 'white'){
      setMyStyle({
        // color: 'white',
        backgroundColor: '#4b4649'
      })
      // setBtnText("Enable white mode")
    }
    else{
      setMyStyle({
        // color: 'black',
        backgroundColor: "white"
      })
      // setBtnText("Enable white mode")
    }
    console.log('toggleStyle was clicked')
}

  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      console.log(updatedGoals);
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
     const updatedGoal = prevGoals.filter(goal => goal.id !== goalId);
    //  console.log(prevGoals);
    //  console.log(updatedGoal);
    //  console.log(goalId);
      return updatedGoal;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <>
    <div className='arrange' >
      <section id="goal-form">
      {/* {btntext} */}
      <Header onChangeHandler={toggleStyle} />
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
    </>
  );
};

export default App;
