const form = document.getElementById('dreamForm');
const input = document.getElementById('dreamInput');
const list = document.getElementById('dreamList');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const dreamText = input.value.trim();
    if (dreamText !== '') {
        addDream(dreamText);
        input.value = '';
    }
});

function addDream(text) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${text}</span>
    <div> 
        <button onclick="toggleDone(this)">✓</button>
        <button onclick="removeDream(this)">X</button>
    </div>`;
    list.appendChild(li);
}

function toggleDone(btn) {
    const li = btn.closest('li');
    li.classList.toggle('done');
}

function removeDream(btn) {
    const li = btn.closest('li');
    li.remove();
}
