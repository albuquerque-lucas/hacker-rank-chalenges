const birthdayCakeCandles = candles => {

    let highest = candles[0];
    let highestCount = 0;


    for(let i = 0; i < candles.length; i += 1){

        let count = 0;

        if(candles[i] > highest){
            highest = candles[i];
            count += 1;
            highestCount = count;

        } else if (candles[i] == highest){
            highestCount += 1;
        }

    }

    console.log(highestCount);


}

birthdayCakeCandles([4, 4, 1, 3, 5, 5, 5]);