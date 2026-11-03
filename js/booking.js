/* B01–B11: Formularens aktuelle værdier er eneste kilde til fremdrift.
   Intet sendes eller gemmes; opsummeringen bruger kun sidens DOM-tilstand. */
(() => {
  'use strict';
  const form = document.querySelector('#booking-form');
  const summary = document.querySelector('#booking-summary');
  const errorSummary = document.querySelector('#booking-errors');
  const progress = document.querySelector('#booking-progress');
  const largeGroupButton = form.querySelector('.booking-large-group');
  const largeGroupContact = document.querySelector('#large-group-contact');
  const steps = ['date', 'time', 'participants', 'name', 'phone', 'email'];
  const terms = ['term1', 'term2', 'term3'];
  let attempted = false;
  let largeGroup = false;
  let previousCount = 0;

  function controls(key) { return [...form.querySelectorAll(`[name="${key}"]`)]; }
  function value(key) {
    const fields = controls(key);
    return fields[0].type === 'radio' ? fields.find(field => field.checked)?.value || '' : fields[0].value.trim();
  }
  function valid(key) {
    const text = value(key);
    switch (key) {
      case 'date': return /^2027-10-(0[1-9]|[12]\d|3[01])$/.test(text);
      case 'time': return /^(18|19|20|21|22)\.(00|15|30|45)$/.test(text);
      case 'participants': return !largeGroup && /^[2-8]$/.test(text);
      // Navne kan være ét ord og bruge alle alfabeter, mellemrum og tegn.
      case 'name': return /\p{L}/u.test(text);
      // Ingen eksisterende telefonregel i projektet. Tillad almindelig
      // international formatering uden at påstå, at nummeret eksisterer.
      case 'phone': return /^\+?[\d\s().-]+$/.test(text) && text.replace(/\D/g, '').length >= 7 && text.replace(/\D/g, '').length <= 15;
      case 'email': return text !== '' && controls(key)[0].validity.valid;
      default: return controls(key)[0].checked;
    }
  }
  const messages = {
    date: 'Vælg en dato i oktober 2027.',
    time: 'Vælg et starttidspunkt mellem kl. 18.00 og 22.45.',
    participants: 'Vælg 2–8 deltagere. Kontakt os, hvis I er flere end 8.',
    name: 'Indtast dit navn.',
    phone: 'Indtast et mobilnummer med 7–15 cifre. Mellemrum og landekode er tilladt.',
    email: 'Indtast en mailadresse i et gyldigt format, for eksempel navn@eksempel.dk.',
    term1: 'Bekræft kontaktoplysninger og samtykke.',
    term2: 'Afkryds bekræftelsen af booking- og aflysningspolitikken i prototypen.',
    term3: 'Afkryds vilkåret om afbestilling i prototypen.'
  };
  function focusField(key) { controls(key)[0].focus(); }
  function renderErrors() {
    const errors = [];
    for (const key of [...steps, ...terms]) {
      const invalid = !valid(key);
      const text = document.querySelector(`#${key}-error`);
      text.hidden = !invalid;
      text.textContent = invalid ? messages[key] : '';
      controls(key).forEach(field => field.setAttribute('aria-invalid', String(invalid)));
      if (invalid) errors.push(key);
    }
    const list = errorSummary.querySelector('ul');
    list.replaceChildren();
    errors.forEach(key => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${controls(key)[0].id || key + '-group'}`;
      link.textContent = messages[key];
      link.addEventListener('click', event => { event.preventDefault(); focusField(key); });
      item.append(link);
      list.append(item);
    });
    errorSummary.hidden = errors.length === 0;
    return errors;
  }
  function update() {
    let count = 0;
    steps.forEach(key => {
      const complete = valid(key);
      if (complete) count++;
      document.querySelector(`[data-step="${key}"]`).classList.toggle('is-complete', complete);
      if (['name', 'phone', 'email'].includes(key)) controls(key)[0].classList.toggle('is-valid', complete);
    });
    if (count !== previousCount) {
      progress.textContent = `${count} af 6 punkter udfyldt`;
      previousCount = count;
    }
    if (attempted) renderErrors();
  }
  form.addEventListener('input', update);
  form.addEventListener('change', event => {
    if (event.target.name === 'participants') {
      largeGroup = false;
      largeGroupContact.hidden = true;
      largeGroupButton.setAttribute('aria-expanded', 'false');
    }
    update();
  });
  largeGroupButton.addEventListener('click', () => {
    largeGroup = true;
    controls('participants').forEach(field => { field.checked = false; });
    largeGroupContact.hidden = false;
    largeGroupButton.setAttribute('aria-expanded', 'true');
    update();
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    attempted = true;
    update();
    if (renderErrors().length) {
      errorSummary.focus();
      return;
    }
    document.querySelector('#summary-date').textContent = `${Number(value('date').slice(-2))}. oktober 2027`;
    document.querySelector('#summary-time').textContent = `Kl. ${value('time')}`;
    document.querySelector('#summary-participants').textContent = value('participants');
    document.querySelector('#summary-price').textContent = `${49 * Number(value('participants'))} kr.`;
    form.hidden = true;
    summary.hidden = false;
    document.querySelector('#summary-title').focus();
  });
  document.querySelector('#edit-booking').addEventListener('click', () => {
    summary.hidden = true;
    form.hidden = false;
    focusField('date');
  });
  // Genberegn også ved tilbage-navigation og browserens autofuldførelse.
  window.addEventListener('pageshow', update);
  form.querySelector('[type="submit"]').disabled = false;
  update();
})();
