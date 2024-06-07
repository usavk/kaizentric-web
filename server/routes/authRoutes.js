const express = require('express');
const router = express.Router();
const cors = require('cors')
const {test, registerUser, loginUser, dashboardDetails, videosUser, addVideos} = require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post("/register",registerUser)
router.post("/login", loginUser)
router.get('/users', dashboardDetails)
router.get('/videos', videosUser);
router.post('/Addvideos', addVideos);

module.exports = router