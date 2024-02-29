import React from 'react';
import RegistrationForm from './Components/RegistrationForm';


const App: React.FC = () => {
  const handleNext = () => {
    // Add logic for handling 'Next' button click, e.g., navigate to the next step
    console.log('Next button clicked');
  };

  return (
    <div>
      <div style={{ float: 'right' }}>
        {/* Add background image styling here */}
      </div>
      <RegistrationForm onNext={handleNext} />
    </div>
  );
};

export default App;


