const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3001/api/main', // DB API
    timeout: 2000
});

async function getTable(tableName) {
    const res = await api.get(`/${tableName}`);
    return res.data;
}

module.exports = {
    getTable
};
