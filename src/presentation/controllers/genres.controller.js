import Genre from "../../data/models/genre.model.js";
import catchError from "../../utils/catchError.js";

const getAll = catchError(async(req, res)=>{
  const data = await Genre.findAll();
  return res.json(data);
});;

const create = catchError(async(req, res)=>{
  const data = await Genre.create(req.body);
  return res.json(data);
});

export{
  getAll,
  create
} 