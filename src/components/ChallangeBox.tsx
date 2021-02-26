import styles from "../styles/components/ChallangeBox.module.css";

export function ChallangeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challangeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>{" "}
          <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </div>
      )}
    </div>
  );
}
