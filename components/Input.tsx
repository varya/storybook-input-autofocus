import React from 'react';

export const Input = ({ placeholder, type = 'text', autoFocus, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
      {...props}
      className="p-2 border rounded"
    />
  );
};
