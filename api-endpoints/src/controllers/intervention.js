import incidentModel from '../models/incident';

const Intervention = {
  /**
       * * @param {object} req * @param {object} res
       * @returns {object} redFlag object */
  create(req, res) {
    if (!req.body.type && !req.body.location && !req.body.status && !req.body.comment) {
      return res.status(400).json({ status: 400, message:'All fields are required'});
    }
    const intervention = incidentModel.create(req.body);
    return res.status(201).send(intervention);
  },
  /**
     * * @param {object} req * @param {object} res * @returns {object} redFlag array
     */

  getAll(req, res) {
    const interventions = incidentModel.findAll();
    return res.status(200).json({ status: 200, interventions });
  },
  /**
     * * @param {object} req * @param {object} res
     * @returns {object} reflection object
     */

  getOne(req, res) {
    const intervention = incidentModel.findOne(req.params.id);
    if (!intervention) {
      return res.status(404).send({'message': 'redflag not found'});
    }
    return res.status(200).send(intervention);
  },
  /**
         * * @param {object} req * @param {object} res * @returns {object} * updated reflection
         */

  update(req, res) {
    const intervention = incidentModel.findOne(req.params.id);
    if (!intervention) {
      return res.status(404).send({'message': 'redFlag not found'});
    }
    const updatedIntervention = incidentModel.update(req.params.id, req.body);
    return res.status(200).send(updatedIntervention);
  },
  /**
     * * @param {object} req * @param {object} res * @returns {void} return statuc code 204 */  

  delete(req, res) {
    const intervention = incidentModel.findOne(req.params.id);
    if (!intervention) {
      return res.status(404).send({'message': 'redFlag not found'});
    }
    const ref = incidentModel.delete(req.params.id);
    return res.status(204).send(ref);
  },
};
export default Intervention;