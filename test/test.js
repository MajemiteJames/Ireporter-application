
import chai from 'chai';
import request from 'supertest';
import app from '../api-endpoints/server';

const { expect } = chai;

describe('API Tests', () => { 
  app.object = {};
  app.object.user = [{ 
    id: '',
    firstname: '',
    lastname: '',
    othernames: '',
    email: '',
    phoneNumber: '',
    username: '',
    is_done: true,
  }, { 
    id: '3',
    firstname: '',
    lastname: 'okoro',
    othernames: 'majemite',
    email: 'majemiteokoro@gmailcom',
    phoneNumber: '08182587058',
    username: 'Majemite',
    is_done: true,
  }];
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

  describe('## Create use ', () => { 
    it('should create a user', (done) => { 
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
           //expect(res.statusCode).to.equal(200); 
          // expect(res.body.name).to.equal('integration test'); 
          done(); 
        }); 
    }); 
  });

  // Testing how to delete a task expecting status 201 of success
  describe('delete an ID', () => {
    it('removes a user', (done) => {
      var task = app.db('tasks').first();
        request.put('/api/v1/reflections/:id')
            .expect(201)
            .end(function(err, res) {
                done(err);
            });
    });
});
  

});
