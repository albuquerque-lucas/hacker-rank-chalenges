const miniMaxSum = array => {

    array.sort();

    let biggestSum = 0;
    let smallestSum = 0;

    for(let i = 1; i < array.length; i += 1){
        biggestSum += array[i];
    }

    for(let i = 0; i < array.length - 1; i +=1){
        smallestSum += array[i];
    }

    console.log(`${smallestSum} ${biggestSum}`);

}


const testArray = [7, 69, 2, 221, 8974];


miniMaxSum(testArray);