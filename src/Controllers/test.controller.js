const { testService } = require("../service/test.service");

const test = async(req,res) => {
callServices(testService, req, res)

}
let callServices = async(method, req, res) => {
    try{
        let result = await method(req);
        res.status(200).json({
            code:result.code,
            status:result.status,
            data:result.data,
            message:result.message
        });
    }
    catch{
        res.status(401).json({
            message:"error"
        });
    }
};



module.exports= {
    test,
    callServices
}

