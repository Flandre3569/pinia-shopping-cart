export interface IProducts {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

const _products: IProducts[] = [
  { id: 1, title: "ipad 4 mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-shirt white", price: 10, inventory: 5 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 50, inventory: 7 },
];

export const getProducts = async () => {
  await wait(100);
  return _products;
};

export const buyProducts = async () => {
  await wait(100);
  return Math.random() > 0.5;
};
async function wait(delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}
