module.exports = (error,req,res,next)=>{
res.status(500).send({
    'error' : 500,
    'error massege' : `Server error :${error.message}`,
})
}