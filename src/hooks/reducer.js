export const ACTION = {
    UPDATE_CART: "UPDATE_CART",
    UPDATE_FAVOURITE:"UPDATE_FAVOURITE",
    LOADING:"LOADING",
    HIDE_LOADING: "HIDE_LOADING",
    SEARCH:"SEARCH",
    UPDATE_KEYWORD:"UPDATE_KEYWORD"
}
const update_local_storage = (state)=>{
    localStorage.setItem("state",JSON.stringify(state));
    return state;
}
const reducer = (state,action)=>{
    // quy ước rằng giá trị truyền lên gồm 2 phần: type và payload
    switch(action.type){
        case ACTION.UPDATE_CART: return update_local_storage({...state,cart:action.payload});
        case ACTION.LOADING: return update_local_storage({...state,loading: true});
        case ACTION.HIDE_LOADING: return update_local_storage({...state,loading:false});
    }
}
export default reducer;