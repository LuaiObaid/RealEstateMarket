import Listing from "../models/listing.model.js"
import { errorHandler } from "../utilis/error.js"
export const createListing = async(req, res, next)=>{
    try {
        const listing = await Listing.create(req.body)
        return res.status(201).json(listing)
    } catch (error) {
        next(error)
    }
}

export const deleteListing = async (req, res, next)=>{
    const listing = await Listing.findById(req.params.id)

    if(!listing){
        return next(errorHandler(404, 'Listing not found!'))
    }
    if(req.user.id !== listing.userRef){
         return next(errorHandler(401, 'ypu can only delete your lsiting'))
    }
    try {
        await Listing.findByIdAndDelete(req.params.id)
        res.status(200).json('listing has been deleted')
    } catch (error) {
        next(error)
    }
}
export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only update your own listings!'));
    }
  
    try {
      const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        req.body,
        // to get the new one not the old one
        { new: true }
      );
      res.status(200).json(updatedListing);
    } catch (error) {
      next(error);
    }
  };


  export const getListing = async (req, res, next) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  };