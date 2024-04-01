import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import {suma} from "../src/kataOscar";
import {resta} from "../src/kataOscar";
import {multiplicacion} from "../src/kataOscar";
import {division} from "../src/kataOscar";

describe ("Pruebas calculadora", () => {
    it ("Suma 1 + 2 para obtener 3", () => {
        expect (suma(1, 2)).toBe(3);
    })
});

it ("Resta 5 - 2 para obtener 3", () => {
    expect (resta(5, 2)).toBe(3);
})

it ("Multiplica 3 * 4 para obtener 12", () => {
    expect (multiplicacion(3, 4)).toBe(12);
})

it ("Divide 10 / 2 para obtener 5", () => {
    expect (division(10, 2)).toBe(5);
})

it ("Dividir por cero es un error", () => {
    expect (() => {
        division(10, 0);
    }).toThrow("No se puede dividir por cero");
})