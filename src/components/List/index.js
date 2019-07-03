import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const cats = useSelector((state) => state.cats);
  const boxes = useSelector((state) => state.boxes);

  return (
    <ul>
      {boxes.map((box) => (
        <li>
          <h3>{box.name}</h3>
          <ul>
            {Object.keys(cats)
              .filter((catId) => cats[catId].box === box.id)
              .map((catId) => <li>{cats[catId].name}</li>)}
          </ul>
        </li>
      ))}
    </ul>
  );
};
