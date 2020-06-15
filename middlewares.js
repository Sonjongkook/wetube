import multer from "multer"
import routes from "./routes";

const multerVideo = multer({dest: "uploads/videos/"})
const multerAvatar = multer({dest: "uploads/avatars/"})

export const localsMiddleware = (req, res, next) => { //make local var to globla var(can use this on view engine)
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next(); // to connect with next middleware, router
};

export const onlyPublic = (req, res, next)=> {
    if(req.user){
        res.redirect(routes.home)
    } else{
        next()
    }
}

export const onlyPrivate = (req, res, next) => {
    if(req.user){
        next()
    } else{
        res.redirect(routes.home)
    }

}



export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");