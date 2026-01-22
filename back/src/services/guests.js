const { getTable } = require('../apiClient');

// GET /guests
exports.listGuests = async (_req, res) => {
    const guests = await getTable('guests');
    res.json(guests);
};
