

const Input = ({name, value, onChange, type}) => {



    return (
        <>
<label htmlFor={name}></label>

            <input
                id={name}
                type={type}
                name={name}
                value={value }
                onChange={(e) => onChange(e)}
                placeholder={name}
            />

        </>

    );
};

export default Input;