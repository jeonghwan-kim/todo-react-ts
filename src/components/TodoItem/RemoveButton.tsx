import * as React from 'react';

interface RemoveButtonProps {
  handleClick: () => void;
}

const RemoveButton: React.FC<RemoveButtonProps> = (props) => {
  const {handleClick} = props;
  return (
    <button onClick={() => handleClick()}>
      X
    </button>
  )
}

export default RemoveButton;
