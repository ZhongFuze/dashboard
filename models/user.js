import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/, 
                "Username invalid, it should contain 8-20 alphanumeric letters!"]
    },
    image: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema);

export default User;