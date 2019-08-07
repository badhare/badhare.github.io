new Vue({
    el: '#app',
    data: {
        day: 888,
        hour: 888,
        minute: 888,
        second: 8888,
        start: "2011-11-11 12:00:00",
        startMoment: null,
    },
    mounted: function () {
        this.startMoment = moment(this.start, "YYYY-MM-DD HH:mm:ss").utc().zone(+8);
        setInterval(this.timer, 1000);
    },
    methods: {
        timer: function () {
            var now = moment().utc().zone(+8);
            this.day = now.diff(this.startMoment, "days");
            this.hour = now.diff(this.startMoment, "hours") - this.day * 24;
            this.minute = now.diff(this.startMoment, "minutes") - (this.day * 24 + this.hour) * 60;
            this.second = now.diff(this.startMoment, "seconds") - this.day * 86400 - this.hour * 3600 - this.minute * 60;

            if (this.hour < 10) {
                this.hour = "0" + this.hour
            }
            if (this.minute < 10) {
                this.minute = "0" + this.minute
            }
            if (this.second < 10) {
                this.second = "0" + this.second
            }

            console.log(this.day, this.hour, this.minute, this.second)
        }
    }
});
