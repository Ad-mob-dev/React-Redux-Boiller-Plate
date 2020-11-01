import ActionTypes from '../constant/constant';
const INITIAL_STATE = {
    name : "Adeel",
    fatherName : "Khan",
}

export default (Data=INITIAL_STATE,action)=>{

switch(action.type){
    case ActionTypes.Add_Data:
        return ({
            ...Data,
            name : action.payload.name,
            fatherName :action.payload.fatherName,
            bad:action.payload.bad,
        })
     case ActionTypes.Remove_Data:
         return(
             {
                 ...Data,
                 new : action.payload.sad,
                 
                 
             }
         )   
    default:
        return Data;
}

}