type A = {
  name: string;
};

type B = {
  age: number;
};

// ⭕️交差型は必ずAとBの両方を持つ必要がある。
type AB = A & B;

export const person: AB = {
  name: 'alice',
  age: 18,
};
