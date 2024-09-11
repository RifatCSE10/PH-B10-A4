function sendNotification(email) {
    const receivedEmail = email;
    if(receivedEmail.includes('@')){
        const splitEmail = receivedEmail.split('@');
        const returnText = `${splitEmail[0]} sent you an email from ${splitEmail[1]}`;
    
        return returnText;
    }
    else{
        return 'Invalid Email';
    }
}

