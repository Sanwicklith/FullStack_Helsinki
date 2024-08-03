import Header from './Header';
import Content from './Course/Content';
// import Total from './Total';

const Course = ({ course }) => {
  // const { parts } = course;
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      {/* <Total parts={parts} /> */}
    </div>
  );
};

export default Course;
