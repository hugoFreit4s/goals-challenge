type ButtonProps = {
    setPickedPlayersArr: (mult: number) => void;
    slotVerifier: number;
    maxLength: number;
    setSlotVerifier: () => void;
    btnText: string;
    getPlayer: () => void;
}

function SetSlotButton({ setPickedPlayersArr, slotVerifier, maxLength, setSlotVerifier, btnText, getPlayer }: ButtonProps) {
    return (
        <button disabled={slotVerifier >= maxLength} onClick={() => {
            setPickedPlayersArr(Number(btnText.charAt(btnText.length - 1)));
            setSlotVerifier();
            getPlayer();
        }} style={{ display: maxLength <= 0 ? 'none' : 'initial' }}>{btnText}</button>
    )
}

export default SetSlotButton;