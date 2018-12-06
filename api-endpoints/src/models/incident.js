import moment from 'moment';
import uuid from 'uuid';

class Incident {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.incidents = [];
  }

  /**
   * * @returns {object} incident object */

  create(data) {
    const newIncident = {
      id: uuid.v4(),
      createdDate: moment.now(),
      type: data.type || '',
      location: data.location || '',
      image: data.image || '',
      comment: data.comment || '',
    };
    this.incidents.push(newIncident);
    return newIncident;
  }

  /**
   * * @param {uuid} id
   * @returns {object} incident object */

  findOne(id) {
    return this.incidents.find(reflect => reflect.id === id);
  }
  /**
   * @returns {object} returns all incidents */

  findAll() {
    return this.incidents;
  }
  /**
   * * @param {uuid} id
   * @param {object} data */

  update(id, data) {
    const incident = this.findOne(id);
    const index = this.incidents.indexOf(incident);
    this.incidents[index].type = data.type || incident.type;
    this.incidents[index].location = data.location || incident.location;
    this.incidents[index].comment = data.comment || incident.comment;
    this.incidents[index].image = data.image || incident.image;
    this.incidents[index].modifiedDate = moment.now();
    return this.incidents[index];
  }
  /**
   * * @param {uuid} id */

  delete(id) {
    const incident = this.findOne(id);
    const index = this.incidents.indexOf(incident);
    this.incidents.splice(index, 1);
    return {};
  }
}

export default new Incident();
