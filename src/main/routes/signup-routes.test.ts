import request from 'supertest'
import app from '../config/app'

describe('Signup routes', () => {
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Gabriel',
        email: 'gabriel.gentil@teste.com',
        password: '123',
        passwordConfirmtion: '123'
      })
      .expect(200)
  })
})
