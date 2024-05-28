document.addEventListener('DOMContentLoaded', () => {
    const insTesto = document.getElementById('insTesto');
    const aggTBtn = document.getElementById('aggTBtn');
    const lista = document.getElementById('lista');

    aggTBtn.addEventListener('click', () => {
        const testoIns = insTesto.value.trim();
        if (testoIns !== '') {
            aggiungiTask(testoIns);
            insTesto.value = '';
        }
    });

    const aggiungiTask = (testoIns) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <button class="btnCanc"><i class="fas fa-trash-alt"></i> Elimina</button>
            <span>${testoIns}</span>
        `;
        li.addEventListener('click', () => {
            li.classList.toggle('completato');
        });
        const btnCanc = li.querySelector('.btnCanc');
        btnCanc.addEventListener('click', (event) => {
            event.stopPropagation();
            lista.removeChild(li);
        });
        lista.appendChild(li);
    };
});

