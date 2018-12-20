async function getlist() {
    const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');

    let html = '';
    for(const pokemon of pokelist.results) {
        html += `<div>
        <table class="table table-striped">
        <body>
        <tr>
        <td>${pokemon.name} <button onClick="location.href='details.html?id=${pokemon.name}'" class="btn-info">Details</button></td>
        </tr>
        </table>
        
        </div>`
    }

    $('#pokemons')[0].innerHTML = html;
};

getlist();