import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
   
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
};

const Part = (props) => {

  return(
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {

  return(
    <div>
       { props.course.parts.map((el, i) => {
          return <Part key={i} name={el.name} exercises={el.exercises} />
       })}
    </div>
  );
};

const Total = (props) => {
  let sum = 0;
  return(
    <div>
      {props.course.parts.map((el, i) => {
         sum += el.exercises
      })}
      <p>Number of exercises {sum} </p>
    </div>
  );
}

const App = () => {
  const course = {
   name: 'Half Stack application development',
   parts: [
     {
       name: 'Fundamentals of React',
       exercises: 10
     },
     {
       name: 'Using props to pass data',
       exercises: 7
     },
     {
       name: 'State of a component',
       exercises: 14
     }
   ]
 }

  return (
    <div>
      <Header course={course} />
      <Content course={course}  />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
