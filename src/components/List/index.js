import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const cats = useSelector((state) => state.cats);
  const boxes = useSelector((state) => state.boxes);
  return (
    <ul>
      {boxes.map((box) => (
        <li key={box.name}>
          <h3>{box.name}</h3>
          <ul>
            {cats[box.id].map((cat) => (
              <li key={cat.name}>{cat.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
