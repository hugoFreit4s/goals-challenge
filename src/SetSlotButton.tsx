type ButtonProps = {
    setPickedPlayersArr: (mult: number) => void;
    multiplier: number;
    slotVerifier: number;
    maxLength: number;
    setSlotVerifier: () => void;
    btnText: string;
    getPlayer: () => void;
}

function SetSlotButton({ setPickedPlayersArr, multiplier, slotVerifier, maxLength, setSlotVerifier, btnText, getPlayer }: ButtonProps) {
    return (
        <button disabled={slotVerifier >= maxLength} onClick={() => {
            setPickedPlayersArr(multiplier);
            setSlotVerifier();
            getPlayer();
        }} style={{ display: maxLength <= 0 ? 'none' : 'initial' }}>{btnText}</button>
    )
}

export default SetSlotButton;