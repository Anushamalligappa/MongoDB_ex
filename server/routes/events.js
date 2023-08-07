const express=require('express');
const router=express.Router();
const{
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    joinEvent,
    deleteEvent,
}=require("../controllers/events");

router.post('/',createEvent)
router.get('/',getAllEvents)
router.get('/:id',getEventById)
router.put('/:id',updateEvent)
router.patch('/:id/join',joinEvent)
router.delete('/:id',deleteEvent)

module.exports=router;