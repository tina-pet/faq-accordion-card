'use strict';
const faqs = document.querySelectorAll('.faq');
for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener('click', () => {
    const question = faqs[i].querySelector('.faq-question');
    const answer = faqs[i].querySelector('.faq-answer');
    const arrow = faqs[i].querySelector('img');
    question.classList.toggle('faq-question__bold');
    answer.classList.toggle('show-answer');
    arrow.classList.toggle('img-arrow_up');
  });
}
