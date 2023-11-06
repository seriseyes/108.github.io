function Players() {
    const [players, setPlayers] = React.useState([]);

    React.useEffect(() => {
        setPlayers([{
            name: "Bayarkhuu"
        },{
            name: "Gereltsetseg"
        }])
    }, []);

    return <div>
        <h1>Players</h1>
        {players.map(player => <Player {...player}/>)}
    </div>
}