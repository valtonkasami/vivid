'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface MenuState {
    showMenu: boolean,
    showIcon: boolean,
    background: string
}

const initialState: MenuState = {
    showMenu: false,
    showIcon: true,
    background: 'aslide'
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setShow: (state) => {
            state.showMenu = !state.showMenu
            state.showIcon = !state.showIcon
        },
        setBackground: (state, action) => {
            if (action.payload ===1) {
                state.background = 'aslide darkerscreen'
            } else {
                state.background= 'aslide'
            }
        },
    }
})

export const { setShow, setBackground } = menuSlice.actions

export default menuSlice.reducer;