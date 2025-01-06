// children:neverだけでは使用しない。もし、children:neverだけなら、Propsの定義自体が不要なので。
type SaveButtonProps = {
  name?: string;
  // patterns.devではオプショナル(?)はないが、つけないとエラーになってしまう。
  children?: never; // ⭕️子要素(children)を渡すとエラーが発生する。
};

const SaveButton = ({ name = '保存' }: SaveButtonProps) => {
  return <p>{name}</p>;
};

function Test() {
  // SaveButtonにchildrenを渡すと、コンパイルエラー。
  //const test = () => <div>test</div>;
  //return <SaveButton name='test'>{test}</SaveButton>;

  return <SaveButton />;
}

export default Test;
