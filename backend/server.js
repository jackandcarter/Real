const express = require('express');
const app = express();
app.use(express.json());

let plots = [];

app.get('/api/plots', (req, res) => {
  res.json(plots);
});

app.post('/api/plots', (req, res) => {
  const plot = req.body;
  plots.push(plot);
  res.status(201).json(plot);
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
