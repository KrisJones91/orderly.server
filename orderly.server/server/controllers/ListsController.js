import { listsService } from '../services/ListsService'
import BaseController from '../utils/BaseController'

export class ListsController extends BaseController {
  constructor() {
    super('api/lists')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .get('/:id/tasks', this.getTasks)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getTasks(req, res, next) {
    try {
      const data = await listsService.find({ list: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await listsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      res.send(await listsService.find(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = await listsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await listsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await listsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
