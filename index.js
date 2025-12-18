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
				ataque = "desconhecido";
		}

		console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
	}
}

let ataqueHeroi1 = new heroi("Yas", 25, "mago")
let ataqueHeroi2 = new heroi("João", 18, "guerreiro")
let ataqueHeroi3 = new heroi("Sofia", 15, "ninja")
let ataqueHeroi4 = new heroi("Alice", 13, "monge")
let ataqueHeroi5 = new heroi("Pedro", 05, "lider")


ataqueHeroi1.atacar()
ataqueHeroi2.atacar()
ataqueHeroi3.atacar()
ataqueHeroi4.atacar()
ataqueHeroi5.atacar()