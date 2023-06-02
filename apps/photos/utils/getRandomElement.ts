export const getRandomElement = <T>(items: T[]) =>
  items[Math.floor(Math.random() * items.length)];
