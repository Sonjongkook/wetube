import express from "express";
import routes from "../routes";
import { videoDetail,  deleteVideo, PostUpload, getUpload, getEditVideo, postEditVideo } from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";


const videoRouter = express.Router();

//UPLOAD
videoRouter.get(routes.upload, onlyPrivate, getUpload)
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, PostUpload)

//Video detail
videoRouter.get(routes.videoDetail(), videoDetail)

//edit video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo)
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo)


videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo)

export default videoRouter;