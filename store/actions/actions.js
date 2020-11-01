import ActionTypes from '../constant/constant';

export function changeName (){
    const names = {
        name: "Adeel",
        fatherName: "khalid",

    }
    return dispatch => dispatch({type:ActionTypes.Add_Data, payload: names})
}

