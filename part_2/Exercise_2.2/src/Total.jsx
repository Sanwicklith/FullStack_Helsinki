const Total = ({ parts }) => {
  return (
    <div>
      <p>
        Total of {" "}
        {parts[0].exercises +
          parts[1].exercises +
          parts[2].exercises +
          parts[3].exercises
        }
          {" "}exercises
      </p>
    </div>
  );
};

export default Total;
