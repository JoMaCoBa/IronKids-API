const express = require('express');

const router = express.Router();

// Mostrar Perfil
router.get('/:username', (req, res) => {
    const { username } = req.params;
    res.json({username});
});

module.exports = router;