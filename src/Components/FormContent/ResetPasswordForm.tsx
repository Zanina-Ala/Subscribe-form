import React, { useState } from 'react';
import './ResetPasswordForm.css'; 
import FormPicture from "../../Assets/Image.webp";
import logoImage from '../../Assets/Logo.png';

interface ResetPasswordFormProps {
  onCancel: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onCancel }) => {
  const [email, setEmail] = useState<string>('');
  const [label, setLabel] = useState<string>("Email Address:");
  const [buttonVisible, setButtonVisible] = useState(true);
  const [placeholder, setPlaceholder] = useState('Your Email');

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLabel("Code:");
    setButtonVisible(false);
    setPlaceholder(" Code"); 
  };
    
   
 

  return (
    <form className="ResetForm"> 
    <div className='LeftCard'>
      <img src={FormPicture} alt='Person' />
    </div>
    <div className="RightCard">
    <div className="LogoForm">
          <img src={logoImage} alt="This the logo of the form" />
        </div>
        <h1>Forget Password ? </h1>
        <p>Enter the email adresse you used when you joined and we'll send your instructions to reset your password . For Security reasons , we do NOT store your password . So rest assured that we will never send your password via eamil </p>
        <label>{label}</label>
      <div className='ResetEmail'> 
        <br></br>
         <input
           type="email"
             placeholder={placeholder}
              value={email}
               onChange={(e) => setEmail(e.target.value)}
                />
        </div>
        <div className='ButtonReset'>
        <button style={{ display: buttonVisible ? 'block' : 'none' }} onClick={handleReset}>Send reset Instruction</button>      </div>
      </div>
      
      </form>
  );
};

export default ResetPasswordForm;
