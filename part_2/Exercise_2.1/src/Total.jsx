const Total = ({ parts }) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {parts.parts[0].exercises +
          parts.parts[1].exercises +
          parts.parts[2].exercises}{" "}
      </p>
    </div>
  );
};

export default Total;
