adapterFullScreen(0);
$(window).load(function(){
    setTimeout(function() {
        $("#lp").fadeOut(800);
        setTimeout(function(){
            $(".game_home").addClass('at');
        },900)
    }, 800)
    function audioAutoPlay(id) {
        var audio = document.getElementById(id);
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function() {
            audio.play();
        }, false);
        // $('body')[0].addEventListener('touchstart',function(){
        //      $("#audio1")[0].play();
        // },false); 
    }
    audioAutoPlay('audiobg');
});
//页面适配
function adapterFullScreen(type){
    if( type == 0){
        var h = $('body').height();
        if( h < 1008 ){
            var s = h/1008;
            $("._qp").css({ '-webkit-transform': 'scale('+ s +')' , 'transform': 'scale('+ s +')' });
        } 
    }  
}



