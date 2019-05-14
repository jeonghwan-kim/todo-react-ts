import * as React from 'react';

interface TitleProps {
  checked: boolean;
  text: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const {checked, text} = props;
  return (
    <span style={{textDecoration: checked ? 'line-through' : ''}}>
      {text}
    </span>
  )
}

export default Title;
