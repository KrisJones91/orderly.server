import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Board = new Schema(
  {
    title: { type: String, required: true },
    creatorId: { type: String, required: true },
    createdAt: { type: String, required: false }
  }
)
export default Board
