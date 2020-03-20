import React from 'react';

import { IProps } from './button.types';

export const Button: React.FC<IProps> = ({ buttonText, emitEvent }) => {
  return (
    <>
      <button onClick={emitEvent}>{buttonText}</button>
    </>
  );
};

export default Button;
