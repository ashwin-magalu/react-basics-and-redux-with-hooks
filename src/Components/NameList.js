import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Ashwin", "Akshay", "Disha", "Disha"];
  const persons = [
    { id: 1, name: "Ashwin", age: 26 },
    { id: 2, name: "Akshay", age: 22 },
    { id: 3, name: "Disha", age: 21 },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  {
    /* using id is better for key value and key values should be unique. Key is a special attribute that should be used in  list and they are not accessible in the child component as a prop*/
  }

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index + 1} {name}
    </h2>
  ));
  {
    /* Don't use index as key in many situations */
  }
  return (
    <div>
      {/*   <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
      {personList}
      {nameList}
    </div>
  );
}

export default NameList;
