import 'react';

const Textarea = ({ name, value, onChange, placeholder, rows = 8, cols = 30 }) => {
    return (
        <label>
            <textarea
                className="fixed-size"
                name={name}
                value={value}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                onChange={onChange}
            ></textarea>
        </label>
    );
};

export default Textarea;
