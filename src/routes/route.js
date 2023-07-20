const { Router } = require('express');
const router = Router();

const userCtrl = require('../controllers/user.controller')


/*const noteCtrl = require('../controllers/note.controller')

router.get('/', noteCtrl.getNotes);

router.get('/:id', noteCtrl.getNote);

router.post('/', noteCtrl.createNote);
*/


router.get('/', userCtrl.getUsers);

router.get('/:id', userCtrl.getUser);

router.put('/:id', userCtrl.updateUser);

router.post('/', userCtrl.createUser);

router.delete('/:id', userCtrl.deleteUser);


module.exports = router;