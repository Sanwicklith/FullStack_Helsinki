import { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [person, setPerson] = useState({
    name: '',
    number: '',
  });
  const [filter, setFilter] = useState('');

  const url = 'http://localhost:3001/persons';

  const hook = () => {
    axios.get(url).then(res => {
      setPersons(res.data); // console.log(persons);
    });
  };
  useEffect(hook, []);

  const handleFormSubmit = e => {
    e.preventDefault();
    const newPersonName = person.name.trim().toLowerCase();

    // Extract names from the persons array and convert to lowercase, with a null check
    const personNames = persons.map(p => (p.name ? p.name.toLowerCase() : ''));

    // Check if newPerson is already in the personNames array
    if (personNames.includes(newPersonName)) {
      alert(`${person.name} is already added to phonebook`);
      setPerson({ name: '', number: '' });
    } else {
      axios.post(url, { name: person.name.trim(), number: person.number.trim() }).then(res => {
        console.log(res);
        setPersons(persons.concat({ name: person.name.trim(), number: person.number.trim() }));
      });

      setPerson({ name: '', number: '' });
    }
  };

  const handleFormChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  // Filter persons based on the filter state
  const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
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
