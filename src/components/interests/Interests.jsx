import React from 'react';
import Interest from './Interest';
import './Interests.css';

function Interests() {
  const interestList = [
    { label: 'current hobby', value: 'learning to make bubble tea' },
    { label: 'next dream destination', value: 'Hawaii' },
    { label: 'current favourite toronto eats', value: 'Pocha 1898', link: '' },
    { label: 'current favourite vancouver eats', value: 'Minami', link: '' },
    { label: 'favourite fruit', value: 'yuzu', link: '' },
    { label: 'favourite vegetable', value: 'eggplant', link: '' },
    { label: 'watching', value: 'Formula 1: Drive to Survive' },
    { label: 'currently based in', value: 'Toronto, ON' },
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
