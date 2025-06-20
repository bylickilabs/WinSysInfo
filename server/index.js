
const express = require('express');
const cors = require('cors');
const si = require('systeminformation');

const app = express();
app.use(cors());

app.get('/sysinfo', async (req, res) => {
  const cpu = await si.cpu();
  const mem = await si.mem();
  const os = await si.osInfo();
  const time = await si.time();

  res.json({ cpu, mem, os, time });
});

app.listen(5000, () => console.log('Server läuft auf Port 5000'));
