import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const List = new Schema(
  {
    id: { type: String, required: true },
    published: { type: Boolean },
    title: { type: String, required: true },
    board: { type: ObjectId, ref: 'Board', required: true },
    body: { type: String, required: true },
    creatorId: { type: String, required: true },
    createdAt: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
export default List
