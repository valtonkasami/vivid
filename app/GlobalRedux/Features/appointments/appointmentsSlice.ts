'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface AppointmentsState {
    appointments: { [key: string]: string }[];
    counter: boolean,
}

const initialState: AppointmentsState = {
    appointments: [],
    counter: false,
}

export const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.appointments = [...state.appointments, ...action.payload];
            state.counter = true
        },
        setDefault: (state) => {
            state.appointments = []
            state.counter = false
        }
    }
})

export const { setMenu, setDefault } = appointmentsSlice.actions

export default appointmentsSlice.reducer;