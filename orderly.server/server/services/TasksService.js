import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TasksService {
  async find(query = {}) {
    return await dbContext.Task.find(query)
  }

  async getOne(id) {
    const taskFound = await dbContext.Task.findById(id)
    if (!taskFound) {
      throw new BadRequest('No Task was found with that id')
    }
    return taskFound
  }

  async create(body) {
    return await dbContext.Task.create(body)
  }

  async edit(update) {
    const updated = await dbContext.Task.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest('invalid id')
    }
    return updated
  }

  async delete(id) {
    const task = await dbContext.Task.findByIdAndDelete(id)
    if (!task) {
      throw new BadRequest('No Task exists with that id')
    }
    return 'Task has been deleted'
  }
}

export const tasksService = new TasksService()
