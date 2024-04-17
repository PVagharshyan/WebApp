const BlogPost = require('../models/BlogPost.js')

module.exports = (req, res) => {
    console.log(req.session)
    BlogPost
        .find({})
        .then(blogposts => {
            res.render('index', {
                blogposts
            })
        })
        .catch(error => {
            console.error('Error finding blog posts:', error);
        });
}