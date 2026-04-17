const purchasePriceInput = document.getElementById('purchase-price');
const renovationCostInput = document.getElementById('renovation-cost');
const nightlyRateInput = document.getElementById('nightly-rate');
const occupancyInput = document.getElementById('occupancy');
const occupancyVal = document.getElementById('occupancy-val');

const annualIncomeEl = document.getElementById('annual-income');
const roiPercentageEl = document.getElementById('roi-percentage');

function formatCurrency(val) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(val);
}

function calculateROI() {
    const purchasePrice = parseFloat(purchasePriceInput.value) || 0;
    const renovationCost = parseFloat(renovationCostInput.value) || 0;
    const nightlyRate = parseFloat(nightlyRateInput.value) || 0;
    const occupancyNights = parseInt(occupancyInput.value) || 0;

    const totalInvestment = purchasePrice + renovationCost;
    const monthlyIncome = nightlyRate * occupancyNights;
    const annualIncome = monthlyIncome * 12;
    
    // Simple ROI calculation: (Annual Income / Total Investment) * 100
    const roi = totalInvestment > 0 ? (annualIncome / totalInvestment) * 100 : 0;

    annualIncomeEl.textContent = formatCurrency(annualIncome);
    roiPercentageEl.textContent = roi.toFixed(1) + '%';
    occupancyVal.textContent = `${occupancyNights} noches / mes`;
}

// Event Listeners
[purchasePriceInput, renovationCostInput, nightlyRateInput, occupancyInput].forEach(input => {
    input.addEventListener('input', calculateROI);
});

// Initial calculation
calculateROI();
