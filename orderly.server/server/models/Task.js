import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const Task = new Schema(
  {
    id: { type: String, required: true },
    list: { type: ObjectId, ref: 'List', required: true },
    body: { type: String, required: true },
    creatorId: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
export default Task
