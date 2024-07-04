const express = require('express');
const mysql = require('mysql2/promise');
const exceljs = require('exceljs');
const cors = require('cors');

const app = express();
const port2 = 8081; 

// Configuración de CORS
app.use(cors({
    origin: ['http://localhost:3000', 'direccion_ip:3000'],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
}));

app.use(express.json());

// Crear conexión a la base de datos
const pool = mysql.createPool({
    host: 'tu_host',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'nombre_base_datos'
});

app.get('/descargarExcel', async (req, res) => {
    let workbook = new exceljs.Workbook();
    let worksheet = workbook.addWorksheet('Datos');

    // Agregar cabeceras de columna
    worksheet.columns = [
        { header: 'PM10', key: 'pm10', width: 10 },
        { header: 'PM2.5', key: 'pm2_5', width: 10 },
        { header: 'CO', key: 'co', width: 10 },
        { header: 'Decibeles', key: 'decibeles', width: 10 },
        { header: 'Timestamp', key: 'timestamp', width: 20 }
    ];

    // Consultar datos y agregarlos al worksheet
    try {
        const [rows] = await pool.query('SELECT * FROM new_datos_sensores_web');
        worksheet.addRows(rows);

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');

        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error("Error al consultar los datos", error);
        res.status(500).send('Error al consultar los datos');
    }
});

// Iniciar el servidor en el puerto especificado
app.listen(port2, () => {
    console.log(`Servidor de descarga de Excel escuchando en "direccion_ip":${port2}`);
});