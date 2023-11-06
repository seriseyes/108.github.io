function Players() {
    const [players, setPlayers] = React.useState([]);

    React.useEffect(() => {
        const localPlayers = Object.values({...localStorage});
        if (localPlayers) {
            if (localPlayers.length === 0) {
                addPlayer();
            } else {
                setPlayers(localPlayers.map(player => JSON.parse(player)));
            }
        }
    }, []);

    const addPlayer = () => {
        const newPlayer = {
            id: Math.random().toString(),
            name: "New Player",
            score: 0
        };
        setPlayers([...players, newPlayer]);
        localStorage.setItem(newPlayer.id, JSON.stringify(newPlayer));
    }

    const onUpdate = (newPlayer) => {
        const newPlayers = players.map(player => {
            if (player.id === newPlayer.id) {
                return newPlayer;
            }
            return player;
        });
        setPlayers(newPlayers);
        localStorage.setItem(newPlayer.id, JSON.stringify(newPlayer));
    }

    const resetAllScores = () => {
        const newPlayers = players.map(player => {
            player.score = 0;
            return player;
        });
        setPlayers(newPlayers);
        newPlayers.forEach(player => localStorage.setItem(player.id, JSON.stringify(player)));
    }

    const onDelete = (playerId) => {
        const newPlayers = players.filter(player => player.id !== playerId);
        setPlayers(newPlayers);
        localStorage.removeItem(playerId);
    }

    return <div className={"players"}>
        <div style={{display: "flex", gap: 10, alignItems: "center"}}>
            <h1>Тоглогч нар</h1>
            <button onClick={resetAllScores} className={"resetAll"}>Бүх тоглогчийн оноог дахин эхлүүлэх</button>
        </div>
        {players.map(player => <Player player={player} onUpdate={onUpdate} onDelete={onDelete}/>)}
        <button
            onClick={addPlayer}
            className="button-53" role="button"
        >
            Тоглогч нэмэх
        </button>
    </div>
}