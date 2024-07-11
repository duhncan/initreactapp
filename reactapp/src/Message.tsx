function Message() {
  const name = "Duhncan";
  if (name) return <p>Hello {name}</p>;
  return <p>Hello World</p>;
}

export default Message;
