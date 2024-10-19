import { Player } from "./App";
import { generateButton } from "./SixKGame";

type ButtonProps = {
    setPickedPlayersArr: (mult: number) => void;
    getPlayer: () => void;
    currentPlayer: Player;
}

function NineKGame({ setPickedPlayersArr, getPlayer, currentPlayer }: ButtonProps) {
    return (
        <div className="game_buttons" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
            {generateButton(1, setPickedPlayersArr, getPlayer, currentPlayer)}
            {generateButton(1, setPickedPlayersArr, getPlayer, currentPlayer)}
            {generateButton(1, setPickedPlayersArr, getPlayer, currentPlayer)}
            {generateButton(2, setPickedPlayersArr, getPlayer, currentPlayer)}
            {generateButton(2, setPickedPlayersArr, getPlayer, currentPlayer)}
            {generateButton(3, setPickedPlayersArr, getPlayer, currentPlayer)}
            {generateButton(3, setPickedPlayersArr, getPlayer, currentPlayer)}
            {generateButton(4, setPickedPlayersArr, getPlayer, currentPlayer)}
        </div>
    )
}

export default NineKGame;