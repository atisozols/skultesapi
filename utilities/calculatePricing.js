const calculatePricing = (start, end) => {
    const pricing = {
        3: 7.50,
        4: 10.00,
        5: 12.50,
        6: 15.00
    }
    const pricingCheap = {
        3: 5.00,
        4: 6.50,
        5: 8.50,
        6: 10.00 
    }

    if(start > 30){
        if(pricing[end - start]){
            return pricing[end - start]
        } else{
            return 0
        } 
    }
    else{
        if(pricingCheap[end - start]){
            return pricingCheap[end - start]
        } else{
            return 0
        }
    }
}

module.exports = calculatePricing