const BlogPost = require('../models/BlogPost.js')
const path = require('path')

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'dist/img', image.name), (error) => {
        if (error) console.log("Error: ", error)
        BlogPost
            .create({
                title: req.body.title,
                body: req.body.body,
                image: '/img/' + image.name,
                userid: req.session.userId
            })
            .then(blogpost => {
                res.render('create');
            })
            .catch(error => {
                console.error('Error creating blog post:', error);
            });
    })
}