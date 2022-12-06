function plusMinus(arr) {
    
    const positiveArray = [];
    const negativeArray = [];
    const zeroArray = [];
    
    for(let i = 0; i < arr.length; i += 1){
        
        if(arr[i] < 0){
            negativeArray.push(arr[i]);
        } else if(arr[i] > 0){
            positiveArray.push(arr[i]);
        } else{
            zeroArray.push(arr[i]);
        }
        
    }

    const positiveRatio = (positiveArray.length / arr.length).toFixed(6);
    const negativeRatio = (negativeArray.length / arr.length).toFixed(6);
    const zeroRatio = (zeroArray.length / arr.length).toFixed(6);

    
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
    
}

let test = [1, 1, 0, -1, -1];

plusMinus(test);