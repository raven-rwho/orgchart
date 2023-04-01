import React from 'react';

interface Props {
    children: React.ReactNode;
  }

const Card = ({ children }: Props ) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {children}
    </div>
  );
};

export default Card;