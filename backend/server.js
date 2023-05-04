const express = require('express');
const path = require('path');
const userRouter = require('./database/userRouter');

const app = express();
app.use(express.json());

//serve main page of application
app.get('/', (req, res) => {console.log("here1")
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/user', userRouter);


if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')));
}
app.get('/*', (req, res) => {
  res.redirect('/')
})


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('listening to 3000'));
