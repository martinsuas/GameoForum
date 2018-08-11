
export function getDateTime(timestamp) {
    let date = getDate(timestamp);
    let time = new Date(timestamp * 1000);

    let hour = ("0" + time.getHours()).substr(-2);
    let min = ("0" + time.getMinutes()).substr(-2);
    let sec = ("0" + time.getSeconds()).substr(-2);

    return date + " at " + hour + ":" + min + ":" + sec;
}

export function getDate(timestamp) {
    let time = new Date(timestamp * 1000);
    let month = ("0" + (time.getMonth() + 1)).substr(-2);
    let day = ("0" + time.getDay()).substr(-2);
    let year = time.getFullYear();
    return month + "/" + day + "/" + year;
}