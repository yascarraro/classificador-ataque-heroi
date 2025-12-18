class heroi {
	constructor(nome, idade, tipo) {
		this.nome = nome
		this.idade = idade
		this.tipo = tipo
	}

	atacar() {
		let ataque

		switch (this.tipo) {
			case "mago":
				ataque = "magia";
				break;
			case "guerreiro":
				ataque = "espada";
				break;
			case "monge":
				ataque = "artes marciais";
				break;
			case "ninja":
				ataque = "shuriken";
				break;
			default:
				ataque = "ataque misterioso";
		}

		console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
	}
}

let listaHerois = {
	0: ["Yas", 25, "mago"],
    1: ["João", 18, "guerreiro"],
    2: ["Sofia", 15, "ninja"],
    3: ["Alice", 13, "monge"],
    4: ["Pedro", 05, "líder"],
}

for (let index in listaHerois) {
	let [heroiNome, heroiIdade, heroiTipo] = listaHerois[index]
    let ataqueHeroi = new heroi(heroiNome, heroiIdade, heroiTipo)
    ataqueHeroi.atacar()
}
