import { Schema, model } from "mongoose";

const tareaschema = new Schema({
    name: String,
    description: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('tarea', tareaschema);