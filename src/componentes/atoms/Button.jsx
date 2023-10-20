import './Button.css'
function Button({caption, click}) {
    return (
        <button className="styleButton"
        onClick={click}>{caption}</button>
      );
}

export default Button;
