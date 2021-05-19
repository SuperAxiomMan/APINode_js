import express from 'express';
import { postTest, addRoom, getAllRooms, getSingleRoom, updateSingleRoom, deleteSingleRoom } from '../controllers/roomControllers.js'
import { catchErrors } from './../helpers.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello !")
});


router.get('/test', postTest)

router.post('/add-room', catchErrors(addRoom))

router.get('/get-rooms', catchErrors(getAllRooms))

router.get('/get-single-room/:id', catchErrors(getSingleRoom))

router.patch('/get-single-room/:id', catchErrors(updateSingleRoom))

router.delete('/get-single-room/:id', catchErrors(deleteSingleRoom))

export default router;