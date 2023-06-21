import React from 'react';

const Concept = ({ props }) => {
  return (
    <>
      {props.map((item) => (
        <li
          className='concept'
          key={item.title}
        >
          <img
            src={item.image}
            alt={item.title}
          />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </>
  );
};

export default Concept;
