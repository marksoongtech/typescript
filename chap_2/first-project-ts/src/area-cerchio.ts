// src/area-cerchio.ts

/**
 * Calcola l'area di un cerchio dato il raggio.
 * Formula: Area = π * raggio^2
 * @param raggio Il raggio del cerchio.
 * @returns L'area del cerchio.
 */
function calcolaAreaCerchio(raggio: number): number {
    const PI = Math.PI; // PI greco
    return PI * raggio * raggio;
}

// Definiamo il raggio
const raggioCerchio: number = 5;

// Calcoliamo l'area
const area: number = calcolaAreaCerchio(raggioCerchio);

// Stampiamo il risultato
console.log(`Il raggio del cerchio è: ${raggioCerchio}`);
console.log(`L'area del cerchio è: ${area}`);