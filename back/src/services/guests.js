const { getTable } = require('../apiClient');

// GET /guests/list
exports.listGuests = async (_req, res) => {
    const guests = await getTable('guests');
    res.json(guests);
};
