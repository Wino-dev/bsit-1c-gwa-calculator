import { subjects } from "./subjects.js";

export function renderInputs() {
  let subjectsHTML = ''; 

  subjects.forEach((subject) => {
    subjectsHTML += `
      <li class="flex my-4 px-3">
        <h3 class="w-20 mr-6">${subject.name}</h3>
        <input class="border pl-1 js-grade-input" type="number" min="1" max="5" data-units="${subject.units}">
      </li>
    `;
  });
  document.querySelector('.js-subject-list').innerHTML = subjectsHTML;
}
