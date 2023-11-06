function Player(props) {
    const {player} = props;
    const [edit, setEdit] = React.useState(false);
    const [editScore, setEditScore] = React.useState(false);
    const [newName, setNewName] = React.useState(player.name);
    const [newScore, setNewScore] = React.useState(player.score)

    const save = (score) => {
        const currentPlayer = localStorage.getItem(player.id);
        const newPlayer = {
            ...JSON.parse(currentPlayer),
            name: newName
        }
        if (newPlayer.score === null) {
            newPlayer.score = 0;
        }

        if (score.force) {
            newPlayer.score = newScore;
            props.onUpdate(newPlayer);
        } else {
            if (score.score) {
                newPlayer.score += score.score;
                if (newPlayer.score === 108) {
                    newPlayer.score = 54;
                    props.onUpdate(newPlayer);
                    alert(player.name + " -н оноо яг 108 болсон тул оноог 54 болгов.")
                } else if (newPlayer.score === 54) {
                    newPlayer.score = 0;
                    props.onUpdate(newPlayer);
                    alert(player.name + " -н оноо яг 54 болсон тул оноог 0 болгов.")
                } else if (newPlayer.score > 108) {
                    props.onUpdate(newPlayer);
                    alert(player.name + " -н оноо 108 давж хожигдлоо.")
                } else {
                    props.onUpdate(newPlayer);
                }
            } else props.onUpdate(newPlayer);
        }

        setEdit(false);
        setEditScore(false);
    }

    const onDelete = () => {
        props.onDelete(player.id);
    }

    return <div style={{display: "flex", width: "100%",}}>
        <div
            className={"player"}
        >
            <div
                style={{display: "flex", alignItems: "center", gap: 10}}
            >
                <img
                    src={`https://ui-avatars.com/api/?name=${player.name}`}
                    alt={player.name}
                    className={"avatar"}
                />
                <div className={"playerName"}>
                    {edit
                        ? <input autoFocus type="text" defaultValue={player.name}
                                 onBlur={e => setNewName(e.target.value)}/>
                        : player.name}

                    {edit
                        ? <button onClick={save} className={"save"}>&#10003;</button>
                        : <button onClick={() => setEdit(true)} className={"edit"}>&#9998;</button>
                    }
                </div>
                <div style={player.score >= 108 ? {color: "#F04747"} : undefined} className={"playerScore"}>
                    {editScore ? <input value={newScore} onChange={e => setNewScore(e.target.value)} type="number"/> : "Нийт оноо: " + player.score}
                    {editScore
                        ? <button onClick={() => save({force: true})} className={"save"}>&#10003;</button>
                        : <button onClick={() => setEditScore(true)} className={"edit"}>&#9998;</button>
                    }
                </div>
            </div>
            <Score onSave={save}/>
        </div>
        <button onClick={onDelete} className={"close"}>&#9932;</button>
    </div>
}