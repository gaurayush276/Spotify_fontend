 import { configureStore } from "@reduxjs/toolkit";
const appstore = configureStore( {
    reducers :{
        sidebar : sidebarSlice  
    }
})

export default appstore ; 