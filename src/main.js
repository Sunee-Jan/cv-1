console.log('hi')
let demo = document.querySelector("#demo")
let string=`
大家好,
我是一名前端新人,`
let n=0
//以下方法会导致浏览器没次打出的字符串会先出现'<',然后才转换为标签的bug，所以舍弃
// demo.innerHTML = string.substring(0,n);
// string=string.replaceAll("\n","<br/>")
// let step=()=> {
//             setTimeout(() => {
//             if(n<string.length){
//                 n=n+1
//                 demo.innerHTML = string.substring(0,n)
//                 step()
//             }        
//         }, 500);
// }
//以下解决了字符串内容逐个打印，使JS无法一次性识别需要换行的标签，产生先将一半标签打印为字符串的bug
let string2=""
let step=()=>{
    setTimeout(()=>{
        if(n<string.length){
            if(string[n]==="\n"){
                string2+="<br>"
            }else{
                string2+=string[n]
            }
            demo.innerHTML=string2
            n++
            step()
        }
    },500)
}
step();