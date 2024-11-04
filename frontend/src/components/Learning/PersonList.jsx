import React from 'react'
import Person from './Persons'

const PersonList = () => {
    const persons = [
        {
            name: "Anna",
            age: 15,
        },
        {
            name: "Ben",
            age: 25,
        },
        {
            name: "Clark",
            age: 18,
        }
    ]

    const personDetails = persons.map(person => (
        <Person person = {person}/>
    ))

  return (
    <div>{personDetails}</div>
  )
}

export default PersonList