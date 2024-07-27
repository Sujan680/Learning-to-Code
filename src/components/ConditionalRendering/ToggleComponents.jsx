import React, { useState } from 'react';

const ComponentA = () => <div> Component A</div>;
const ComponentB = () => <div>Component B</div>;

const ToggleComponents = () => {
  const [showComponentA, setShowComponentA] = useState(true);

  const handleToggle = () => {
    setShowComponentA(!showComponentA);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleToggle}>
        {showComponentA ? 'Show Component B' : 'Show Component A'}
      </button>
      {showComponentA ? <ComponentA /> : <ComponentB />}
    </div>
  );
};

export default ToggleComponents;
