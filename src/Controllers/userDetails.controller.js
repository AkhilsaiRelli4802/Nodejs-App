const { userServices } = require("../service/user.service")
const { callServices } = require("./test.controller")

const user = async(req,res) =>{
callServices(userServices, req, res)
}

module.exports = {
    user
}

