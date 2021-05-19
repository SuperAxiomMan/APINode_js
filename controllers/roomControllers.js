import RoomModel from "../models/roomModel.js";



// test

export const postTest = (req, res) => {
    //console.log(req)
    res.send(req.body);
};


// addRoom
export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body)
    await room.save()
    res.send(room)
}

// readAll

export const getAllRooms = async (req,res) => {
    const rooms = await RoomModel.find({})
    res.send(rooms);
  }   
  
  
// readOne

export const getSingleRoom = async (req,res) => {
    console.log(req.params.id)
    const singleRoom = await RoomModel.find({_id : req.params.id})
    res.send(singleRoom);
  } 


  // update

  export const updateSingleRoom = async (req,res) => {
    const singleRoom = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
    await singleRoom.save()
    res.send(singleRoom);
  } 

    // delete

    export const deleteSingleRoom = async (req,res) => {
        const singleRoom = await RoomModel.findByIdAndDelete(req.params.id)
        if(!singleRoom){
            res.status(404).send("Room not find")
        }
      } 
