const {listarBlogServis}= require("../service/blogService")
let listarBlogs = async(req, res,)=> {
    try{
     let respuesta =  await listarBlogServis();
     res.json(respuesta);
    }catch(e){
        console.log(e)
    }
}

module.exports = {
    listarBlogs
}