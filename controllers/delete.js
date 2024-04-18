const Users = require('../models/User')
const BlogPost = require('../models/BlogPost')

module.exports = (req, res) => {
    Users
        .deleteOne({ _id: global.loggedIn })
        .then(() => {
            req.session
                .destroy(() => {
                    res.redirect('/');
                    BlogPost
                        .deleteMany({ userid: global.loggedIn })
                        .catch(error => {
                            console.log(error);
                            res.status(500).send('An error occurred while deleting the posts.');
                        });
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('An error occurred while deleting the user.');
        });
};
