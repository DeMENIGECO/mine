let models = [];
let db = [];

async function loadModels() {
    const res = await fetch("/api/models");
    models = await res.json();

    const container = document.getElementById("models");
    container.innerHTML = "";

    models.forEach(model => {
        const div = document.createElement("div");
        div.className = "model";
        div.innerText = model.viewed || model.name;

        div.onclick = () => loadModel(model.name);

        container.appendChild(div);
    });
}

async function loadModel(name) {
    const res = await fetch("/api/db");
    db = await res.json();

    const filtered = db.filter(item => item.model === name);

    renderTable(filtered);
}

function renderTable(data) {
    const table = document.getElementById("table");

    if (data.length === 0) {
        table.innerHTML = "<p>Nessun dato</p>";
        return;
    }

    const keys = Object.keys(data[0]).filter(k => k !== "id");

    let html = "<table border='1' cellpadding='5'>";

    html += "<tr>";
    keys.forEach(k => html += `<th>${k}</th>`);
    html += "<th>azioni</th>";
    html += "</tr>";

    data.forEach(row => {
        html += "<tr>";

        keys.forEach(k => {
            html += `<td>${row[k]}</td>`;
        });

        html += `
            <td>
                <button onclick="deleteItem(${row.id})">Delete</button>
            </td>
        `;

        html += "</tr>";
    });

    html += "</table>";

    table.innerHTML = html;
}

async function deleteItem(id) {
    await fetch(`/api/db/${id}`, {
        method: "DELETE"
    });

    location.reload();
}

loadModels();
