import React from 'react';
import '../../styles/Button.css';

function Button({ text, primary }) {
  return <button className={`custom-button ${primary ? 'primary' : 'secondary'}`}>{text}</button>;
}

export default Button;