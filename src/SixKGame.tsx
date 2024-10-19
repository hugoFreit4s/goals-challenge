import { Player } from "./App";
import SetSlotButton from "./SetSlotButton";

type ButtonProps = {
    setPickedPlayersArr: (mult: number) => void;
    getPlayer: () => void;
    currentPlayer: Player;
    triggerX1Button: () => void;
}

export function generateButton(multiplier: number, setPickedPlayersArr: (mult: number) => void, getPlayer: () => void, currentPlayer: Player, triggerX1Button: () => void) {
    let buttonTextContent = '';
    if (multiplier === 1) {
        buttonTextContent = 'Carrer';
    } else if (multiplier === 2) {
        buttonTextContent = 'Double';
    } else if (multiplier === 3) {
        buttonTextContent = 'Triple';
    } else if (multiplier === 4) {
        buttonTextContent = 'Quad';
    } else if (multiplier === 5) {
        buttonTextContent = 'xFive';
    }
    return (
        <SetSlotButton
            setPickedPlayersArr={() => setPickedPlayersArr(multiplier)}
            btnText={buttonTextContent}
            getPlayer={getPlayer}
            currentPlayer={currentPlayer}
            multiplier={multiplier}
            triggerX1Button={triggerX1Button} />
    )
}

function SixKGame({ setPickedPlayersArr, getPlayer, currentPlayer, triggerX1Button }: ButtonProps) {
    return (
        <div className="game_buttons" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
            {generateButton(1, setPickedPlayersArr, getPlayer, currentPlayer, triggerX1Button)}
            {generateButton(1, setPickedPlayersArr, getPlayer, currentPlayer, triggerX1Button)}
            {generateButton(1, setPickedPlayersArr, getPlayer, currentPlayer, triggerX1Button)}
            {generateButton(2, setPickedPlayersArr, getPlayer, currentPlayer, triggerX1Button)}
            {generateButton(2, setPickedPlayersArr, getPlayer, currentPlayer, triggerX1Button)}
            {generateButton(3, setPickedPlayersArr, getPlayer, currentPlayer, triggerX1Button)}
            {generateButton(3, setPickedPlayersArr, getPlayer, currentPlayer, triggerX1Button)}
        </div>
    )
}

export default SixKGame;