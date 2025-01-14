import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if(!token) return next(createError(401, "You are not authenticated!"));

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if(err) {
                return next(createError(401, "Invalid token!"));
            }else{
                req.user = user;
                next()
            }
        })
    } catch (error) {
        next(createError());
    }
}


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else {
           next(createError(403, "You are not authorized!")); 
        }
    })
}


export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin){
            next()
        }else {
           next(createError(403, "You are not admin!")); 
        }
    })
}