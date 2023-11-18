



let xball = 3
let yball = 3
let dball = 5
let velballx = 6
let velbally = 6

let last= new Date().getTime()
requestAnimationFrame(movball)

// variavel window
let winwidth = 600
let winheight = 400


function window(){
    rect(0,0,winwidth,winheight)


}

function drawball(){
    circle(xball,yball,dball)

}

function movball(){
    let now = new Date().getTime()
    let run = now - last

    if (xball > winwidth || xball < 0) {
        velballx *= -1;
    }
    if (yball > winheight || yball < 0) {
        velbally *= -1;
    }
}