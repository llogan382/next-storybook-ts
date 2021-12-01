import React, { FC } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
  disabled?: boolean;
  value?: string;
  type?: string;
}
const Input: React.FC<InputProps> = (props) => {
const {label, placeholder, name, value, type="text",
disabled=false, onChange, ...rest} = props;
  return(
  <div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name}  placeholder={placeholder} id={name} disabled={disabled} />
  </div>
  )

};

export default Input;
