import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ListsService {
  async find(query = {}) {
    return await dbContext.List.find(query)
  }

  async getOne(id) {
    const listFound = await dbContext.List.findById(id)
    if (!listFound) {
      throw new BadRequest('No List was found with that id')
    }
    return listFound
  }

  async create(body) {
    return await dbContext.List.create(body)
  }

  async edit(update) {
    const updated = await dbContext.List.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest('invalid id')
    }
    return updated
  }

  async delete(id) {
    const list = await dbContext.List.findByIdAndDelete(id)
    if (!list) {
      throw new BadRequest('No List exists with that id')
    }
    return 'List Deleted'
  }
}

export const listsService = new ListsService()
