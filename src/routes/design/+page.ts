/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        cardId: crypto.randomUUID()
    };
}