function getSpzooPackage(docsCount) {
    if (docsCount === 0) return { name: 'Bez aktywności', range: 'Brak dokumentów', price: 400 };
    if (docsCount <= 20) return { name: 'Pakiet Mini', range: 'Do 20 dokumentów', price: 700 };
    if (docsCount <= 50) return { name: 'Pakiet Midi', range: '21-50 dokumentów', price: 1000 };
    if (docsCount <= 100) return { name: 'Pakiet Maxi', range: '51-100 dokumentów', price: 1500 };
    return { name: 'Pakiet Maxi Plus', range: 'Powyżej 100 dokumentów', price: 2000 };
}

function getJdgPackage(docsCount) {
    if (docsCount === 0) return { name: 'Bez aktywności', range: 'Brak dokumentów', price: 100 };
    if (docsCount <= 10) return { name: 'Pakiet Mini', range: 'Do 10 dokumentów', price: 280 };
    if (docsCount <= 30) return { name: 'Pakiet Midi', range: '11-30 dokumentów', price: 380 };
    if (docsCount <= 50) return { name: 'Pakiet Midi Plus', range: '31-50 dokumentów', price: 480 };
    if (docsCount <= 100) return { name: 'Pakiet Maxi', range: '51-100 dokumentów', price: 580 };
    return { name: 'Indywidualny', range: 'Powyżej 100 dokumentów', price: 700 };
}

function updateBusinessType() {
    const businessType = document.getElementById('business-type').value;
    const docsSelect = document.getElementById('documents-count');

    if (!businessType) {
        docsSelect.innerHTML = '<option value="">Najpierw wybierz typ działalności</option>';
        docsSelect.disabled = true;
        updateCalculator();
        return;
    }

    docsSelect.disabled = false;

    if (businessType === 'spzoo') {
        docsSelect.innerHTML = `
            <option value="">Wybierz zakres dokumentów</option>
            <option value="0">Bez aktywności (0 dokumentów)</option>
            <option value="20">Pakiet Mini (do 20 dokumentów)</option>
            <option value="50">Pakiet Midi (21-50 dokumentów)</option>
            <option value="100">Pakiet Maxi (51-100 dokumentów)</option>
            <option value="101">Pakiet Maxi Plus (powyżej 100 dokumentów)</option>
        `;
    } else {
        docsSelect.innerHTML = `
            <option value="">Wybierz zakres dokumentów</option>
            <option value="0">Bez aktywności (0 dokumentów)</option>
            <option value="10">Pakiet Mini (do 10 dokumentów)</option>
            <option value="30">Pakiet Midi (11-30 dokumentów)</option>
            <option value="50">Pakiet Midi Plus (31-50 dokumentów)</option>
            <option value="100">Pakiet Maxi (51-100 dokumentów)</option>
            <option value="101">Indywidualny (powyżej 100 dokumentów)</option>
        `;
    }

    updateCalculator();
}

function updateCalculator() {
    const businessType = document.getElementById('business-type').value;
    const docsCount = parseInt(document.getElementById('documents-count').value) || 0;
    const employeesCount = parseInt(document.getElementById('employees-count').value) || 0;
    const vatReg = document.getElementById('vat-reg').checked;
    const annualReport = document.getElementById('annual-report').checked;
    const accountingPolicy = document.getElementById('accounting-policy').checked;
    const companyReg = document.getElementById('company-registration').checked;

    let breakdown = '';
    let monthlyTotal = 0;
    let oneTimeTotal = 0;

    if (!businessType) {
        document.getElementById('cost-breakdown').innerHTML = `
                    <div class="result-item">
                        <span>Wybierz typ działalności</span>
                        <span>-</span>
                    </div>
                `;
        document.getElementById('total-cost').innerHTML = '0 zł / miesiąc';
        return;
    }

    // Obliczenie pakietu księgowego
    let accountingPackage;
    if (businessType === 'spzoo') {
        accountingPackage = getSpzooPackage(docsCount);
    } else {
        accountingPackage = getJdgPackage(docsCount);
    }

    monthlyTotal += accountingPackage.price;

    breakdown += `
                <div class="result-item">
                    <span>${accountingPackage.name} (${businessType === 'jdg' ? 'JDG: KPiR, ryczałt' : 'Sp. z o.o.: Prowadzenie ksiąg rachunkowych'})<br><small style="opacity: 0.8;">${accountingPackage.range}</small></span>
                    <span>${accountingPackage.price} zł</span>
                </div>
            `;

    // Kadry i płace
    if (employeesCount > 0) {
        const payrollCost = employeesCount * 80;
        monthlyTotal += payrollCost;
        breakdown += `
                    <div class="result-item">
                        <span>Kadry i płace (${employeesCount} × 80 zł)</span>
                        <span>${payrollCost} zł</span>
                    </div>
                `;
    }

    // Usługi jednorazowe
    if (companyReg) {
        const regCost = 750; // Cena promocyjna
        breakdown += `
                    <div class="result-discount">
                        🎉 Promocja! Rejestracja -50%
                        <div style="font-size: 0.9em; opacity: 0.9;">przy wyborze pakietu</div>
                    </div>
                    <div class="result-item" style="background: var(--white-overlay); padding: var(--space-xs); border-radius: var(--radius-sm);">
                        <span>Rejestracja Sp. z o.o.<br><small style="opacity: 0.8;">KRS, CRBR, PCC-3, NIP-8, e-urząd skarbowy</small></span>
                        <span><s style="opacity: 0.7;">1500 zł</s> → <strong style="color: #F57C00;">750 zł</strong></span>
                    </div>
                `;
        oneTimeTotal += regCost;
    }

    if (vatReg) {
        breakdown += `
                    <div class="result-item">
                        <span>Rejestracja VAT (jednorazowo)</span>
                        <span>200 zł</span>
                    </div>
                `;
        oneTimeTotal += 200;
    }

    if (annualReport) {
        breakdown += `
                    <div class="result-item">
                        <span>Sprawozdania elektroniczne (jednorazowo)</span>
                        <span>400 zł</span>
                    </div>
                `;
        oneTimeTotal += 400;
    }

    if (accountingPolicy) {
        breakdown += `
                    <div class="result-item">
                        <span>Polityka rachunkowości (jednorazowo)</span>
                        <span>300 zł</span>
                    </div>
                `;
        oneTimeTotal += 300;
    }

    // Wyświetlenie wyników
    document.getElementById('cost-breakdown').innerHTML = breakdown;

    let totalText = `${Math.round(monthlyTotal)} zł / miesiąc`;
    if (oneTimeTotal > 0) {
        totalText += ` + ${oneTimeTotal} zł (jednorazowo)`;
    }
    document.getElementById('total-cost').innerHTML = totalText;
}

// Pierwsze wywołanie
updateCalculator();