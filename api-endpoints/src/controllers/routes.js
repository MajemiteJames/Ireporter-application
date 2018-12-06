import routesModel from '../models/routes';
const Reflection = {
  /**
     * * @param {object} req * @param {object} res
     * @returns {object} reflection object */

  create(req, res) {
    if (!req.body.firstname && !req.body.lastname && !req.body.othernames && !req.body.email && !req.body.phoneNumber && !req.body.username) {
      return res.status(400).send({'message':'All fields are required'});
    }
    const reflection = routesModel.create(req.body);
    return res.status(201).send(reflection);
  },
  /**
     * * @param {object} req * @param {object} res * @returns {object} reflections array
     */

  getAll(req, res) {
    const reflections = routesModel.findAll();
    return res.status(200).send('james');
  },
  /**
     * * @param {object} req * @param {object} res
     * @returns {object} reflection object
     */

  getOne(req, res) {
    const reflection = routesModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    return res.status(200).send(reflection);
  },
  /**
     * * @param {object} req * @param {object} res * @returns {object} updated reflection
     */

  update(req, res) {
    const reflection = routesModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    const updatedReflection = routesModel.update(req.params.id, req.body);
    return res.status(200).send(updatedReflection);
  },
  /**
     * * @param {object} req * @param {object} res * @returns {void} return statuc code 204 */

  delete(req, res) {
    const reflection = routesModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    const ref = routesModel.delete(req.params.id);
    return res.status(204).send(ref);
  },
};

export default Reflection;