document.querySelector('form').onsubmit = function () {
    document.querySelector('#data').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
    const time = document.querySelector('#time').value;
    const weight = document.querySelector('#weight').valueAsNumber;
    const hour = (parseInt(time[0])*10 + parseInt(time[1]))- 12;
    const minutes = parseInt(time[3])*10 + parseInt(time[4]);
    if(minutes+30 >= 60){
        document.querySelector('#drink_hour').innerHTML = hour + 2;
        if((minutes + 30) - 60 < 10){
            document.querySelector('#drink_minutes').innerHTML = '0'+String((minutes + 30) - 60);
            document.querySelector('#drink_next').innerHTML = String(hour + 8) +':'+'0'+String((minutes + 30) - 60);
        }
        else {
            document.querySelector('#drink_minutes').innerHTML = (minutes + 30) - 60;
            document.querySelector('#drink_next').innerHTML = String(hour + 8) +':'+ String((minutes + 30) - 60);
        }
    }
    else{
        document.querySelector('#drink_hour').innerHTML = hour + 1;
        document.querySelector('#drink_minutes').innerHTML = minutes + 30;
        document.querySelector('#drink_next').innerHTML = String(hour + 8) +':'+String((minutes + 30));
    }
    document.querySelector('#intake').innerHTML = String(8 * weight) + ' mg';
    document.querySelector('#back').onclick = function() {
        document.querySelector('#data').style.display = 'block';
        document.querySelector('#results').style.display = 'none';
    }
    return false
};