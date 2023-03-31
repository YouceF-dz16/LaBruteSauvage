import { useState } from 'react'

import styles from "./Hero.module.css"
import Button from "./Button"

function Hero({ img, name, alt, level, stats: { lifePoints, attackDamage, shield } }) {
    
    const [lifePt, setLifePt] = useState(lifePoints);
    const [attackDmg, setAttackDmg] = useState(attackDamage);
    const [shieldPt, setShieldPt] = useState(shield);

    const [capitalPt, setCapitalPt] = useState(level * 5);

    return (
        <div className={styles.wrapper}>
            {/* <img src={img} alt={name} /> */}
            <figure>
              <img src={img} alt={alt} />
              <figcaption>{name} - level {level}</figcaption>
              </figure>
            <ul>
                <li>❤️ {lifePt} <Button valeurduPoint={5} stat={lifePt} setStat={setLifePt} initialStat={lifePoints} capitalPt={capitalPt} setCapitalPt={setCapitalPt}/></li>
                <li>⚔️ {attackDmg} <Button valeurduPoint={1} stat={attackDmg} setStat={setAttackDmg} initialStat={attackDamage} capitalPt={capitalPt} setCapitalPt={setCapitalPt} /></li>
                <li>🛡️ {shieldPt} <Button valeurduPoint={2} stat={shieldPt} setStat={setShieldPt} initialStat={shield} capitalPt={capitalPt} setCapitalPt={setCapitalPt} /></li>
               <li> Capital: {capitalPt}</li>
            </ul>
        </div>
    )
}

export default Hero;