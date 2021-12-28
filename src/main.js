console.log('hi')
let demo = document.querySelector("#demo")
let string=`大家好`
let n=0
demo.innerHTML = string.substring(0,n);
let step=()=> {
        setTimeout(() => {
            if(n<string.length){
                n=n+1
                demo.innerHTML = string.substring(0,n)
                step()
            }        
        }, 1000);
}
step();