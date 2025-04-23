export function price(price: number) {
  return `R$ ${price} `;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR");
}
