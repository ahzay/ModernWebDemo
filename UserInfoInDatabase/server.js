const express = require('express');
const path = require('path');
const userRoutes = require('./routes/users');
const staticRoutes = require('./routes/static');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.use('/users', userRoutes);
app.use('/', staticRoutes)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
