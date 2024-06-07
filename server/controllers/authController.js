const Users = require('../models/user')
const Videos = require('../models/videos')
const {hashPassword, comparePassword} = require('../helpers/auth')

const test = (req, res) => {
    res.json('test is working')
}

//register endpoint
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //check if name is given
        if(!name)
        {
            return res.json({
                error: 'name is required'
            })
        };

        //check if password given
        if(!password || password.length < 6)
        {
            return res.json({
                error: 'password is required and should be more than 5 digits'
            })
        };
        //check email
        const exist = await Users.findOne({email});
        if(exist)
        {
            return res.json({
                error: 'email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password)
        const user = await Users.create({
            name, 
            email, 
            password: hashedPassword,
        })

        return res.json(user)

    }
    catch (error) {
        console.log(error)
    }
}

//login endpoint

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        //check if user exist
        const user = await Users.findOne({email});
        if(!user){
            return res.json({
                error: "No user found"
            })
        }

        //check password is match
        const match = await comparePassword(password, user.password)
        if(match){
            res.json("password match")
        }
        if(!match)
        {
            res.json("password do not match")
        }
    } catch (error) {
        console.log(error)
    }
}

//dashboard

const dashboardDetails = async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await Users.find();
  
      // Send the users as a response
      res.json(users);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  //add videos

  const addVideos = async (req, res) => {
    try {
        const {topic, description, VideoUrl, ThumbUrl} = req.body;

        //check if name is given
        if(! topic)
        {
            return res.json({
                error: 'topic is required'
            })
        };

        if(! description)
        {
            return res.json({
                error: 'description is required'
            })
        };
        
        if(! VideoUrl)
        {
            return res.json({
                error: 'VideoUrl is required'
            })
        };
        if(!ThumbUrl)
        {
            return res.json({
                error: 'ThumbUrl is required'
            })
        };
        const videoss = await Videos.create({
            topic, 
            description, 
            VideoUrl, 
            ThumbUrl
        })

        return res.json(videoss)

    }
    catch (error) {
        console.log(error)
    }
}

  //videos

  const videosUser = async (req, res) => {
    try {
      // Fetch all users from the database
      const videos = await Videos.find();
  
      // Send the users as a response
      res.json(videos);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }



module.exports = {
    test,
    registerUser,
    loginUser,
    dashboardDetails,
    videosUser,
    addVideos,

}