function updateResult() {
      // Get input values
      const baseRate = parseFloat(document.getElementById('baseRate').value) || 0;
      const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
      const resortFee = parseFloat(document.getElementById('resortFee').value) || 0;
      const parkingFee = parseFloat(document.getElementById('parkingFee').value) || 0;
      const breakfastFee = parseFloat(document.getElementById('breakfastFee').value) || 0;

      // Calculate the tax amount
      const taxAmount = (baseRate * taxRate) / 100;

      // Calculate the total cost
      const totalCost = baseRate + taxAmount + resortFee + parkingFee + breakfastFee;

      // Update the result side with the input values and calculations
      document.getElementById('baseRateResult').textContent = baseRate.toFixed(2);
      document.getElementById('taxRateResult').textContent = taxRate.toFixed(2);
      document.getElementById('resortFeeResult').textContent = resortFee.toFixed(2);
      document.getElementById('parkingFeeResult').textContent = parkingFee.toFixed(2);
      document.getElementById('breakfastFeeResult').textContent = breakfastFee.toFixed(2);

      document.getElementById('taxAmountResult').textContent = taxAmount.toFixed(2);
      document.getElementById('totalCost').textContent = totalCost.toFixed(2);
    }