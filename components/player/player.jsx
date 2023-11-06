function Player(player) {
    return <div
        className={"player"}
    >
        <img
            src={`https://ui-avatars.com/api/?name=${player.name}`}
            alt={player.name}
            className={"avatar"}
        />
        <div className={"playerName"}>
            {player.name}
        </div>
        <div className={"playerScore"}>
            {player.score}
        </div>
    </div>
}