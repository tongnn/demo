window.onload= function () {
//    //点击换页
    var outbox=document.getElementsByClassName("others_out")[0];
    var ul=outbox.firstElementChild;
    //console.log(ul)
    var arrowL=document.getElementsByClassName("arrow_l")[0];
    var arrowR=document.getElementsByClassName("arrow_r")[0];
//console.log(arrowL)
//console.log(arrowR)
    arrowL.onclick=function () {
        if(ul.style.left<0){
            animate(ul,960);
        }
    }
    arrowR.onclick=function () {
        if(ul.style.left>=0){
            animate(ul,-960);
        }
    }

    function animate(ele,target) {
        //使用定时器之前，清除定时器；保证一个盒子一个定时器；多出触动事件也必须只有一个定时器;
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            //BUG1: 目标位置如果在前面步长为正数，在后面步长为负数;
            var step = target>ele.offsetLeft?10:-10;
            //赋值(走过了，可以在退回来)
            ele.style.left = ele.offsetLeft + step + "px";
            //判断：到达目标位置就清除定时器；
            if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
                ele.style.left = target+"px";
                clearInterval(ele.timer);
            }
        },13);
    }



    //.report_s 翻页效果
    //var obox=document.getElementsByClassName("report_s")[0];
    //console.log(obox)
    //var oUl=obox.firstElementChild;
    //var oLi=oUl.children;
    //console.log(oUl);
    //console.log(oLi);
    //var arrowLf=document.getElementsByClassName("arrow_l")[1];
    //var arrowRf=document.getElementsByClassName("arrow_r")[1];
    //console.log(arrowLf);
    //console.log(arrowRf);
    ////var newLi = oLi[0].cloneNode(true);//深层赋值
    ////oUl.appendChild(newLi);
    //
    //console.log(oUl);
    //var num=0;
    //console.log(oLi[0].offsetLeft);
    //console.log(oLi[1].offsetLeft);
    //console.log(oLi[2].offsetLeft);
    //console.log(oLi[3].offsetLeft);
    //for(var i=0;i<oLi.length;i++){
    //    oLi[i].offsetLeft
    //}
    //arrowLf.onclick= function () {
    //    if (oUl.offsetLeft >= 0) {
    //        num ++;
    //        oUl.style.transform = "translateX(" + num * oLi[0].offsetWidth + "px)";
    //    }
    //    return num;
    //}
    //arrowRf.onclick = function () {
    //    if (oUl.offsetLeft < 0) {
    //        num --;
    //        oUl.style.transform = "translateX(" + (-num * oLi[0].offsetWidth) + "px)";
    //    }
    //    return num;
    //}



//xiaohuojian
    var thr=document.getElementsByClassName("thr")[0];
    var span=thr.firstElementChild;
    console.log(thr);
    console.log(span);
    window.onscroll= function () {
        if(scrollTop()>800){
            thr.style.display="block";
        }else{
            thr.style.display="none";
        }
    }

    var target= 0,leader= 0,timer=null;
    span.onclick= function () {
        timer=setInterval(function () {
            leader=scrollTop();
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            if(target===leader){
                clearInterval(timer);
            }
        },30)
    }
    function scrollTop(){
        return window.pageYOffset || document.documentElement.scrollTop;
    }
}
/**
 * Created by LXF on 2017/9/8.
 */
