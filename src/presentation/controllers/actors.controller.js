import Actors from "../../data/models/actors.model.js";
import catchError from "../../utils/catchError.js";

const getAll = catchError(async(req, res)=>{
  const data = await Actors.findAll();
  return res.json(data);
});;

const create = catchError(async(req, res)=>{
  const data = await Actors.create(req.body);
  return res.json(data);
});

export{
  getAll,
  create
} 