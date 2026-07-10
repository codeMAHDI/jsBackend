export const validuser=(username, password)=>{
    if (username === "mahdi" && password === "1234"){
        return true;
    }
    return false;
};

export const generateSession=(username)=>{
    return {user:username, loginAt: new Date()};
};