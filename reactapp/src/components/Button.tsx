interface ButtonProps {
  children: string;
  colour?: "primary" | "secondary" | "danger" | "warning";
  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: ButtonProps) => {
  return (
    <div className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
