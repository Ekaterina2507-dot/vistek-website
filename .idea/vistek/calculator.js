

// Calculator functionality
function updateCalculator() {
    const businessType = document.getElementById('business-type').value;
    const documentsCount = parseInt(document.getElementById('documents-count').value) || 0;
    const employeesCount = parseInt(document.getElementById('employees-count').value) || 0;

    let monthlyCost = 0;
    let oneTimeCost = 0;
    let breakdown = [];

    // Calculate main service cost
    if (businessType === 'jdg') {
        if (documentsCount === 0) {
            monthlyCost += 100;
            breakdown.push({ name: 'JDG - Bez aktywności', cost: 100 });
        } else if (documentsCount <= 10) {
            monthlyCost += 280;
            breakdown.push({ name: 'JDG - Pakiet Mini (do 10 dok.)', cost: 280 });
        } else if (documentsCount <= 30) {
            monthlyCost += 380;
            breakdown.push({ name: 'JDG - Pakiet Midi (11-30 dok.)', cost: 380 });
        } else if (documentsCount <= 50) {
            monthlyCost += 480;
            breakdown.push({ name: 'JDG - Pakiet Midi Plus (31-50 dok.)', cost: 480 });
        } else if (documentsCount <= 100) {
            monthlyCost += 580;
            breakdown.push({ name: 'JDG - Pakiet Maxi (51-100 dok.)', cost: 580 });
        } else {
            breakdown.push({ name: 'JDG - Pakiet Maxi Plus (powyżej 100)', cost: 'Wycena indywidualna' });
        }
    } else if (businessType === 'spzoo') {
        if (documentsCount === 0) {
            monthlyCost += 400;
            breakdown.push({ name: 'Sp. z o.o. - Bez aktywności', cost: 400 });
        } else if (documentsCount <= 20) {
            monthlyCost += 700;
            breakdown.push({ name: 'Sp. z o.o. - Pakiet Mini (do 20 dok.)', cost: 700 });
        } else if (documentsCount <= 50) {
            monthlyCost += 1000;
            breakdown.push({ name: 'Sp. z o.o. - Pakiet Midi (21-50 dok.)', cost: 1000 });
        } else if (documentsCount <= 100) {
            monthlyCost += 1500;
            breakdown.push({ name: 'Sp. z o.o. - Pakiet Maxi (51-100 dok.)', cost: 1500 });
        } else {
            breakdown.push({ name: 'Sp. z o.o. - Pakiet Maxi Plus (powyżej 100)', cost: 'Wycena indywidualna' });
        }
    }

    // Calculate employees cost
    if (employeesCount > 0) {
        const employeeCost = employeesCount * 80;
        monthlyCost += employeeCost;
        breakdown.push({ name: `Kadry i płace (${employeesCount} prac.)`, cost: employeeCost });
    }

    // Calculate additional services
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const cost = parseInt(checkbox.value);
        oneTimeCost += cost;
        breakdown.push({
            name: checkbox.nextElementSibling.textContent,
            cost: cost,
            oneTime: true
        });
    });

    // Update the display
    updateBreakdown(breakdown, monthlyCost, oneTimeCost);
}

function updateBreakdown(breakdown, monthlyCost, oneTimeCost) {
    const breakdownDiv = document.getElementById('cost-breakdown');
    const totalDiv = document.getElementById('total-cost');

    if (breakdown.length === 0) {
        breakdownDiv.innerHTML = `
                    <div class="result-item">
                        <span>Wybierz typ działalności</span>
                        <span>-</span>
                    </div>
                `;
        totalDiv.textContent = '0 zł / miesiąc';
        return;
    }

    let html = '';
    breakdown.forEach(item => {
        const costDisplay = typeof item.cost === 'string'
            ? item.cost
            : `${item.cost} zł${item.oneTime ? ' (jednorazowo)' : '/mies.'}`;

        html += `
                    <div class="result-item">
                        <span>${item.name}</span>
                        <span>${costDisplay}</span>
                    </div>
                `;
    });

    breakdownDiv.innerHTML = html;

    let totalText = '';
    if (monthlyCost > 0) {
        totalText += `${monthlyCost} zł / miesiąc`;
    }
    if (oneTimeCost > 0) {
        if (totalText) totalText += ' + ';
        totalText += `${oneTimeCost} zł jednorazowo`;
    }
    if (!totalText) totalText = 'Wycena indywidualna';

    totalDiv.innerHTML = totalText;
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCalculator();
});

