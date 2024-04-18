const BlogPost = require('../models/BlogPost');

module.exports = (req, res) => {
    BlogPost
        .deleteOne({ _id: req.body.postId })
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('An error occurred while deleting the post.');
        });
};