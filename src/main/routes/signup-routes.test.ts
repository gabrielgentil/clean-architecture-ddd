import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Signup routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Gabriel',
        email: 'gabriel.gentil@teste.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
