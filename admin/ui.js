function renderUsers(users) {
    let html = `
        <h2>Users</h2>
        <button onclick="openCreateUser()">+ New User</button>
        <br><br>

        <table border="1" width="100%" cellpadding="6">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Staff</th>
                <th>Actions</th>
            </tr>
    `;

    users.forEach(user => {
        html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.staff}</td>
                <td>
                    <button onclick="editUser(${user.id})">Edit</button>
                </td>
            </tr>
        `;
    });

    html += `</table>`;

    return html;
}


function renderModels(models) {
    let html = `
        <h2>Models</h2>
        <br>

        <table border="1" width="100%" cellpadding="6">
            <tr>
                <th>Name</th>
                <th>View</th>
                <th>Fields</th>
            </tr>
    `;

    models.forEach(model => {
        html += `
            <tr>
                <td>${model.name}</td>
                <td>${model.viewed}</td>
                <td><pre>${JSON.stringify(model.fields, null, 2)}</pre></td>
            </tr>
        `;
    });

    html += `</table>`;

    return html;
}

function renderDatabase(records) {
    let html = `
        <h2>Database</h2>
        <p>Select a model to view data.</p>

        <table border="1" width="100%" cellpadding="6">
            <tr>
                <th>ID</th>
                <th>Model</th>
                <th>Data</th>
                <th>Actions</th>
            </tr>
    `;

    records.forEach(r => {
        html += `
            <tr>
                <td>${r.id}</td>
                <td>${r.model}</td>
                <td><pre>${JSON.stringify(r, null, 2)}</pre></td>
                <td>
                    <button onclick="deleteRecord(${r.id})">Delete</button>
                </td>
            </tr>
        `;
    });

    html += `</table>`;

    return html;
}
