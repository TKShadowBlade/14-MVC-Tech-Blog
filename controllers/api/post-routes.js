const router = require('express').Router();
const { Posting } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const body = req.body;

    try {
        const newPosting = await Posting.create({ ...body, userId: req.session.userId });
        res.json(newPosting);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async(req, res) => {
    try{
        const [rows] = await Posting.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if(rows > 0) {
            res.status(200).end();
        } else{
            res.status(404).end();
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try{
        const[rows] = Posting.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(rows > 0) {
            res.status(200).end();
        } else{
            res.status(404).end();
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;