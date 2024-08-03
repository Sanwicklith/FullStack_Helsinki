import { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService.getAllPersons()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPersonName = person.name.trim().toLowerCase();
    const personNames = persons.map(p => p.name.toLowerCase());
    const newPerson = { name: person.name.trim(), number: person.number.trim() };

    if (personNames.includes(newPersonName)) {
      alert(`${person.name} is already added to phonebook`);
      setPerson({ name: '', number: '' });
    } else {
      personService.createPerson(newPerson)
        .then(addedPerson => {
          if (addedPerson) {
            setPersons(persons.concat(addedPerson));
            setPerson({ name: '', number: '' });
          }
        });
    }
  };

  const handleFormChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        person={person}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
