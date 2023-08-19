const redis = require('redis');
const redisURL = 'redis://localhost:6379';
const client = redis.createClient(redisURL);
const util = require('util');

const getValue = util.promisify(client.get);

const setValue = util.promisify(client.set);
const deleteValue = util.promisify(client.del);


module.exports = {getValue, setValue, deleteValue};

