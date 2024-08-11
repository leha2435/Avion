const stepperELs = document.querySelectorAll('.stepper');

document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.close-btn');
    const block = document.querySelector('.notice');

    closeButton.addEventListener('click', function () {
        block.style.display = 'none';
    });
});



if (stepperELs) {
    stepperELs.forEach(stepperEL =>  {
    const stepperInputEL = stepperEL.querySelector('.stepper__input');
    const stepperBtnMinusEL = stepperEL.querySelector('.stepper__btn--minus');
    const stepperBtnPlusEL = stepperEL.querySelector('.stepper__btn--plus');

    const stepperMin = Number(stepperInputEL.getAttribute('min'));
    const stepperMax = Number(stepperInputEL.getAttribute('max'));

    let count = Number(stepperInputEL.value);

    stepperInputEL.addEventListener('change', () => {
    stepperBtnMinusEL.classList.remove('stepper__btn--disabled');
    stepperBtnPlusEL.classList.remove('stepper__btn--disabled');

    if (stepperInputEL.value < stepperMin) {
        stepperInputEL.value = stepperMin;
        stepperBtnPlusEL.classList.add('stepper__btn--disabled');
    }

    if (stepperInputEL.value > stepperMax) {
        stepperInputEL.value = stepperMax;
        stepperBtnPlusEL.classList.add('stepper__btn--disabled');
        }
    });

    stepperBtnPlusEL.addEventListener('click', () => {
    count = Number(stepperInputEL.value);

    if (count < stepperMax) {
        stepperBtnMinusEL.classList.remove('stepper__btn--disabled');
        stepperBtnPlusEL.classList.remove('stepper__btn--disabled');
        count++;
        stepperInputEL.value = count;
    }

    if (count === stepperMax) {
        stepperBtnPlusEL.classList.add('stepper__btn--disabled');
    }
});

    stepperBtnMinusEL.addEventListener('click', () => {
    count = Number(stepperInputEL.value);

    if (count > stepperMin) {
        stepperBtnMinusEL.classList.remove('stepper__btn--disabled');
        stepperBtnPlusEL.classList.remove('stepper__btn--disabled');
        count--;
        stepperInputEL.value = count;
    }

    if (count === stepperMin) {
        stepperBtnMinusEL.classList.add('stepper__btn--disabled');
    }
    });
});
}