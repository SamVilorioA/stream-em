let express = require('express');
let app = express();
var fs = require('fs');
app.get('/', (req, res)=>{
    res.json('esta pagina funciona');
})
app.get('/stream', (req, res) =>{
    const path = 'C:\\Users\\samue\\Desktop\\Cursos\\Udemy - JavaScript 2020 Curso desde Principiante hasta Profesional\\1. Introducción al curso de JavaScript\\1. Bienvenida al curso.mp4';
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range)
    {
        const parts = range.replace(/bytes=/, "").split('-');
        const start = parseInt(parts[0],10);
        const end = parts[1] ? parseInt(parts[1],10) : fileSize-1;
        const chunkSize = (end-start)+1;
        const file = fs.createReadStream(path, {start, end});
        const head = {
            'Content-Range':`bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length':chunkSize,
            'Content-Type':'video/mp4'
        }
        res.writeHead(206, head);
        file.pipe(res);
    }
    else{
        const head = {
            'Content-Length':fileSize,
            'Content-Type':'video/mp4'
        }
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
});
app.listen(3000, ()=>{
    console.log('Esperando data en el puerto 3000');
})
