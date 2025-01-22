import  'react';
import './Button.css'

const Button = ({button, name, onClick, disabled}) => {
    return (
        <>

            < button
                type={button}
                onClick={onClick}
                disabled={disabled}
            >
                {name}
            </button>

        </>
    );
};

export default Button;