const express = require('express')
const router = express.Router();

const{getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

/* router.route('/').get((req,res)=> {
    res.send(
        'all items'
    )
}) */
// instead of hardcoding
///api/v1/tasks get istegi ile getAll task , post istegi ile create task
router.route('/').get(getAllTasks).post(createTask)
///api/v1/tasks:id
// update de put yerine patch kullandim cunku put eskisi silinip yenisi yeniden olusturulurken patch de degistirilmek istenenler degisip digerleri sabit kaliyor
// Bunu put kullanarak yapsaydik ve zorunlu olan completed parametresi ermedigimizde yeniden olusturudugu dusunulup false olucakti ama 
// patch de eski degeri true hala durucak 

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router 