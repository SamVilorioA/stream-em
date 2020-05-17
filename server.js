const child_process = require('child_process');
const express = require('express');
const http = require('http');
const webSocketServer = require('ws').Server;
const app = express();
const server = http.createServer(app).listen(3000, ()=>{
    console.log('Esperando...');
});
app.use(express.static(__dirname + '/'));
const wss = new webSocketServer({
    server:server
});
wss.on('connection', (ws, req) =>{
    /*ws.on('message', (msg) =>{
        console.log('DATA', msg);
    });*/
    let match;
    if (!(match = req.url.match(/^\/rtmp\/(.*)$/)) ){
        ws.terminate();
        return;
    }
    const rtmpUrl = decodeURIComponent(match[1]);
    console.log('Target RTMP URL:', rtmpUrl);
    const ffmpeg = child_process.spawn('ffmpeg', [
        '-f', 'lavfi', '-i', 'anullsrc',
        '-i', '-', '-shortest', '-vcodec','aac', '-f', 'flv', rtmpUrl
    ]);
    ffmpeg.stdin.on('error', (e)=>{
        console.log('FFmpeg STDIN Error', e);
    });
    ffmpeg.stderr.on('data', (data) =>{
        console.log('FFmpeg STDERR', data.toString());
    });

    ws.on('message', (msg)=>{
        console.log('DATA', msg);
        ffmpeg.stdin.write(msg);
    });
    ws.on('close', (e) =>{
        ffmpeg.kill('SIGINT');
    })
});

