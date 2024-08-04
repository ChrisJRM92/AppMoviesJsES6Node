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

const getOne = catchError(async(req, res) => {
  const { id } = req.params;
  const data = await Actors.findByPk(id);
  if(!data) return res.sendStatus(404);
  return res.json(data);
});

const update = catchError(async(req, res) => {
  const { id } = req.params;
  const data = await Actors.update(
      req.body,
      { where: {id}, returning: true }
  );
  if(data[0] === 0) return res.sendStatus(404);
  return res.json(data[1][0]);
});

const remove = catchError(async(req, res)=>{
  const {id} = req.params;
  const data = await Actors.destroy({where: {id: id}})
  if (!data) {
    return res.status(404);
  }else{res.sendStatus(204)};
});

export{
  getAll,
  create,
  getOne,
  update,
  remove
} 