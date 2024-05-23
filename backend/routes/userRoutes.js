import express from 'express' ;
import {createUser,loginUser,logoutCurrentUser,getAllUsers,getCurrentUserProfile,updateCurrentUserProfile,deleteUserById
    ,getUserById,updateUserById} from '../controllers/userController.js'
import { authenticate,authorizeAdmin} from '../middlewares/authMiddleware.js';
const router =express.Router()

router.route("/").post(createUser)
router.route("/userlist").get(authenticate,authorizeAdmin,getAllUsers);//if it is admin and authenificated (means did the login ) so getAllusers
router.post('/auth', loginUser);
router.post('/logout',logoutCurrentUser);
//router.route("/auth").post(loginUser);

router.route('/profile')
.get(authenticate, getCurrentUserProfile)
.put(authenticate,updateCurrentUserProfile)

router.route('/:id').delete(authenticate,authorizeAdmin,deleteUserById)
.get(authenticate,authorizeAdmin,getUserById)
.put(authenticate,authorizeAdmin,updateUserById)

export default router ;