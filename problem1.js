function calculateTax(income, expenses) {
    if((income<0||expenses<0) || (income<expenses))
    {
        return "Invalid Input";
    }
    else{
        const tax = (income-expenses)*0.2;
        return tax;
    }
}

