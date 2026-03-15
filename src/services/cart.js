// Quais ações meu carrinho deve fazer? 
// -> Adiconar um item
// -> Deletar um item do carrinho
// -> Remover um item
// -> Caculcular o total

// ✅ -> Adicionar um item ao carrinho
async function addItem(userCart,item) {
  userCart.push(item);
};

// -> Deletar item do carrinho
async function deleteItem(userCart,name) {
    const index = userCart.findIndex((item) => item.name === name); //Quando não é encontrado o index do array ele retorna -1

    if(index !== -1){
        userCart.splice(index, 1);
    }
};

// -> Diminuir um item do carrinho
async function removeItem(userCart,index) {
    //Transforma o indice visual no mesmo do array.
    const deleteIndex = index - 1; 
    
    //É maior que zero e se é menor que o tamanho do carrinho
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
};

// Calcular o total que está no carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item ) => total + item.subtotal(), 0);
    console.log(`\n🎁 Valor total do carrinho: R$${result}`);
};

async function displayToCart(userCart) {
    console.log(`Itens do carrinho 🛒`);
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name} - R$${item.price} | ${item.quatinty}x | Subtotal R$${item.subtotal()}`);
    });
};

export {
    addItem, deleteItem, removeItem, calculateTotal, displayToCart
}