

function checkDigitsInName(name) {
   let input_name = name;
   if(typeof(input_name)==='string'){
       if(input_name.match(/\d/)){
           return true;
       }
       else{
           return false;
       }
   }
   else{
       return 'Invalid Input';
   }
}