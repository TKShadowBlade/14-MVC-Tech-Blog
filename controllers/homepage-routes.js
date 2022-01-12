const router = require('express').Router();
const {User, Comments, Posting} = require('../models');

router.get('/', async (req, res) => {
try{
    const dataPosting = await Posting.findAll({
        include: [User],
    });

    const newPosts = dataPosting.map((post) => post.get({plain: true}));
    res.render('all-posts', { posts });
}   catch(err) {
    res.status(500).json(err);
}
});

router.get('/post/:id', async(req, res) => {
    try {
        const dataPosting = await Posting.findByPk(req.param.id, {
            include: [
                User,
                {
                    model: Comments,
                    include: [User],
                },
            ]
        });
        if(dataPosting) {
            const post = dataPosting.get({ plain: true });
            res.render('single-post', { post });
        } else {
            res.status(404).end();
        }
    }   catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('register');
});

module.exports = router;