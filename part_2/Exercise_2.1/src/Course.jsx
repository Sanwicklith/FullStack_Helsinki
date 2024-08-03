
import Header from './Header'
import Content from './Content'


const Course = ({course}) => {
  const {name, parts} = course;
  console.log(name)
  return (
    <div>
      <Header  course={course}/>
      <Content parts={parts}/>
     
    </div>
  )
}

export default Course