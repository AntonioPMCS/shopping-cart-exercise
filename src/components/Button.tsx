import "../styles/Button.css";

interface ButtonProps {
  children: React.ReactNode; // Accepts both JSX and text
  onClick: () => void;
}


const Button:React.FC<ButtonProps> = ({ children, onClick}) => {
  return (
    <button onClick={onClick} className="vanilla-button">
      {children}
    </button>
  )
}

export default Button
