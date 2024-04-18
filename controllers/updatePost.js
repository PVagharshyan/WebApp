const BlogPost = require('../models/BlogPost.js');
const path = require('path');

module.exports = (req, res) => {
    const postId = req.params.postId;
    let image = req.files.image;

    if (image) {
        image.mv(path.resolve(__dirname, '..', 'dist/img', image.name), (error) => {
            if (error) {
                console.log("Error: ", error);
                return res.status(500).send('Error uploading image.');
            }
            updateBlogPost(postId, req.body.title, req.body.body, '/img/' + image.name, req.body.validation == 'on', res);
        });
    } else {
        updateBlogPost(postId, req.body.title, req.body.body, null, req.body.validation, res);
    }
};

function updateBlogPost(postId, title, body, imagePath, validation, res) {
    BlogPost.findByIdAndUpdate(postId, {
            title: title,
            body: body,
            image: imagePath,
            validated: validation
        })
        .then(blogpost => {
            if (!blogpost) {
                return res.status(404).send('Blog post not found.');
            }
            res.render('index');
        })
        .catch(error => {
            console.error('Error updating blog post:', error);
            res.status(500).send('An error occurred while updating the blog post.');
        });
}
