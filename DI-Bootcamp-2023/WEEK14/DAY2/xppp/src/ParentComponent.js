

import React from 'react';
import BuggyCounter from './App'; 
import ErrorBoundary from './ErrorBoundary';

const ParentComponent = () => {
  return (
    <div>
      <h2>Simulation 1</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
};

export default ParentComponent;
