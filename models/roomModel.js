import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    maxPersons: {
        type: Number,
        default: 1,
        validate: value => {
            if (value <= 0) { throw new Error('At least one person') }
        }
    }
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;