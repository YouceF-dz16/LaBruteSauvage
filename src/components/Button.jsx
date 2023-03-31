import styles from "./Button.module.css"
import { useState } from "react"

function Button({stat, setStat, valeurduPoint, initialStat, capitalPt, setCapitalPt}) {

    const handleClickDec = () => {
        setStat(stat - valeurduPoint)
        setCapitalPt(capitalPt+1)
    }
    const handleClickInc = () => {
        setStat(stat + valeurduPoint)
        setCapitalPt(capitalPt-1)
    }
   
    return (
        <>
        {capitalPt > 0 ? <button className={styles.increase} onClick={handleClickInc}>+{valeurduPoint}</button> : ""}
        {stat > initialStat ? <button className={styles.decrease} onClick={handleClickDec}>-{valeurduPoint}</button> : ""}
        </>
    )

}

export default Button;