/* eslint-disable no-console */
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      error = ''
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
      console.error(error)
    }
  }
}

export const accountService = new AccountService()
