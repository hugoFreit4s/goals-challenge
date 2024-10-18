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
                            playerString = <p>{`X1: ${pickedPlayer.name} - ${pickedPlayer.goals}`}</p>;
                        } else if (player.goals * 2 === pickedPlayer.goals) {
                            playerString = <p>{`X2: ${pickedPlayer.name} - ${pickedPlayer.goals}`}</p>;
                        } else if (player.goals * 3 === pickedPlayer.goals) {
                            playerString = <p>{`X3: ${pickedPlayer.name} - ${pickedPlayer.goals}`}</p>;
                        } else if (player.goals * 4 === pickedPlayer.goals) {
                            playerString = <p>{`X4: ${pickedPlayer.name} - ${pickedPlayer.goals}`}</p>;
                        } else {
                            playerString = <p>{`X5: ${pickedPlayer.name} - ${pickedPlayer.goals}`}</p>;
                        }
                    }
                });
                return playerString;
            })}
        </div>
    )
}

export default PickedPlayersSlot;