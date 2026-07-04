function parseField(fieldStr) {
    const [typePart, optionsPart] = fieldStr.split("::").map(s => s?.trim());

    const options = {};

    if (optionsPart) {
        optionsPart.split(" ").forEach(opt => {
            const [key, value] = opt.split(":");
            options[key] = value;
        });
    }

    return { type: typePart, options };
}

function generateForm(model, data = {}) {
    let html = `<h2>${model.viewed}</h2><form id="mine-form">`;

    for (const [name, fieldDef] of Object.entries(model.fields)) {
        const { type, options } = parseField(fieldDef);

        const value = data[name] || "";

        if (type === "LongTextField") {
            html += `
                <label>${name}</label><br>
                <textarea 
                    name="${name}" 
                    maxlength="${options.max || ""}"
                >${value}</textarea>
                <br><br>
            `;
        }

        if (type === "TextField") {
            html += `
                <label>${name}</label><br>
                <input type="text" name="${name}" value="${value}">
                <br><br>
            `;
        }

        if (type === "DateField") {
            html += `
                <label>${name}</label><br>
                <input type="date" name="${name}" value="${value}">
                <br><br>
            `;
        }

        if (type === "TimeField") {
            html += `
                <label>${name}</label><br>
                <input type="time" name="${name}" value="${value}">
                <br><br>
            `;
        }
    }

    html += `<button type="submit">Save</button></form>`;

    return html;
}

async function openCreateForm(selectedModel) {
    const model = await api.getModel(selectedModel);

    page.innerHTML = generateForm(model);
}
