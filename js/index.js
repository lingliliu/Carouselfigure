var index=0,
num=7,
itemwidth=750;
var timer=undefined;
timerFun();
function move(dic){
    clearTimeout(timer);
    $('.img-box').stop(false,true);
    if(dic=='left'){
        index--;
        if(index<0){
            $('.img-box').css({left:num*-itemwidth})
            index=6;
            
        }
        
    }else if(dic=='right'){
        index++;
        if(index>num){
            $('.img-box').css({left:0})
            index=1;
        }
       
    }
    $('.img-box').animate({
        left:index*-itemwidth,
    },function(){
        timerFun();
    })
    active($('.item').eq(index==7 ? 0:index));
}
function timerFun(){
    timer=setTimeout(function(){
        move('right')
    } ,3000)
}
function active(dom){
    $('.active').removeClass('active');
    dom.addClass('active');
    
}
$('.btn-left').click(function(){
    move('left');   
})
$('.btn-right').click(function(){
    move('right');   
})
$('.item').click(function(){
    index=$(this).index();
    
    move('');
    
})
