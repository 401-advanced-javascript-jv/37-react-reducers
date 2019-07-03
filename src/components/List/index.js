import React from 'react';

export default function List(props) {
  return (
    <ul>
      {props.boxes.map(box => (
        <li>
          <h3>{box.name}</h3>
          <ul>
            {props.cats.map(cats => (
              <li>{cats.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
