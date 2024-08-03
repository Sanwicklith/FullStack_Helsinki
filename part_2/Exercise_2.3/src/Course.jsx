
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = ({course}) => {
  const {name, parts} = course;
  console.log(name)
  return (
    <div>
      <Header  course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default Course