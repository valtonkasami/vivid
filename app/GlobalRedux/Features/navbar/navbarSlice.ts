'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface NavbarState {
    slide: string,
    blur: string,
    darkBackground: string
}

const initialState: NavbarState = {
    slide: 'aslide text-[#111111] fixed z-40 top-0 right-[-330px] h-full w-[330px] bg-[#333333] lg:hidden',
    blur: 'aslide',
    darkBackground: 'aslide'
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        slide: (state, action) => {
            if (action.payload === 1) {
                state.slide = 'aslide text-[white] fixed z-40 top-0 right-[0px] h-full w-[330px] bg-[#333333] lg:hidden'
                state.blur = 'blur aslide'
                state.darkBackground = 'darkerscreen aslide'
            } else {
                state.slide = 'aslide text-[#111111] fixed z-40 top-0 right-[-330px] h-full w-[330px] bg-[#333333] lg:hidden'
                state.blur = 'aslide'
                state.darkBackground = 'aslide'
            }
        },
    }
})

export const { slide } = navbarSlice.actions

export default navbarSlice.reducer;