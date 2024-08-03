import Movies from "../../data/models/movies.model.js";
import catchError from "../../utils/catchError.js";

const getAll = catchError(async(req, res)=>{
  const data = await Movies.findAll();
  return res.json(data);
});

const create = catchError(async(req, res)=>{
  const data = await Movies.create(req.body);
  return res.json(data);
})

export{
  getAll,
  create
} 
