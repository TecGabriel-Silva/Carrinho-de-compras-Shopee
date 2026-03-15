//Casos de uso dos itens
// -> Criar um item

async function createItem(name,price,quatinty) {
    return {
        name,
        price,
        quatinty,
        subtotal: () => price * quatinty
    };
};

export default createItem;
