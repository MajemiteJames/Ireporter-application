import moment from 'moment';
import uuid from 'uuid';

class Reflection {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.reflections = [];
  }
  /**
   * * @returns {object} reflection object */

  create(data) {
    const newReflection = {
      id: uuid.v4(),
      firstname: data.firstname || '',
      lastname: data.lastname || '',
      othernames: data.othernames || '',
      email: data.email || '',
      phoneNumber: data.phoneNumber || '',
      username: data.username || '',
      createdDate: moment.now(),
    };
    this.reflections.push(newReflection);
    return newReflection;
  }
  /**
   * * @param {uuid} id
   * @returns {object} reflection object
   */

  findOne(id) {
    return this.reflections.find(reflect => reflect.id === id);
  }
  /**
   * @returns {object} returns all reflections
   */

  findAll() {
    return this.reflections;
  }
  /**
   * * @param {uuid} id
   * @param {object} data */

  update(id, data) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections[index].firstname = data.firstname || reflection.firstname;
    this.reflections[index].lastname = data.lastname || reflection.lastname;
    this.reflections[index].othernames = data.othernames || reflection.othernames;
    this.reflections[index].email = data.email || reflection.email;
    this.reflections[index].phoneNumber = data.phoneNumber || reflection.phoneNumber;
    this.reflections[index].username = data.username || reflection.username;
    this.reflections[index].modifiedDate = moment.now();
    return this.reflections[index];
  }
  /**
   * * @param */

  delete(id) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections.splice(index, 1);
    return {};
  }
}
export default new Reflection();