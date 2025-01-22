document.getElementById('priceCheckerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPrice = parseFloat(document.getElementById('currentPrice').value);
            const competitorPrice = parseFloat(document.getElementById('competitorPrice').value);
            const month = parseInt(document.getElementById('month').value);
            const hotelRating = parseInt(document.getElementById('hotelRating').value);
            const totalKeys = parseInt(document.getElementById('totalKeys').value);
            const currentOccupancy = parseFloat(document.getElementById('currentOccupancy').value);
            const amenities = document.getElementById('amenities').value;
            const hotelType = document.getElementById('hotelType').value;

            let suggestion = '';
            let priceDifference = currentPrice - competitorPrice;

            // Basic price comparison
            if (priceDifference > 0) {
                suggestion += "Your price is higher than the competitor. Consider decreasing your price. ";
            } else if (priceDifference < 0) {
                suggestion += "Your price is lower than the competitor. You might have room to increase your price. ";
            } else {
                suggestion += "Your price is the same as the competitor. ";
            }

            // Season-based suggestion
            const highSeasonMonths = [9, 10, 11, 12, 1];
            const midSeasonMonths = [2, 3, 7, 8];
            if (highSeasonMonths.includes(month)) {
                suggestion += "It's a high season month. You might be able to increase your price further. ";
            } else if (midSeasonMonths.includes(month)) {
                suggestion += "It's a mid-season month. Consider slight adjustments based on demand. ";
            } else {
                suggestion += "It's an off-season month. Consider offering discounts to attract more guests. ";
            }

            // Occupancy-based suggestion
            if (currentOccupancy > 80) {
                suggestion += "High occupancy. Consider increasing prices. ";
            } else if (currentOccupancy < 50) {
                suggestion += "Low occupancy. Consider promotions or slight price reductions. ";
            }

            // Rating and amenities-based suggestion
            let expectedPriceDifference = (hotelRating - 3) * 500;
            switch (amenities) {
                case 'budget':
                    expectedPriceDifference += 0;
                    break;
                case 'midrange':
                    expectedPriceDifference += 1000;
                    break;
                case 'semiluxury':
                    expectedPriceDifference += 2000;
                    break;
                case 'luxury':
                    expectedPriceDifference += 3000;
                    break;
            }

            if (priceDifference < expectedPriceDifference) {
                suggestion += "Based on your rating and amenities, you might be underpricing your rooms. ";
            } else if (priceDifference > expectedPriceDifference) {
                suggestion += "Your price might be high considering your rating and amenities. ";
            }

            // Hotel type-based suggestion
            if (hotelType === 'budget' && priceDifference > 0) {
                suggestion += "As a budget-friendly hotel, consider keeping your prices competitive. ";
            } else if (hotelType === 'luxury' && priceDifference < 0) {
                suggestion += "As a luxury hotel, you might be able to command a higher price. ";
            }

            document.getElementById('result').innerHTML = `
                <h3>Analysis Result:</h3>
                <p>Current Price: ${currentPrice}</p>
                <p>Competitor's Price: ${competitorPrice}</p>
                <p>Price Difference: ${priceDifference.toFixed(2)}</p>
                <p>Total Keys: ${totalKeys}</p>
                <p>Current Occupancy: ${currentOccupancy}%</p>
                <p><strong>Suggestion:</strong> ${suggestion}</p>
            `;
        });