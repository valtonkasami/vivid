'use client';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/GlobalRedux/store';
import { blur2 } from '../app/GlobalRedux/Features/booking/bookingSlice'
import { setIsSubmited } from '../app/GlobalRedux/Features/booking/bookingSlice'

const Darken2 = () => {
    const dispatch = useDispatch()
  const dark2 = useSelector((state: RootState) => state.booking.darkBackground2)
  const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
    
  };
  return (
    <div>
        <div onClick={() => {dispatch(blur2(0)); enableBodyScroll(); dispatch(setIsSubmited())}} className={dark2}></div>
    </div>
  )
}

export default Darken2