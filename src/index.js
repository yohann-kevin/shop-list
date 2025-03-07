const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur Shop-List !' });
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });

module.exports = app; 