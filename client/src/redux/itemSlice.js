// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// export const getItemsAsync = createAsyncThunk('sellerItems/addItemAsync',
// async ()=> {
//     const response = await fetch('http://localhost:8080/good/selleritems')

//     if (response.ok) {
//         const sellerItems = await response.json()
//         return {sellerItems}
//     }
// })

// export const addItemAsync = createAsyncThunk('sellerItems/addTodoAsync',

//     async (payload) => {
//         const response = await fetch('http://localhost:8080/good/selleritems', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ title: payload.title, shortDescription:payload.shortDescription, articul:payload.articul })
//         })

//         if (response.ok) {
//             const sellerItem = await response.json()
//             return { sellerItem }
//         }
//     })



// const itemSlice = createSlice({
    
//     name: 'sellerItems',
//     initialState:[        
//     {id: 1, title: 'todo2', shortDescription: 'blablabla', articul: 123},
//     {id: 2, title: 'todo2', shortDescription: 'blablabla', articul: 123 },
//     ],


//     reducers: {
//         [getItemsAsync.pending]: (state, action) => {
//             console.log('fetching data---->>>')
//         },

//         [getItemsAsync.fulfilled]: (state, action) => {
//             console.log('fetched data success---->>>')
//             return action.payload.sellerItems
//         },

//         [addItemAsync.fulfilled]: (state, action) => {
//             state.push(action.payload.sellerItem)

//         },
//     }
// })


// export default itemSlice.reducer