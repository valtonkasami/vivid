'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface BookingState {
    blur2: string,
    darkBackground2: string,
    isSubmited: boolean,
    isNotSubmited: boolean,
    inputs: { [key: string]: string }[];
    warning: boolean
}

const initialState: BookingState = {
    blur2: ' aslide',
    darkBackground2: 'aslide',
    isSubmited: false,
    isNotSubmited: true,
    inputs: [],
    warning: false
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        blur2: (state, action) => {
            if (action.payload === 1) {
                state.blur2 = 'blur aslide'
                state.darkBackground2 = 'darkerscreen aslide'
            } else {
                state.blur2 = 'aslide'
                state.darkBackground2 = 'aslide'
            }
        },
        setIsSubmited: (state) => {
            state.isSubmited = !state.isSubmited
            state.isNotSubmited = !state.isSubmited
        },
        setInputs: (state, action) => {
            
                state.inputs = []
                state.inputs.push(action.payload);
            
        },
        setWarning: (state) => {
            state.warning = !state.warning
        }
    }
})

export const { blur2, setIsSubmited, setInputs, setWarning } = bookingSlice.actions

export default bookingSlice.reducer;