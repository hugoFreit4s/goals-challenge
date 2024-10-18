import { Player } from "./App"

type PickedPlayerProps = {
    pickedPlayers: Array<Player>
    allPlayers: Array<Player>
}

function PickedPlayersSlot({ pickedPlayers, allPlayers }: PickedPlayerProps) {
    return (
        <div className="player_slot">
            {pickedPlayers.map(player => {
                return <p>{`${player.name} - ${player.goals}`}</p>
            })}
        </div>
    )
}

export default PickedPlayersSlot;