const BlogPost = require('../models/BlogPost.js')

module.exports = (req, res) => {
    console.log(req.params)
    BlogPost
        .findById(req.params.id)
        .then(blogpost => {
            res.render('post', {
                blogpost
            })
        })
        .catch(error => {
            console.log(error)
        })
}