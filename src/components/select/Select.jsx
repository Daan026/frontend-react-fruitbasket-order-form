const Select = ({   name,
                    value,
                    onChange,
                    options,
                    label,
                    placeholder }) => {



    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
            >
                <option value="" disabled hidden>
                    {placeholder || "Maak een keuze"}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Select;
