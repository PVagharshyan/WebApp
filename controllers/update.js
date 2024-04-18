module.exports = (req, res) => {
    if (req.session.userId) {
        console.log("updater id", req.params.id);
        const pid = req.params.id;
        res.render('update', { pid });
    } else {
        res.redirect('/auth/login');
    }
};