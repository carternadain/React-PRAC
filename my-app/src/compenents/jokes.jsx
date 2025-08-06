function Joke({ setup, punchline }) {
    return (
        <div className="joke">
            <h2>Joke of the Day</h2>
            <p>{setup}</p>
            <p>{punchline}</p>
        </div>
    );
}

export default Joke
