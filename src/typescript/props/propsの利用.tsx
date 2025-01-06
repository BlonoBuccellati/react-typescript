import React, { FC } from 'react';
// Propsには「Props」というサフィックスをつける（命名規則）
type GreetingProps = {
  name: string;
};

// ⭕️ 分割代入（Destructuring）の方がリーダブル
function Greeting({ name }: GreetingProps) {
  return <p>H1 {name}</p>;
}
// △ FCを使わない点は🙆‍♀️。しかし、分割代入ではない点が微妙。
function Greeting2(props: GreetingProps) {
  return <p>H1 {props.name}</p>;
}
// ❌ FC(Functional Component)は使用しない。
// なぜなら、自動的（暗黙的）にchildrenが型定義に追加されるから
// 現在は、childrenは明示的に使用するのが主流-
// 意図せぬコンポーネントの使用を避けるため
const Greeting3: FC<GreetingProps> = ({ name }) => {
  return <p>H1 {name}</p>;
};

export { Greeting, Greeting2, Greeting3 };
