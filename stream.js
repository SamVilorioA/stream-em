(function(){
    const buttonPlay = document.getElementById("startb");
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        video = document.getElementById('video'),
        vendorUrl = window.URL || window.webkitURL;

        navigator.getMedia =    navigator.getUserMedia || navigator.webkitGetUserMedia
                                navigator.mozGetUserMedia || navigator.msGetUserMedia;
        
    navigator.getMedia({
            video:true,
            audio:false
        },
        function(stream){
            video.srcObject = stream;
            //video.src = vendorUrl.createObjectURL(stream);
            video.play();
        },
        function(error){
            //para cuando ocurra un error
        });
    
})();