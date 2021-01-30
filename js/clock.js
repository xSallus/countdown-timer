const Clock = {
    days: document.querySelector('.days'),
    hours: document.querySelector('.hrs'),
    minutes: document.querySelector('.mins'),
    seconds: document.querySelector('.secs'),
    initClock(time) {
        this.setClock(time)
    },
    setClock(time) {
        const cero = 0
        if (time<60) {
            this.days.innerText = this.formatTime(cero)
            this.hours.innerText = this.formatTime(cero)
            this.minutes.innerText = this.formatTime(cero)
            this.seconds.innerText = this.formatTime(time)
        }
        if (time>=60 && time<3600) {
            if (time%60==0) {
                this.days.innerText = this.formatTime(cero)
                this.hours.innerText = this.formatTime(cero)
                this.minutes.innerText = this.formatTime(time/60)
                this.seconds.innerText = this.formatTime(cero)
            } else {
                this.days.innerText = this.formatTime(cero)
                this.hours.innerText = this.formatTime(cero)
                this.minutes.innerText = this.formatTime(Math.floor(time/60))
                this.seconds.innerText = this.formatTime(time%60)
            }
        }
        if (time>=3600 && time<86400){
            if (time%3600==0) {
                this.days.innerText = this.formatTime(cero)
                this.hours.innerText = this.formatTime(Math.floor(time/3600))
                this.minutes.innerText = this.formatTime(cero)
                this.seconds.innerText = this.formatTime(cero)
            } else {
                this.days.innerText = this.formatTime(cero)
                this.hours.innerText = this.formatTime(Math.floor(time/3600))
                this.minutes.innerText = this.formatTime(Math.floor((time%3600)/60))
                this.seconds.innerText = this.formatTime(Math.floor((time%3600)%60))
            }
        }
        if (time>=86400) {
            if (time%86400==0) {
                this.days.innerText = this.formatTime(Math.floor(time/86400))
                this.hours.innerText = this.formatTime(cero)
                this.minutes.innerText = this.formatTime(cero)
                this.seconds.innerText = this.formatTime(cero)
            } else {
                this.days.innerText = this.formatTime(Math.floor(time/86400))
                this.hours.innerText = this.formatTime(Math.floor((time%86400)/3600))
                this.minutes.innerText = this.formatTime(Math.floor(((time%86400)%3600)/60))
                this.seconds.innerText = this.formatTime(((time%86400)%3600)%60)
            }
        }
    },
    stopClock() {
        this.resetClock()
    },
    resetClock() {
        this.days.innerText = '00'
        this.hours.innerText = '00'
        this.minutes.innerText = '00'
        this.seconds.innerText = '00'
    },
    formatTime(time) {
        let newTime = ""
        if(time<10) {
            newTime = `0${time}`
        } else {
            newTime = String(time)
        }
        return newTime
    }
}

export default Clock