const mongoose =  require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    topic : String,
    description : String,
    VideoUrl : String,
    ThumbUrl : String,
})

const UserModel = mongoose.model('videos', userSchema);

module.exports = UserModel;