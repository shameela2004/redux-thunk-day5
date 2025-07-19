const initialstate={loading:false,data:null,error:null}
function UserReducer(state=initialstate,action){
      switch(action.type){
        case "loading":
            return {loading:true,data:null,error:null}
        case "success":
            return {loading:false,data:action.payload,error:null} 
        case "error":
            return {loading:false,data:null,error:action.payload}    
        default:
            return state    
      }
}
export default UserReducer