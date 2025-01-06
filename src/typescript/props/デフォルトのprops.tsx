// デフォルト値を設定するには、オプショナル(?)としてマークする。
// デフォルト値を設定することで、プロパティが未定義(undefined)になるのを防げる。
type LoginMsgProps = {
  name?: string;
};

function LoginMsg({ name = 'Guest' }: LoginMsgProps) {
  return <p>Logged in as {name}</p>;
}

export default LoginMsg;
