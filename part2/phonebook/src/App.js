import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '0442399527'}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNewName = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const names = persons.map(el => el.name) // array of existid names

    if(newName === '' || newNumber === '') {
      alert("Type a name with number")
    } else if(names.includes(newName)) {
      alert(`${newName} is already in phonebook.`)
    }  else  {
      setPersons(persons.concat(personObject))
      setNewName('') // reset input
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form id="nameForm" onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
          <div>number: <input type="number" value={newNumber} onChange={handleNewNumber} placeholder="ex. 0441234567"/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) =>
          <li key={person.name} style={{listStyle: "none"}}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App
