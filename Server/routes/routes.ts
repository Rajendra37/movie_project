import express from "express";
import controller from '../controller/controller'
const auth=require('../middleware/auth')

const router = express.Router();

router.get('/',async(req,res)=>{res.sendFile('../../client/build')})
router.post('/register',controller.adduser)
router.post('/login',controller.loginUser)
router.post('/mymovies/:title',controller.getmovie)
router.get('/getmyMovies',controller.getAllMovies)
router.post('/MovieByImdbIDId/:id',controller.getMovieByImdbIDId)
router.get('/movieById/:id',controller.getMovieById)
router.get('/logout',controller.logout )
router.get('/verify',controller.userVerify)

export default router;