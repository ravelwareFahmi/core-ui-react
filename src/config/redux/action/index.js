// handle async for action with redux trunk 
export const changeUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER',value: 'Yuda'})
    },2000)
}

// export const registerUserAPI = (data) => (dispatch) => {
//     dispatch({type: 'REGISTER_LOADING',value:true}) 
//     return (
//          firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
//          .then((res) => {
//             alert('data sukses di simpan')
//             dispatch({type: 'REGISTER_LOADING',value:false})
//          })
//         .catch(function(error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             dispatch({type: 'REGISTER_LOADING',value:false})
//         })
//     )
// }