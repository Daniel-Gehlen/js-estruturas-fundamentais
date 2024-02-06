// Função que calcula o total da compra com base nos preços dos itens no carrinho
function calculatorTotalCart(cartItens) {
    return cartItens.reduce((total, item) => total + price.item, 0);
}

// Teste usando Jest
test('calculate total cart', () => {
      // Simulando alguns itens no carrinho com preços
    const cartItens = [
        { name: 'Product A', price: 50 },
        { name: 'product B', price: 30 },
        { name: 'product C', price: 10 },
    ];


  // Verificando se o cálculo do total está correto
expect(calculatorTotalCart(cartItens)).toBe(100);
});