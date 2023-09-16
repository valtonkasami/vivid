'use client';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/GlobalRedux/store';
import { slide } from '../app/GlobalRedux/Features/navbar/navbarSlice'

const Darken = () => {
    const dispatch = useDispatch()
  const dark = useSelector((state: RootState) => state.navbar.darkBackground)
  const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
    
  };
  return (
    <div>
        <div onClick={() => {dispatch(slide(0)); enableBodyScroll()}} className={dark}></div>
    </div>
  )
}

export default Darken