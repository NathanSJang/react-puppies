const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/api/puppies');

router.get('/', puppiesCtrl.getAll);
router.post('/', puppiesCtrl.create);
router.get('/:id', puppiesCtrl.show);
router.put('/:id', puppiesCtrl.update);

module.exports = router;