
import chai from 'chai';
import request from 'supertest';
import app from '../api-endpoints/server';

const { expect } = chai;

/* describe('iReporter list API Integration Tests', () => {
  describe('#GET /api/v1/reflections', () => { 
    it('should get all users', (done) => { 
      request(app)
        .get('/api/v1/reflections')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.be.empty;
          done();
        });
    });
  });
});

describe('## Create user ', function() { 
  it('should create a user', function(done) { 
    request(app) .post('/api/v1/reflections') .send(task) .end(function(err, res) { 
      expect(res.statusCode).to.equal(200); 
      expect(res.body.name).to.equal('integration test'); 
      task = res.body; 
      done(); 
    }); 
  }); 
}); 
}); */

describe('API Tests', () => { 
  const Reflection = { 
    name: 'integration test', 
  };
  describe('iReporter list API Integration Tests', () => {
    describe('#GET /api/v1/reflections', () => { 
      it('should get all users', (done) => { 
        request(app)
          .get('/api/v1/reflections')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            // expect(res.body).to.be.an({'array'});
            expect(res.body).to.be.empty;
            done();
          });
      });
    });
  });

  describe('## Create user ', function() { 
    it('should create a user', function(done) { 
      request(app) .post('/api/v1/reflections') .send(reflection) .end(function(err, res) { 
        expect(res.statusCode).to.equal(200); 
        expect(res.body.name).to.equal('integration test'); 
        // user = res.body; 
        done(); 
      }); 
    }); 
  }); 

  describe('Get a task by id', function() { 
    it('should get a task', function(done) { 
      request(app) .get('/api/v1/reflections/' +  Reflection.getOne) .end(function(err, res) { 
        expect(res.statusCode).to.equal(200); 
        expect(res.body.name).to.equal('integration test'); 
        done(); 
      }); 
    }); 
  })
});
