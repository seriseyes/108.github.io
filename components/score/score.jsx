function Score() {
    const cards = ["7", "8", "9", "T", "J", "Q", "K", "A"];

    return <div>
        <h1>Score</h1>
        {cards.map(card => <img src={"../../cards/" + card + ".png"} alt={card}/>)}
        <img src="" alt=""/>
    </div>
}