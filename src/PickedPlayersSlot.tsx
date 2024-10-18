import { Player } from "./App"

type PickedPlayerProps = {
    pickedPlayers: Array<Player>
    allPlayers: Array<Player>
}

function PickedPlayersSlot({ pickedPlayers, allPlayers }: PickedPlayerProps) {
    return (
        <div className="player_slot">
            {pickedPlayers.map(pickedPlayer => {
                let playerString = null;
                allPlayers.forEach(player => {
                    if (pickedPlayer.id === player.id) {
                        if (pickedPlayer.goals === player.goals) {
                            playerString = <p>{`X1: ${player.name} - ${player.goals}`}</p>;
                        } else if (player.goals * 2 === pickedPlayer.goals) {
                            playerString = <p>{`X2: ${player.name} - ${player.goals}`}</p>;
                        } else if (player.goals * 3 === pickedPlayer.goals) {
                            playerString = <p>{`X3: ${player.name} - ${player.goals}`}</p>;
                        } else if (player.goals * 4 === pickedPlayer.goals) {
                            playerString = <p>{`X4: ${player.name} - ${player.goals}`}</p>;
                        }
                    }
                });
                return playerString;
            })}
        </div>
    )
}

export default PickedPlayersSlot;