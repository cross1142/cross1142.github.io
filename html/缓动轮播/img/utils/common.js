function move(el,target,step){
    clearInterval(el.timer);
    el.timer = setInterval(function(){
            var currentPosition = el.offsetLeft;
            var targetPosition = currentPosition + step;
            step = target > currentPosition?Math.abs(step):-1*Math.abs(step); 
            el.style.left = targetPosition + 'px';
            var cha = targetPosition - currentPosition;
            if(cha < step){
                el.style.left = target +'px';
                clearInterval(el.timer);
            }
    },17);
}