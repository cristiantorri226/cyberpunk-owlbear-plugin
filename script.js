
function save() {
    const inputs = document.querySelectorAll('#sheet input, #sheet textarea');
    const data = {};
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            data[input.id] = input.checked;
        } else {
            data[input.id] = input.value;
        }
    });
    localStorage.setItem('cyberpunkCharacterFull', JSON.stringify(data));
    alert('Ficha guardada');
}

function load() {
    const data = JSON.parse(localStorage.getItem('cyberpunkCharacterFull') || '{}');
    Object.keys(data).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = data[id];
            } else {
                element.value = data[id];
            }
        }
    });
}

function roll(stat) {
    const value = parseInt(document.getElementById(stat).value) || 0;
    const dice = Math.floor(Math.random() * 10) + 1;
    const total = value + dice;
    document.getElementById("output").innerText = `Tirada de ${stat.toUpperCase()}: 1d10(${dice}) + ${value} = ${total}`;
}

window.onload = load;
