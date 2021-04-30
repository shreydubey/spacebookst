process.env.NODE_ENV = 'test';

import { expect } from 'chai';
import request from 'supertest';

import app from '../../../backend/server.js';
import connectDB from '../../../backend/config/db.js';

describe('GET /api/products', () => {
    before((done) => {
      connectDB()
        .then(() => done())
        .catch((err) => done(err));
    })
  

    it('OK, getting products', (done) => {
      request(app).get('/api/products')
        .then((res) => {
            const body = res.body;
            expect(body).to.contain.property('products');
            done();
        })
        .catch((err) => done(err));
    });
    
    it('OK, getting product by ID', (done) => {
        request(app).get('/api/products/606ab43605b77607fdce66ed')
          .then((res) => {
              const body = res.body;
              expect(body).to.contain.property('description');
              done();
          })
          .catch((err) => done(err));
      });
    
  
    
  })
  