function Score(props) {
    const cards = [
        {name: "8", score: 8},
        {name: "9", score: 9},
        {name: "T", score: 10},
        {name: "J", score: 2},
        {name: "Q", score: 30},
        {name: "QN", score: -30},
        {name: "K", score: 4},
        {name: "A", score: 11},
    ];
    const [score, setScore] = React.useState(0);
    const [big, setBig] = React.useState(false);

    const onDone = () => {
        props.onSave({score});
        setScore(0);
    }

    React.useEffect(() => {
        setTimeout(() => {
            setBig(false);
        }, 500);
    }, [big]);

    return <div>
        <h4>Оноо нэмэх</h4>
        {cards.map(card => <img
            onClick={() => {
                setScore(p => p + card.score);
                setBig(true);
            }}
            className={"card"} src={"./cards/" + card.name + ".png"}
            alt={card}
        />)}
        {score !== 0 ? <div style={{display: "flex", gap: 10, alignItems: "center"}}>
            <div className={`score ${big ? "scoreBig" : ""}`}>{score}</div>
            <button className={"scoreAdd"} onClick={onDone}>&#43; Нэмэх</button>
            <button className={"scoreReset"} onClick={onDone}>&#10005; Цэвэрлэх</button>
        </div> : null}
    </div>
}