import  'react';


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