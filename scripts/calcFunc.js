export function calculateGWA() {
  document.querySelector('.js-calculate-button').addEventListener('click', () => {
    let totalWeightedGrade = 0;
    let totalUnits = 0;
    let isPassing = true;
    let eligibleForMCL = true;
    let eligibleForCL = true;
    let eligibleForAD = true;

    document.querySelectorAll('.js-grade-input').forEach((input) => {
      if (input.value == '' || input.value < 1) {
        input.value = 5;
      } 

      if (input.value == 5) {
        isPassing = false;
      }

      if (input.value > 1.75) {
        eligibleForMCL = false;
      }

      if (input.value > 2.0) {
        eligibleForCL = false;
      }

      if (input.value > 2.25) {
        eligibleForAD = false;
      }

      totalWeightedGrade += input.value * input.dataset.units;
      totalUnits += parseInt(input.dataset.units);
    });      
    
    const gwa = (totalWeightedGrade / totalUnits).toFixed(2);
    document.querySelector('.js-gwa-result').textContent = gwa;
    let messageHTML = '';
    if (!isPassing) {
      messageHTML = `<p class="text-red-500">You failed at least one subject.</p>`;
    } else if (eligibleForMCL && gwa < 1.5) {
      messageHTML = `<p class="text-amber-500">Magna Cum Laude Candidate.</p>`;
    } else if (eligibleForCL && gwa < 1.76) {
      messageHTML = `<p class="text-gray-500">Cum Laude Candidate.</p>`;
    } else if (eligibleForAD && gwa < 2) {
      messageHTML = `<p class="text-amber-700">With Academic Distinction Candidate.</p>`;
    } else {
      messageHTML = `<p class="text-green-800">You Passed!</p>`;
    }

    document.querySelector('.js-gwa-message').innerHTML = messageHTML;
  }); 
}