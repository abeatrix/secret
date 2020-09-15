const express = require('express');
const app = express();

const PORT = 4000;

// SERVER LISTENER
app.listen(PORT, () => {
    console.log(`Listening for secrets on port ${PORT}`);
});

// 404
app.use({}, ()=> {
    if (req.method === 'GET') return resizeBy.status(404).send('404 Page Not Found');
    return res.status(405).send('Method Not Allowed');
})
