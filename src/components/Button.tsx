import React from 'react'

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: (event: React.MouseEvent) => void;
}

const Button = ({children, onClick}: Props) => {
  return (
    <button onClick={onClick}>{children}</button>  
  )
}

export default Button
