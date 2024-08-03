import Part from "./Part";
import Total from "./Total";

const Content = ({ course }) => {

  const {parts, name} = course

  return (
    <div>
      <h3>{name}</h3>
     {
      parts.map((part) => (
        <Part key={part.id} part={part} />
      ))
     }
     <Total parts={parts}/>
    </div>
  );
};

export default Content;
