
const express = require('express');
const mysql = require('mysql2/promise');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

// Configuración de CORS

const corsOptions = {
    origin: ['http://localhost:3000', 'http://direccion_ip:3000'],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

// Crear servidor HTTP y configurar socket.io
const server = http.createServer(app);
const io = socketIo(server, {cors: corsOptions});


io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
});

// conexión a la base de datos
const pool = mysql.createPool({
    host: 'tu_host',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'nombre_base_datos'
});


// Endpoint para recibir datos
app.post('/datos', async (req, res) => {
    const { pm10, pm2_5, co, decibeles, distancia} = req.body;
    try {
        const results = await pool.query('INSERT INTO new_datos_sensores_web (pm10, pm2_5, co, decibeles, distancia) VALUES (?, ?, ?, ?)', [pm10 || null, pm2_5 || null, co || null, decibeles || null]);
        const nuevoDato = { id: results[0].insertId, pm10, pm2_5, co, decibeles, distancia};
        io.emit('nuevosDatos', nuevoDato); // Emite a todos los clientes conectados
        res.send(nuevoDato);
    } catch (error) {
        console.error("Error al insertar la base de datos", error);
        res.status(500).send('Error al insertar los datos');
    }
});

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Iniciar el servidor en el puerto especificado
server.listen(port, () => {
    console.log(`Servidor escuchando en http://direccion_ip:${port}`);
});