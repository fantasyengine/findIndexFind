function findUserByUsername(arr, key){
    return arr.find(function(val){
        return val.key === key;
    })
}
function removeUser(arr, username, str){
    let foundIndex = arr.findIndex(function(val){
        return user.username === username;
    })
    if (foundIndex === -1) return;

    return arr.splice(foundIndex,1)[0];
}