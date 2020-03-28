import React from 'react'
import ReactDOM from 'react-dom'

const shortid = require('shortid');

const Course = ({ course }) => {

  return(
    <div>
      { course.map(el => {
          return(
            <div>
              <Header course={el} />
              <Content course={el}  />
              <Total course={el} />
            </div>
          )}
        )}
    </div>
  )
}


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
       { props.course.parts.map(el => {
          return <Part key={shortid.generate()} name={el.name} exercises={el.exercises} />
       })}
    </div>
  );
};

const Total = (props) => {
  const parts = props.course.parts.map(el => el.exercises)
  const total = parts.reduce((s,p) => s + p)

  return(
    <div>
      <p><strong>Total of {total} exercises</strong></p>
    </div>
  );
}

export default Course;
