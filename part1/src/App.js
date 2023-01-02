const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  );
}

const Content = (props) => {

  return (
    <>
    <p>
        {props.part1} {props.exercieses1}
      </p>
      <p>
        {props.part2} {props.exercieses2}
      </p>
      <p>
        {props.part3} {props.exercieses3}
      </p>
    </>
  );
}

const Total = (props) => {

  return (
    <p>Number of exercises {props.total}</p>
  );
}

const App = () => {

  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercieses1 = 10
  const part2 = "Using props to pass data"
  const exercieses2 = 7
  const part3 = "State of component"
  const exercieses3 = 14


  return(
    <div>
      <Header course = {course} />
      <Content part1={part1} part2={part2} part3={part3} exercieses1={exercieses1} exercieses2={exercieses2} exercieses3={exercieses3}/>
      <Total total={exercieses1 + exercieses2 + exercieses3}/>

      
    </div>
    );
}
export default App;
