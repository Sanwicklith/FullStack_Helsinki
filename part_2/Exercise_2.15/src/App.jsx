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
    personService.getAllPersons().then(initialPersons => {
      setPersons(initialPersons);
    });
  }, []);

  const handleFormSubmit = e => {
    e.preventDefault();
    const newPersonName = person.name.trim().toLowerCase();
    const personNames = persons.map(p => p.name.toLowerCase());
    const newPerson = { name: person.name.trim(), number: person.number.trim() };

    if (personNames.includes(newPersonName)) {
      const personToUpdate = persons.find(p => p.name.toLowerCase() === newPersonName);
      if (
        window.confirm(
          `${person.name} is already added to phonebook. Replace the old number with the new one?`
        )
      ) {
        personService.update(personToUpdate.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => (p.id === updatedPerson.id ? updatedPerson : p)));
            setPerson({ name: '', number: '' });
          });
      }
    } else {
      personService.createPerson(newPerson).then(addedPerson => {
        if (addedPerson) {
          setPersons(persons.concat(addedPerson));
          setPerson({ name: '', number: '' });
        }
      });
    }
  };

  const handleFormChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleDelete = id => {
    if (window.confirm(`Delete ${persons.find(p => p.id === id).name}?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter(p => p.id !== id));
      });
    }
  };

  const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

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
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
