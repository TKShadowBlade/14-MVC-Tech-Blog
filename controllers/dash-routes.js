const router = require('express').Router();
const { Posting } = require('../models/Posting');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dataPost = await Posting.findAll({
            where: {
                userId: req.session.userId,
            },
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('admin-posts', {
            layout: 'dash',
            posts,
        });
    } catch(err) {
        res.redirect('login');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dash',
    });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Posting.findByPk(req.params.id);

        if(postData) {
            const post = postData.get({plain: true});

            res.render('edit', {
                layout: 'dash',
                post,
            });
        } else {
            res.status(404).end();
        }
    }   catch(err) {
        res.redirect('login');
    }
});

module.exports = router;