import { Magician, Mathe } from "../app";

test('test', () => {
    const magician = new Magician(100)

    expect(magician.setStoned(2)).toBe(85)
})

test('test2', () => {
    const magician = new Magician(100)

    expect(magician.setAttack(2)).toBe(90)
})