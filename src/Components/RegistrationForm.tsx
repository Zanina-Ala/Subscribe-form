import React, { useState, useRef } from 'react';
import './RegistrationForm.css'; 
import logoImage from '../Assets/Logo.png';

interface RegistrationFormProps {
  onNext: (isValid: boolean) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onNext }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const handleNext = () => {
    const isValid =
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      isChecked;
    alert(`Validation result: ${isValid}`);
    onNext(isValid);
  };

  return (
    <form className='LoginForm'> 
      <div className='LeftCart'>
        <div className="LogoForm">
          <img src={logoImage} alt="This the logo of form" />
        </div>
        <div>
          <h1>Create your account</h1>
          <p>Fill the form below to create an account</p>
          <div className='LoginName'>
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='LoginEmail'>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='LoginPassword'>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='CheckBox'>
            <input
              type="checkbox"
              ref={checkboxRef}
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label>Agree to terms and conditions</label>
          </div>
          <div className='ButtonNext'>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
      <div className='RightCard'>
      </div>
    </form>
  );
};

export default RegistrationForm;
