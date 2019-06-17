const express = require('express');
const avatarsMiddleware = require('adorable-avatars');

const app = express();
app.get('/healthz', (req, res) => {
  res.send("OK");
});
app.use('/api', avatarsMiddleware);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Running..."));