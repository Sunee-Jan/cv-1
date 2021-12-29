console.log('hi')
let html = document.querySelector("#html")
let style=document.querySelector('style')

let string=`
/*大家好,我叫小丸子
*是一名前端新人,
接下来我将展现一下我的前端功底,做一个太极八卦图
首先我要准备一个.box的div
**/
.box{
    border: 1px solid red;    
    width: 200px;
    height: 200px;
}
/*现在需要把这个.box变为圆形*/
.box {
    border-radius: 50%;
    border:none;
}
/*八卦是阴阳形成的，
*左右两极一黑一白
*/
.box {
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 50%,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 1) 100%
      );
}
/*在太极盘上再添加两个黑白相反的神秘小球*/
.box::before {
    width: 100px;
    height: 100px;
    background:black;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 1) 75%,
      rgba(255, 255, 255, 1) 75%,
      rgba(255, 255, 255, 1) 100%
    );}
.box::after {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 100px;
        background:white;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 1) 25%,
          rgba(255, 255, 255, 1) 25%,
          rgba(255, 255, 255, 1) 75%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 100%
        );}
/*最后，让他转起来*/
.box{
    animation: run 1s linear infinite;
}
`
let n=0
//以下解决了字符串内容逐个打印，使JS无法一次性识别需要换行的标签，产生先将一半标签打印为字符串的bug
let string2=""
let string3=""
let step=()=>{
    setTimeout(()=>{
        if(n<string.length){
            if(string[n]==="\n"){
                string2+= "<br>"
            }else if(string[n]===" "){
                string2+= "&nbsp;"
            }else{
                string2+= string[n]
            }
          window.scrollTo(0,9999)
          html.scrollTo(0,9999)
          string3=string.substring(0,n)
            html.innerHTML=string2
            style.innerHTML=string3
            n++
            step()
        }
    },30)
}
step();
