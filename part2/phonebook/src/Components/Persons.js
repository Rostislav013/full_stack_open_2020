import React from "react";

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      <ul>
        {persons.map((person, i) => (
          <li key={person.name} style={{ listStyle: "none" }}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Persons;
