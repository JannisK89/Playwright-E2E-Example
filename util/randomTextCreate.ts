import crypto from 'crypto'

export const createRandomTexts = (): string[] => {
    const texts: string[] = []
    for (let index = 0; index < 3; index++) {
        texts.push(crypto.randomUUID())  
    }
    return texts

}
