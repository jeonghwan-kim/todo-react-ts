import * as React from 'react';

interface CheckboxProps {
  checked: boolean;
  handleCheck: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = props => {
  const { checked, handleCheck} = props;

  return (
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={(e: React.FormEvent<HTMLInputElement>)=> {
        const { checked } = e.currentTarget
        handleCheck(checked)
      }}
      readOnly></input>
  )
}

export default Checkbox;
