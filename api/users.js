let users = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Lan" }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      const newUser = JSON.parse(body);
      newUser.id = users.length + 1;
      users.push(newUser);
      res.status(201).json(newUser);
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
