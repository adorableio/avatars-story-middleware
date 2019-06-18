const express = require('express');
const avatarsMiddleware = require('adorable-avatars');

const app = express();
app.use('/', avatarsMiddleware);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Running avatars middleware..."));
