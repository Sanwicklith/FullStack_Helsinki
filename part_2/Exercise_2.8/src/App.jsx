import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '39-44-5323523' }]);
  const [person, setPerson] = useState({
    name: '',
    number: ''
  });

  const handleFormSubmit = e => {
    e.preventDefault();
    const newPersonName = person.name.trim().toLowerCase();

    // Extract names from the persons array and convert to lowercase, with a null check
    const personNames = persons.map(p => p.name ? p.name.toLowerCase() : '');

    // Check if newPerson is already in the personNames array
    if (personNames.includes(newPersonName)) {
      alert(`${person.name} is already added to phonebook`);
      setPerson({ name: '', number: '' });
    } else {
      setPersons(persons.concat({ name: person.name.trim(), number: person.number.trim() }));
      setPerson({ name: '', number: '' });
    }
  };

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input name="name" onChange={handleChange} type="text" value={person.name} />
        </div>
        <div>
          number: <input name="number" onChange={handleChange} type="text" value={person.number} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((p, i) => (
          <p key={i}>{p.name} {p.number}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
