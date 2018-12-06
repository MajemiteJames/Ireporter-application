
import chai from 'chai';
import request from 'supertest';
import app from '../api-endpoints/server';

const { expect } = chai;

describe('iReporter list API Integration Tests', () => {
    describe('#GET /api/v1/reflections', () => { 
      it('should get all tasks', (done) => { 
      request(app)
        .get('/api/v1/reflections')
        .end((err, res) => {
            expect(res.statusCode).to.equal(200);
                // expect(res.body).to.be.an('array');
                // expect(res.body).to.be.empty;
                done();
            });
      });
    });
  });
