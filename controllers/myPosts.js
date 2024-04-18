const BlogPost = require('../models/BlogPost.js')

module.exports = (req, res) => {
    console.log(req.session)
    BlogPost
        .find({userid : req.session.userId})
        .populate('userid')
        .then(blogposts => {
            res.render('myPosts', {
                blogposts
            })
        })
        .catch(error => {
            console.error('Error finding blog posts:', error);
        });
}