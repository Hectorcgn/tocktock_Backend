import express from 'express'
import {
  deleteFavoritePost,
  getFavoritePosts,
  getImageUrl,
  getOnePost,
  handleLike,
  newPost,
  deletePost,
  setFavoritePosts,
  upload,
} from '../controller/postController.js'
import { addComment, deleteComment, addReply, getComment, handleCommentLike } from '../controller/commentsController.js'
import { checkToken } from '../middleware/authMiddleware.js'

export const router = new express.Router()

router.post('/upload', upload)

router.put('/upload', newPost)

router.delete('/deletepost/:id', checkToken, deletePost)

router.get('/imageurl/:imageId', getImageUrl)

router.post('/likes', handleLike)

router.get('/postdetail/:id', getOnePost)

router.post('/comments/addcomment/:postid', checkToken, addComment)

router.delete('/comments/deletecomment/:postId/:commentId', checkToken, deleteComment)

router.post('/comments/like', handleCommentLike)

router.post('/comment/reply', addReply)

router.post('/comment/getcomment', getComment)

router.get('/getfavposts', checkToken, getFavoritePosts)

router.get('/setfavposts/:postId', checkToken, setFavoritePosts)

router.get('/deletefav/:postId', checkToken, deleteFavoritePost)
