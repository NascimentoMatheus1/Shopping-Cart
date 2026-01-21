import styles from './IncrementInput.module.css';

function IncrementInput({ id, value, onChange }) {
    function handleInputChange(e) {
        let newValue = parseInt(e.target.value, 10) || 0;
        newValue = newValue > 100 ? 100 : newValue;
        onChange(id, newValue);
    }

    function inputValueAdd() {
        const newValue = value + 1 > 100 ? 100 : value + 1;
        onChange(id, newValue);
    }

    function inputValueSub() {
        const newValue = value - 1 < 1 ? 1 : value - 1;
        onChange(id, newValue);
    }

    return (
        <div className={styles.componentContainer}>
            <button onClick={inputValueSub} className={styles.subButton}>
                -
            </button>
            <input
                type="number"
                className={styles.numberInput}
                min="1"
                max="100"
                value={value}
                onChange={handleInputChange}
            />
            <button onClick={inputValueAdd} className={styles.addButton}>
                +
            </button>
        </div>
    );
}

export default IncrementInput;
