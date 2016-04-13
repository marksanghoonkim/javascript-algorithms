function getMaxProfit(stockPricesYesterday) {
    if (stockPricesYesterday.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }

    var minPrice = stockPricesYesterday[0];
    var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

    for (var i = 1; i < stockPricesYesterday.length; i++) {
        var potentialProfit = stockPricesYesterday[i] - minPrice;
        
        maxProfit = Math.max(maxProfit, potentialProfit);
        
        minPrice = Math.min(stockPricesYesterday[i], minPrice);
    }
    return maxProfit;
}
