import { Player } from "./App";

type ButtonProps = {
    setPickedPlayersArr: () => void;
    btnText: string;
    getPlayer: () => void;
    currentPlayer: Player;
    multiplier: number;
    triggerX1Button: () => void;
}

function SetSlotButton({ setPickedPlayersArr, btnText, getPlayer, currentPlayer, multiplier, triggerX1Button }: ButtonProps) {
    return (
        <button onClick={(e) => {
            setPickedPlayersArr();
            getPlayer();
            triggerX1Button();
            e.currentTarget.textContent = `${currentPlayer.name} (${currentPlayer.goals * multiplier})`;
            e.currentTarget.disabled = true;
        }}>{btnText}</button>
    )
}

export default SetSlotButton;