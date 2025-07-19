function FetchUserData(userId){
    return function(dispatch){
        dispatch({type:"loading"})
        fetch(`https://dummyjson.com/users/${userId}`)
        .then(res=>res.json())
        .then(data=>{dispatch({type:"success",payload:data})})
        .catch(er=>dispatch({type:"error",payload:er}))
    }
}
export default FetchUserData