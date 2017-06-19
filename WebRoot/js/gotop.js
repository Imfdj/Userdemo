/**
 * Created by andy on 2015/11/19.
 */
function $(id) {return document.getElementById(id);}
function show(obj) { obj.style.display = "block";}
function hide(obj) { obj.style.display = "none";}
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
        // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}


//		goTop.js
            var goTop = $("-gotop");
            window.onscroll = function() {
                scroll().top > 400 ? show(goTop) : hide(goTop);  // 如果大于0 就显示 否则隐藏
                leader = scroll().top;  // 把 卷去的头部 给  起始位置
                console.log(scroll().top);
                console.log("zhe"+ window.scrollY);
            }
            var leader = 0,target = 0,timer = null;
         // leader 起始位置  target  目标位置
            goTop.onclick = function() {
                target = 0;  //  点击完毕之后 奔向0 去的  不写也可以
                timer = setInterval(function() {
                    leader = leader + parseInt((target - leader ) / 10);
                    console.log(leader);
                    window.scrollTo(0,leader);  // 去往页面中的某个位置
                    if(leader < (target+10) )
                    {
                        clearInterval(timer);
                    }
                },20);

            }