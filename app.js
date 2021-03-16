let para = document.getElementById("demo")
para.innerHTML = "Hello World"
para.style.color = "pink"

document.getElementById("wolfpic").style.width = '400px'
let wolf = "https://images.unsplash.com/photo-1588167056547-c183313da47c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1358&q=80"
let car = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"

const changePic = () => {
  if (document.getElementById("wolfpic").src === wolf) {
    document.getElementById("wolfpic").src = car
  } else if (document.getElementById("wolfpic").src === car) {
    document.getElementById("wolfpic").src = wolf
  }

}

document.getElementById("btn").addEventListener("click", changePic)

// debugger









// console.log(para)