import React, { useState, useRef } from 'react';
import './SignIn.css'; 
import FormPicture from "../../Assets/Image.webp";
import logoImage from '../../Assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import ResetPasswordForm from './ResetPasswordForm'; 

interface RegistrationFormProps {
  onNext: (isValid: boolean) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onNext }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showResetPasswordForm, setShowResetPasswordForm] = useState<boolean>(false);

  const handleNext = () => {
    const isValid =
      email.trim() !== '' &&
      password.trim() !== '';
    alert(`Validation result: ${isValid}`);
    onNext(isValid);
  };

  const handleForgotPassword = () => {
    setShowResetPasswordForm(true);
  };

  const handleCancelResetPassword = () => {
    setShowResetPasswordForm(false);
  };

  return (
    <form className='LoginForm'> 
      {!showResetPasswordForm ? (
        <>
          <div className='LeftCard'>
            <img src={FormPicture} alt='Person' />
          </div>
          <div className='RightCard'>
            <div className="LogoForm">
              <img src={logoImage} alt="This the logo of the form" />
            </div>
            <div>
              <h1>Sign In to your <br />account</h1>
              <p>Fill up your account Details</p>
              <label>Email </label>
              <div className='LoginEmail'>
                
                <input
                  type="email"
                  placeholder='Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                /><br></br>
              </div>
              <label>Password</label><br />
              <div className='LoginPassword'>
                
                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='ButtonNext'>
                <button onClick={handleNext}>Login</button>
                <p id="pForget" onClick={handleForgotPassword}>Forgot Password</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ResetPasswordForm onCancel={handleCancelResetPassword} />
      )}
    </form>
  );
};

export default RegistrationForm;
 