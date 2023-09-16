'use client';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/GlobalRedux/store';

interface BlurProps {
    children: ReactNode;
}

const Blur2: React.FC<BlurProps> = ({ children }) => {
  const blur2 = useSelector((state: RootState) => state.booking.blur2)
 
  return (
    <div className={blur2}>
        {children}
    </div>
  )
}

export default Blur2