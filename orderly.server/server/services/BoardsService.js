import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BoardsService {
  async getAll(query = {}) {
    return await dbContext.Board.find(query)
  }

  async getOne(id) {
    const boardFound = await dbContext.Board.findById(id)
    if (!boardFound) {
      throw new BadRequest('No Board was found with that id')
    }
    return boardFound
  }

  async create(body) {
    return await dbContext.Board.create(body)
  }

  async edit(update) {
    const updated = await dbContext.Board.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest('invalid id')
    }
    return updated
  }

  async delete(id) {
    const board = await dbContext.Board.findByIdAndDelete(id)
    if (!board) {
      throw new BadRequest('No Board exists with that id')
    }
    return 'Destroyed the Board'
  }
}

export const boardsService = new BoardsService()
