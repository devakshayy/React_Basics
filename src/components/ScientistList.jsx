import React from 'react'
import { people } from './data'

const ScientistList = () => {
   const listItems = people.map(person => 
      <li key={person.id}>
         <img src={person.url} alt={person.name} width={500} height={500} />
         <p>
            <b>{person.name}:</b>
           {' '+person.profession+' '}known for {person.accomplishment}
         </p>  
      </li>

   );
     
  return (
    <article>
        <h1>Scientists List</h1>
        <ul>{listItems}</ul>
    </article>
  )
}

export default ScientistList
