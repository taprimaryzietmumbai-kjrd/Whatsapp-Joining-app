const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let confirmations = [
  {
    id: 1,
    customerName: 'Aisha Patel',
    phone: '+919876543210',
    service: 'Garden Cleaning',
    date: '2026-10-10',
    notes: 'Please confirm by 6 PM.',
    status: 'Pending',
    message: 'Hi Aisha Patel, this is a confirmation for your Garden Cleaning booking on 2026-10-10. Please reply YES to confirm. Thank you!'
  },
  {
    id: 2,
    customerName: 'Ravi Shah',
    phone: '+919912345678',
    service: 'AC Service',
    date: '2026-10-12',
    notes: 'Technician will arrive in the morning.',
    status: 'Confirmed',
    message: 'Hi Ravi Shah, your AC Service is confirmed for 2026-10-12. Please reply YES to confirm. Thank you!'
  }
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'WhatsApp confirmation API is running.' });
});

app.get('/api/confirmations', (req, res) => {
  res.json(confirmations);
});

app.post('/api/confirmations', (req, res) => {
  const { customerName, phone, service, date, notes } = req.body;

  if (!customerName || !phone || !service || !date) {
    return res.status(400).json({ message: 'customerName, phone, service, and date are required.' });
  }

  const newEntry = {
    id: Date.now(),
    customerName,
    phone,
    service,
    date,
    notes: notes || '',
    status: 'Pending',
    message: `Hi ${customerName}, this is a confirmation for your ${service} booking on ${date}. Please reply YES to confirm. Thank you!`
  };

  confirmations.unshift(newEntry);
  res.status(201).json(newEntry);
});

app.patch('/api/confirmations/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'status is required.' });
  }

  const item = confirmations.find((entry) => entry.id === Number(id));

  if (!item) {
    return res.status(404).json({ message: 'Confirmation not found.' });
  }

  item.status = status;
  res.json(item);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`WhatsApp confirmation app running on http://localhost:${PORT}`);
});
