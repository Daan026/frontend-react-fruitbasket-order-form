import 'react';
import Button from "./button/Button.jsx";

const Fruit = ({fruitcount, setfruitcount , }) => {
    return (
        <>
            <Button
                name='-'
                button='button'
                onClick={() => setfruitcount(fruitcount - 1)}
                disabled={fruitcount === 0}
            />
            <p>{fruitcount}</p>
            <Button
                name='+'
                button='button'
                onClick={() => setfruitcount(fruitcount + 1)}

            />
        </>
    );
};

export default Fruit;
