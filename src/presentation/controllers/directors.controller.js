import Directors from "../../data/models/directors.model.js";
import catchError from "../../utils/catchError.js";

const getAll = catchError(async(req, res)=>{
  const data = await Directors.findAll();
  return res.json(data);
});;

const create = catchError(async(req, res)=>{
  const data = await Directors.create(req.body);
  return res.json(data);
});

export{
  getAll,
  create
} 