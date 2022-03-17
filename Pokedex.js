const BuscarPokemon =  () =>{
    const PokeNombre = document.getElementById("PokeNombre");
    let PokeInput = PokeNombre.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${PokeInput}`;
    fetch(url).then((res) =>{
        if(res.status != 200){
            PokeImg.src= "./Error.png";
        }
        return res.json();
    }).then((data) =>{
        console.log(data);
        let PokeImg = data.sprites.front_default;
        let nombre = data.name;
        let tipo = data.types;
        let tiposlista = []
        for (var i = 0;i < data.types.length;i++){
            tiposlista.push(tipo[i].type.name);
        }
        let altura = data.height;
        let peso = data.weight;
        let id = data.id;
        let estadisticas = [
            hp = data.stats[0].base_stat,
            attack = data.stats[1].base_stat,
            defense = data.stats[2].base_stat,
            sattack = data.stats[3].base_stat,
            sdefense = data.stats[4].base_stat,
            speed = data.stats[5].base_stat,
        ];
        let movimientos = data.moves;
        let movimientoslista = [];
        for(var i = 0;i < movimientos.length;i++){
            movimientoslista.push(movimientos[i].move.name);
        }


        /*console.log(tiposlista);
        console.log(PokeImg);
        console.log(altura);
        console.log(movimientoslista);
        */

        PokeImagen(PokeImg);
        LPokenombre(nombre);
        PokeTipo(tiposlista);
        PokeAltura(altura);
        PokePeso(peso);
        Pokeid(id);
        PokeEstaditicas(estadisticas);
        PokeMovimientos(movimientoslista);
    })
}

const BuscarPokemonId =  () =>{
    const PokeId = document.getElementById("PokeId");
    let PokeInput = PokeId.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${PokeInput}`;
    fetch(url).then((res) =>{
        if(res.status != 200){
            PokeImg.src= "./Error.png";
        }
        return res.json();
    }).then((data) =>{
        console.log(data);
        let PokeImg = data.sprites.front_default;
        let nombre = data.name;
        let tipo = data.types;
        let tiposlista = []
        for (var i = 0;i < data.types.length;i++){
            tiposlista.push(tipo[i].type.name);
        }
        let altura = data.height;
        let peso = data.weight;
        let id = data.id;
        let estadisticas = [
            hp = data.stats[0].base_stat,
            attack = data.stats[1].base_stat,
            defense = data.stats[2].base_stat,
            sattack = data.stats[3].base_stat,
            sdefense = data.stats[4].base_stat,
            speed = data.stats[5].base_stat,
        ];
        let movimientos = data.moves;
        let movimientoslista = [];
        for(var i = 0;i < movimientos.length;i++){
            movimientoslista.push(movimientos[i].move.name);
        }

        /*
        console.log(tiposlista);
        console.log(PokeImg);
        console.log(altura);
        */

        PokeImagen(PokeImg);
        LPokenombre(nombre);
        PokeTipo(tiposlista);
        PokeAltura(altura);
        PokePeso(peso);
        Pokeid(id);
        PokeEstaditicas(estadisticas);
        PokeMovimientos(movimientoslista);
    })
}
const PokeImagen = (url) =>{
    const PokeImg = document.getElementById("PokeImg");
    PokeImg.src = url;
}

const LPokenombre = (nombre) =>{
    var text = document.getElementById("Nombre");
    text.textContent = `Nombre: ${nombre}`;
    var nombre = document.getElementById("PokeNombre");
    var id = document.getElementById("PokeId");
    nombre.value = "";
    id.value = "";
}
const PokeTipo = (tiposlista) =>{
    var text = document.getElementById("Tipo");
    text.textContent = `${tiposlista}`; 
}
const PokeAltura = (altura) =>{
    var text = document.getElementById("Altura");
    text.textContent = `${altura}`;
}
const PokePeso = (peso) =>{
    var text = document.getElementById("Peso");
    text.textContent = `${peso}`;
}
const Pokeid = (id) =>{
    var text = document.getElementById("Id");
    text.textContent = `${id}`;
}
const PokeEstaditicas = (estadisticas) =>{
    var hp = document.getElementById("Hp");
    hp.textContent = ` HP: ${estadisticas[0]}`;

    var attack = document.getElementById("Attack");
    attack.textContent =`Attack: ${estadisticas[1]}`;

    var defense = document.getElementById("Defense");
    defense.textContent = `Defense: ${estadisticas[2]}`;

    var sattack = document.getElementById("Sattack");
    sattack.textContent = `Special Attack: ${estadisticas[3]}`;

    var sdefense = document.getElementById("Sdefense");
    sdefense.textContent = `Special Defense: ${estadisticas[4]}`;

    var speed = document.getElementById("Speed");
    speed.textContent = `Speed: ${estadisticas[5]}`;
}

const PokeMovimientos = (movimientoslista) =>{
    const moves = movimientoslista;
    const lista = document.querySelector('#ListaMovimientos');
    for(let i = lista.options.length;i >= 0; i--){
        lista.remove(i)
    }
    moves.forEach(move => {
        let option = document.createElement('option');
        option.value = move;
        option.text = move
        lista.appendChild(option)
    });
}