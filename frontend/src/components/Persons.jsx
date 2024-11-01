import React from 'react'

const Persons = ( props ) => {
    const {person} = props; 
  return (
    <div>
        {
            <h1>Hi, i am {person.name}, i am {person.age} years old.</h1>
        }
    </div>
  )
}

export default Persons