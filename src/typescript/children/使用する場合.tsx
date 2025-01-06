// ⭕️childrenは明示的に使用する。

type CardProps = {
  title: string;
  children: React.ReactNode;
};
const Card = ({ title, children }: CardProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

function Test() {
  return (
    <Card title='card test'>
      <p>this is the card content.</p>
    </Card>
  );
}

export default Test;
