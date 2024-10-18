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
                            playerString = <p>{`Career: ${pickedPlayer.name} (${pickedPlayer.goals})`}</p>;
                        } else if (player.goals * 2 === pickedPlayer.goals) {
                            playerString = <p>{`Double: ${pickedPlayer.name} (${pickedPlayer.goals})`}</p>;
                        } else if (player.goals * 3 === pickedPlayer.goals) {
                            playerString = <p>{`Triple: ${pickedPlayer.name} (${pickedPlayer.goals})`}</p>;
                        } else if (player.goals * 4 === pickedPlayer.goals) {
                            playerString = <p>{`Quad: ${pickedPlayer.name} (${pickedPlayer.goals})`}</p>;
                        } else {
                            playerString = <p>{`xFive: ${pickedPlayer.name} (${pickedPlayer.goals})`}</p>;
                        }
                    }
                });
                return playerString;
            })}
        </div>
    )
}

export default PickedPlayersSlot;