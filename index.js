const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware đọc json
app.use(express.json());

// Import router
const userRouter = require('./api/users');
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello Express + Vercel! Server running on port: 3000 ');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
