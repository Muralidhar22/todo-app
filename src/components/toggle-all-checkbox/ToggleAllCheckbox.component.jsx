import { useContext, useState, useEffect } from "react";
import { TodoListContext } from "../../contexts/todoList.context";
import styles from "./ToggleAllCheckbox.styles.module.css";

const ToggleAllCheckbox = () => {
    const { toggleAllCheckBox } = useContext(TodoListContext)
    const [checked, setChecked] = useState(false)
    
    useEffect(()=>{
        toggleAllCheckBox(checked)
    },[checked])

    return(
        <label htmlFor="check-box" className={styles.allLabel}> 
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            All
        </label>
    )
}

export default ToggleAllCheckbox;