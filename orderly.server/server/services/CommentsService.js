import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async find(query = {}) {
    return await dbContext.Comment.find(query)
  }

  async getOne(id) {
    const commentFound = await dbContext.Comment.findById(id)
    if (!commentFound) {
      throw new BadRequest('No Comment was found with that id')
    }
    return commentFound
  }

  async create(body) {
    return await dbContext.Comment.create(body)
  }

  async edit(update) {
    const updated = await dbContext.Comment.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest('invalid id')
    }
    return updated
  }

  async delete(id) {
    const comment = await dbContext.Comment.findByIdAndDelete(id)
    if (!comment) {
      throw new BadRequest('No Comment exists with that id')
    }
    return 'Comment deleted'
  }
}

export const commentsService = new CommentsService()
