const express = require('express');
const cors = require('cors');
const app = express();

// CORS ko enable karna zaroori hai taakay Firebase is se baat kar sakay
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Welcome! Backend Railway par sahi chal raha hai.",
    status: "Success"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});