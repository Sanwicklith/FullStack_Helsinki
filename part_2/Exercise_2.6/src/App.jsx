import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    const newPerson = e.target.name.value;
    // console.log(newPerson);
    setPersons(persons.concat({ name: newPerson }));
    setNewName('');
  };

  const handleChange = e => setNewName(e.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input name="name" onChange={handleChange} type="text" value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, i) => (
          <p key={i}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
