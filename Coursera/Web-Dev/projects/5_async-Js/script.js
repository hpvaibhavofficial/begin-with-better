let insert = document.querySelector('#insert')

document.addEventListener('keydown',(e) => {
    insert.innerHTML = `
        <div class  = "key">
            <table>
            <thead>
                <tr>
                    <th>key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${e.key === ' ' ? "Space" : e.key} </td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </tbody>
        </table>
        </div>
    `
});