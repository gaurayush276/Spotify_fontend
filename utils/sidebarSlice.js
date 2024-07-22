import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name : "sidebar" ,
    initialState : {
        isopen : true , 
    } ,
    reducer :{
        toggleStatus :(state)=>{
            state.isopen = ! state.isopen ;
        }
    }
})

export default sidebarSlice.reducer ;
export const {toggleStatus} =  sidebarSlice.action  ;