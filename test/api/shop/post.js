process.env.NODE_ENV = 'test';

import { expect } from 'chai';
import request from 'supertest';

import app from '../../../backend/server.js';
import connectDB from '../../../backend/config/db.js';

describe('POST /api/users/login', () => {
  before((done) => {
    connectDB()
      .then(() => done())
      .catch((err) => done(err));
  })


  it('Login Positive Test Case', (done) => {
    request(app).post('/api/users/login')
      .send({ email: 'shreydubey15@gmail.com', password: "123456" })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('name');
        expect(body).to.contain.property('email');
        expect(body).to.contain.property('isAdmin');
        expect(body).to.contain.property('token');
        done();
      })
      .catch((err) => done(err));
  });

  it('Login Negative Test Case', (done) => {
    request(app).post('/api/users/login')
      .send({ email: 'parth.ajmera@iiitb.org', password: "12346" })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('message');
        done();
        
      })
      .catch((err) => done(err));
  });

})


