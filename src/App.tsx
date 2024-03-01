import React from 'react';
import RegistrationForm from './Components/FormContent/SignIn';


const App: React.FC = () => {
  const handleNext = () => {
    console.log('Next button clicked');
  };

  return (
    <div>
      <div style={{ float: 'right' }}>
      </div>
      <RegistrationForm onNext={handleNext} />
    </div>
  );
};

export default App;


