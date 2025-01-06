import React from 'react';

// 指定のhtml属性を渡すときは、IntrinsicElementsを使う。
// メリット：
//①将来的なHTMLの使用の拡張に対応できる。
//②プロパティを手動で定義する必要がないので、漏れが発生しにくい。
// ③冗長性をなくせる

// <button>に渡せる全てのpropsが型として手にいれられる。
type ButtonProps = React.JSX.IntrinsicElements['button'];
// allPropsには、ref,key,disabled,などがある。
export function Button({ ...allProps }: ButtonProps) {
  return <button {...allProps} />;
}
