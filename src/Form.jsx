function Form({ handleSubmit }) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" maxLength="1" minLength="1" />
            <button>Guess</button>
        </form>
    )
}
export default Form