const textareaEl = document.getElementById('textarea');
const totalEl = document.getElementById('total');
const remainingEl = document.getElementById('remaining');
const limitEl = document.getElementById('limit');


const counterUpdater = () => {
    const total = textareaEl.value.length;
    totalEl.innerText = total;
    const maxLength = textareaEl.getAttribute('maxLength');
    remainingEl.innerText = maxLength - total;

    if(total >= maxLength) {
        limitEl.innerText = 'You have reached word limit!'
    }
}

textareaEl.addEventListener('keyup', () => {
    counterUpdater();
});