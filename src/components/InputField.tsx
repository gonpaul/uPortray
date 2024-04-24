import { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  transition: height 0.2s;

  &:focus {
    outline: none;
  }

  /* Adjust height based on content */
  height: auto;
  min-height: 40px;
`

const TextInput = () => {
  const [value, setValue] = useState(''); // State to store input value

  // Event handler to update input value // Work on
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <StyledInput
      contentEditable={true}
      onInput={handleChange}
      dangerouslySetInnerHTML={{ __html: value }}
      className={'textInput'}
    />
  );
};

export default TextInput;
