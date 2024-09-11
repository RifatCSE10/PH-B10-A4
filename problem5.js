function  waitingTime(waitingTimes  , serialNumber) {
    let totalTime,i,averageTime,sum=0;
    if(Array.isArray(waitingTimes) && typeof(serialNumber)==='number'){
        let counter=0;
        for(i=0;i<waitingTimes.length;i++){
            sum = sum + waitingTimes[i];
            counter++;
        }
        averageTime = sum/counter;
        totalTime = Math.round(averageTime)*(serialNumber-(waitingTimes.length)-1);
        return totalTime;
    }
    else{
        return 'Invalid Input';
    }
}