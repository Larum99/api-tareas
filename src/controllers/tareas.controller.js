import Tarea from '../models/tareas'

export const createTarea = async (req, res) => {

    const { name, description } = req.body
    const newTarea = new Tarea({ name, description })
    const TareaSaved = await newTarea.save();
    res.status(201).json(TareaSaved)
}

export const getTarea = async (req, res) => {
    const Tareas = await Tarea.find();
    res.json(Tareas)
}

export const getTareaById = async (req, res) => {
    const tarea = await Tarea.findById(req.params.tareaId);
    res.status(200).json(tarea)
}

export const updateTareaById = async (req, res) => {
    const updatetarea = await Tarea.findByIdAndUpdate(req.params.tareaId, req.body, {
        new: true
    })
    res.status(200).json(updatetarea)
}

export const deleteTareaById = async (req, res) => {
    const {tareaId} = req.params;
    await Tarea.findByIdAndDelete(tareaId);
    res.status(204).json()
}