const express = require('express')();
const bodyParser = require('body-parser');
const data = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
  }
];
const cors = require('cors');
express.use(cors());
express.use(bodyParser.json());
express.get('/', (req, res) => res.json(data));
express.post('/', (req, res) => {
  req.body['id'] = Math.floor(Math.random() * 9) + 3;
  data.push(req.body);
  res.json(data);
});
function findPosition (id, data) {
  const project = data.filter(item => {
    return item.id === id;
  });
  const index = data.indexOf(project[0]);
  return index;
}
express.put('/:id', (req, res) => {
  const index = findPosition(req.params.id, data);
  data[index] = req.body;
  res.json(data);
});
express.delete('/:id', (req, res) => {
  const index = findPosition(req.params.id, data);
  data.splice(index, 1);
  res.json(data);
});
express.listen(3000, () => console.log('Listening@port3000'));
