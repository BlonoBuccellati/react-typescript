import { PropsWithChildren } from 'react';

// 詳しくはカスタム型
// withChildrenのReactにはカスタムヘルパータイプが用意されている。（PropsWithChildren)
// ⭕️childrenを使用するときは、PropsWithChildrenを使おう！！
type CardProps = PropsWithChildren<{
  title: string;
}>;

// ⭕️ 別の書き方
// どっちの書き方の方がいいとは書いていなかった。
export type CardProps2 = { title: string } & PropsWithChildren;

function Card({ title, children }: CardProps) {
  return (
    <section className='card'>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function CardTest() {
  return (
    <Card title='hello'>
      <p>this is card content.</p>
    </Card>
  );
}

export default CardTest;
