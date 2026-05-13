import "../styles/logo.css"

export default function Logo() {
  return (
    <h1 className="logo">
      {"<"}
      <span>ferreira.dev</span>
      {"/"}
      <span className="cursor">{">"}</span>
    </h1>
  );
}