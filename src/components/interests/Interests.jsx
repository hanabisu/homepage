import React from 'react';
import Interest from './Interest';
import './Interests.css';

function Interests() {
  const interestList = [
    { label: 'learning about', value: 'making FE components from scratch using only HTML, CSS, and React' },
    { label: 'currently based in', value: 'Toronto, ON' },
    { label: 'current hobby', value: 'learning to make bubble tea' },
    { label: 'current favourite toronto eats', value: 'Pocha 1989', link: '' },
    { label: 'current favourite vancouver eats', value: 'Minami', link: '' },
    { label: 'next dream destination', value: 'Hawaii' },
    { label: 'favourite fruit', value: 'yuzu', link: '' },
    { label: 'favourite vegetable', value: 'eggplant', link: '' },
    { label: 'watching', value: 'This is Us' },
  ];
  return (
    <div>
      <span className="anchor" id="interests" />
      <h1>interests</h1>
      <div className="interests">
        <div className="row">
          {interestList.map((i) => (
            <div className="column" key={i.label.replaceAll(' ', '-')}>
              <Interest label={i.label} value={i.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interests;
