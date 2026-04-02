import PromptSync from "prompt-sync"
const prompt = PromptSync()
const divisao = (numero1, numero2, resultado) => {
    numero1 = Number (prompt ('digite o numero: '))
    numero2 = Number (prompt ('digite o numero: '))
    resultado = Number (numero1 / numero2)
}

export default divisao