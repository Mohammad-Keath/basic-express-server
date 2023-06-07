module.exports = (req,res,next)=>{
    if ( req.query.name == null){
        req.query.name.map(()=>{
        })
    } else if ( req.query.name == ""){
        req.query.name.map(()=>{
        })
    }
    next()
}