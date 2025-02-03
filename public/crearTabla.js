function createTable(list, func) {
    const keys = Object.keys(list[0]);
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    //crear cabecera
    const tr = document.createElement('tr');
    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        tr.appendChild(th);
    });
    thead.appendChild(tr);

    //crear cuerpo
    list.forEach(item => {
        const tr = document.createElement('tr');
        keys.forEach(key => {
            const td = document.createElement('td');
            td.textContent = item[key];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);

        if (func) func(tr, item);
    });

    //agregar cabecera y cuerpo a la tabla
    table.appendChild(thead);
    table.appendChild(tbody);

    //agregar tabla al body
    document.body.appendChild(table);
}