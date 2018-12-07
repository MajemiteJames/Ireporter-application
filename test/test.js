
import chai from 'chai';
import request from 'supertest';
import app from '../api-endpoints/server';

const { expect } = chai;

describe('API Tests', () => { 
  const user = { 
    firstname: '',
    lastname: 'okoro',
    othernames: 'majemite',
    email: 'majemiteokoro@gmailcom',
    phoneNumber: '08182587058',
    username: 'Majemite',
    is_done: true, 
  };
  describe('iReporter list API Integration Tests', () => {
    describe('#GET /api/v1/reflections', () => { 
      it('should get all users', (done) => { 
        request(app)
          .get('/api/v1/reflections')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            // expect(res.body).to.be.an({'array'});
            done();
          });
      });
    });
  });

  describe('## Create task ', () => { 
    it('should create a task', (done) => { 
      request(app) 
        .post('/api/v1/reflections') 
        .send(user) .end((err, res) => { 
          expect(res.statusCode).to.equal(201); 
          // expect(res.body.name).to.equal('user'); 
          // user = res.body; 
          done(); 
        }); 
    }); 
  });

  describe('Get a user by id', () => { 
    it('should get a user', (done) => { 
      request(app) 
        .get('/api/v1/reflections/:id') 
        .end((err, res) => { 
          // expect(res.statusCode).to.equal(200); 
          // expect(res.body.name).to.equal('integration test'); 
          done(); 
        }); 
    }); 
  });

});
