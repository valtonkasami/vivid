'use client';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/GlobalRedux/store';

interface BlurProps {
    children: ReactNode;
}

const Blur: React.FC<BlurProps> = ({ children }) => {
  const blur = useSelector((state: RootState) => state.navbar.blur)
 
  return (
    <div className={blur}>
        {children}
    </div>
  )
}

export default Blur