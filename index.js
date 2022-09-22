const submit = document.querySelector('#submit');
submit.disabled = true;

document.querySelector('#time').onchange = function () {
    document.querySelector('#weight').onkeyup = function () {
        submit.disabled = false;
    }
}

document.querySelector('form').onsubmit = function () {


    document.querySelector('#data').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
    const time = document.querySelector('#time').value;
    const weight = document.querySelector('#weight').valueAsNumber;
    const minutes = parseInt(time[3]) * 10 + parseInt(time[4]);
    let meridian = 'PM';
    function calc_time() {
        let hour = ((parseInt(time[0]) * 10) + parseInt(time[1]));
        if (hour > 12) {
            meridian = 'PM';
            return hour;
        }
        else if (hour < 12) {
            meridian = 'AM';
            if (hour == 0) {
                return hour = 12;
            }
            else {
                return hour
            }
        }
    }

    function drink_time() {
        // best time to drink is after 2 hour of waking up from sleep
        return String((calc_time() + 2)%12) + ':' + String(minutes) + meridian;
    }

    function next_drink() {
        let next_time = (calc_time() + 7)%12;
        return String(next_time) + ':' + String(minutes) + ' ' +meridian;
    }

    document.querySelector('#drink_time').innerHTML = drink_time();
    document.querySelector('#drink_next').innerHTML = next_drink();
    document.querySelector('#intake').innerHTML = String(8 * weight) + ' mg';

    document.querySelector('#back').onclick = function () {
        document.querySelector('#data').style.display = 'block';
        document.querySelector('#results').style.display = 'none';
    }

    return false
};