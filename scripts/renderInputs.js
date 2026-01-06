import { subjects } from "./subjects.js";

export function renderInputs() {
  let subjectsHTML = ''; 

  subjects.forEach((subject, index) => {
    subjectsHTML += `
      <li class="flex my-4 px-3">
        <h3 class="w-20 mr-6">${subject.name}</h3>
        <input class="border pl-1 js-grade-input" type="number" min="1" max="5" data-units="${subject.units}" data-index="${index}">
      </li>
    `;
  });
  document.querySelector('.js-subject-list').innerHTML = subjectsHTML;

  // Load saved inputs from localStorage (if any) and populate the inputs
  try {
    const saved = JSON.parse(localStorage.getItem('gwaInputs') || 'null');
    if (saved && Array.isArray(saved)) {
      document.querySelectorAll('.js-grade-input').forEach((input) => {
        const idx = input.dataset.index;
        if (saved[idx] !== undefined && saved[idx] !== null && saved[idx] !== '') {
          input.value = saved[idx];
        }
      });
    }
  } catch (e) {
    // ignore localStorage JSON errors
  }
}
