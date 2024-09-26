
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Sergey')
})

app.use((req, res) => {
  res.status(404).send('not found');
});

app.listen(3000, () => console.log('running in http://localhost:3000/...'))

