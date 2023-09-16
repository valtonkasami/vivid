'use client';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/GlobalRedux/store';
import { setBackground } from '@/app/GlobalRedux/Features/bookingMenu/menuSlice';
import { setShow } from '@/app/GlobalRedux/Features/bookingMenu/menuSlice';

const Darken3 = () => {
    const dispatch = useDispatch()
  const dark3 = useSelector((state: RootState) => state.menu.background)
  
  return (
    <div>
        <div onClick={() => { dispatch(setBackground(0)); dispatch(setShow()) }} className={dark3}></div>
    </div>
  )
}

export default Darken3