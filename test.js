const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database');

BlogPost
    .create({
        title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
        body: `If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:`
    })
    .then(blogpost => {
        console.log('Blog post created:', blogpost);
    })
    .catch(error => {
        console.error('Error creating blog post:', error);
    });

BlogPost
    .find({ title: 'The Mythbuster’s Guide to Saving Money on Energy Bills' })
    .then(blogposts => {
        console.log('Blog posts found:', blogposts);
    })
    .catch(error => {
        console.error('Error finding blog posts:', error);
    });

BlogPost
    .findById('661f6e6cf13a924ea886e311')
    .then(blogpost => {
        console.log('Blog post found with id: ', blogpost)
    })
    .catch(error => {
        console.log('Error: ', error)
    });
