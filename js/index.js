import clock from './clock.js' 

function start(x) {
    let interval
    let t = x

    /*if(t>0) {
        interval = setInterval(() => {
            clock.initClock(t);
        }, 1000)
        t--
    } else {
        clearInterval(interval)
    }*/

    interval = setInterval(() => {
        clock.initClock(t--);
        if(t<0) {
            clearInterval(interval)
        }
    }, 1000)

}

start(5)