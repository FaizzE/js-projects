const cntDisplay = document.getElementById('display-count');
const container = document.getElementById('button-container');

let count = Number(localStorage.getItem('userCount')) || 0;

updateUI();

container.addEventListener('click', (e) => {
    const action = e.target.id;

    if(action === 'btn-increment') {
        count++;
    }
    else if(action == 'btn-decrement') {
        if(count > 0) count--;
    }
    else if(action === 'btn-reset') {
        count = 0;
    } else {
        return;
    }

    saveToStorage();
    updateUI();

});

function updateUI() {
    cntDisplay.innerText = count;
}

function saveToStorage() {
    localStorage.setItem('userCount', count);
}