var data = {
    cart: [],
    favourite: [],
    loading: false,
    permissions:[],
    keyword:""
};
if(localStorage.getItem("state")){
    data = JSON.parse(localStorage.getItem("state"));
} 
export const STATE = data;