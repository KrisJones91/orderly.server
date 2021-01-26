import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const Comment = new Schema(
  {
    id: { type: String, required: true },
    task: { type: ObjectId, ref: 'Task', required: true },
    body: { type: String, required: true },
    creatorId: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
export default Comment
