function calculateFinalScore(obj) {
    let toatalMarks,aditionalMarks;
    if(typeof(obj)!=='object'){
        return 'Invalid Input';
    }
    else{
        if(obj.isFFamily){
            let aditionalMarks = 20;
            let toatalMarks = obj.testScore + obj.schoolGrade + aditionalMarks;
            if(toatalMarks>=80){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            toatalMarks = obj.testScore + obj.schoolGrade;
            if(toatalMarks>=80){
                return true;
            }
            else{
                return false;
            }
        }
    }
}


