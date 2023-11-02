function GuessedLetters({ puzzleString, guessed }) {
    const notInWord = guessed.filter((ltr) => !puzzleString.includes(ltr))
    return (
        <div className="guessed">
            <h2>Not in Word</h2>
            <div className="guessedContainer">
                {
                    notInWord.map((ltr, idx) => (
                        <div key={idx}>{ltr}</div>
                    ))
                }
            </div>

        </div>
    )
}
export default GuessedLetters