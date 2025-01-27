import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    'version': '0.0.0'
}

export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {}
})

export default applicationSlice.reducer;