// Local Storage Function

export const fetchData = (key)=>{
    return JSON.parse(localStorage.getItem(key));
}


// delete the data from local storage

export const deleteItem = (key)=>{
    return localStorage.removeItem(key);
}