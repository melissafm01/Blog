const { Blog } = require('../models')

let  listarBlogServis= async () => {
    try{
    let resp =  await Blog.findAll();
    return resp;

    } catch (e) {

       
    }

    };
    
    module.exports = { listarBlogServis};


      
