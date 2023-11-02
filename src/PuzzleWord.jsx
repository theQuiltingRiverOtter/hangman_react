function PuzzleWord({ puzzleString, guessed }) {

    return (
        <div className="puzzleWord">
            <p>
                {puzzleString.split("").map((ltr) => {
                    if (guessed.includes(ltr)) {
                        return ltr + " ";
                    } else {
                        return "_ "
                    }
                })}
            </p>
        </div>
    )
}

export default PuzzleWord