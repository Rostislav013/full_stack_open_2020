import React, { useState, useEffect } from "react";
import Persons from "./Components/Persons";
import PersonForm from "./Components/PersonForm";
import Filter from "./Components/Filter";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("Promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  
  // Adding new contact
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // for Filtering
  const [showAll, setShowAll] = useState(true);
  const [filt_name, setFilt_name] = useState("");

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toUpperCase().includes(filt_name.toUpperCase())
      );
  //console.log(persons.filter((person) => person.name.includes(filt_name)));
  //console.log(filt_name);

  const handleFilter = (event) => {
    setFilt_name(event.target.value);
    setShowAll(false);
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    // prevent adding existing name
    const names = persons.map((el) => el.name); // array of existing names
    if (newName === "" || newNumber === "") {
      alert("Type a name with number");
    } else if (names.includes(newName)) {
      alert(`${newName} is already in phonebook.`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName(""); // reset input
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filt_name={filt_name} handleFilter={handleFilter} />

      <h3 style={{ margin: "10px" }}>Add a contact</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h2 style={{ margin: "10px" }}>Contacts</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;