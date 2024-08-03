const Total = ({ parts }) => {
  return (
    <div>
      <h4>
        Total of{' '}
        {parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0)}{' '}
        exercises
      </h4>
    </div>
  );
};

export default Total;
