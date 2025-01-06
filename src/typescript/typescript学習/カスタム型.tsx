// ジェネリック型<T>で任意の型を受けとる。

// 初期値（デフォルト値）としてからのオブジェクト型{}を指定している
// これによって、特定の型を渡さなくてもchildrenだけを持つ型を作れる。

// unknownはどんな型でもOK
// 型が未定義でも大丈夫。つまり、WithChildrenだけでも使える。
export type WithChildren<T = unknown> = T & { children?: React.ReactNode };

export type CardProps = WithChildren<{
  title: string;
}>;

// 交差型(&)
// 交差型＝複数の型を結合して、新たな型を作成している。
export type CardProps2 = { title: string } & WithChildren;
