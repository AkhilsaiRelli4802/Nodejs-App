const userServices = async(req,res) =>{
    const userData = {
        userName:"@@@",
        id:"1",
        Age:22
    }
    return {
        code: "200",
        status: "Success",
        data: userData,
        message: "User details"
    };
};

module.exports ={userServices} ;