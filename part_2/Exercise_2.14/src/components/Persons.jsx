
const Persons = ({ filteredPersons, handleDelete }) => {
  return (
    <div>
      {filteredPersons.map((p) => (
        <p key={p.id}>
          {p.name} {p.number} {" "}
          <button onClick={() => handleDelete(p.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
}

export default Persons;
