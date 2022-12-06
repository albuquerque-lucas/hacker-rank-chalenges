const timeConvertion = timeString => {

    const splitedTimeString = timeString.split('');
    const referenceItem = timeString[timeString.length - 2];
    const hourCase = [];
    const minutesCase = [];
    const secondsCase = [];

    hourCase.push(splitedTimeString[0], splitedTimeString[1]);
    let numberHour = parseInt(hourCase.join(''));
    minutesCase.push(splitedTimeString[3], splitedTimeString[4]);
    secondsCase.push(splitedTimeString[6], splitedTimeString[7]);

    if(referenceItem == "A"){
        if(numberHour > 12){
            numberHour -= 12;
        }


    }


    console.log(numberHour);



}


timeConvertion('13:01:00PM');