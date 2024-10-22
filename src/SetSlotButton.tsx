type ButtonProps = {
    setPickedPlayersArr: (mult: number) => void;
    attempts: number;
    setAttempts: () => void;
    btnText: string;
    getPlayer: () => void;
}

function SetSlotButton({ setPickedPlayersArr, attempts: slotVerifier, setAttempts: setSlotVerifier, btnText, getPlayer }: ButtonProps) {
    return (
        <button disabled={slotVerifier <= 0} onClick={() => {
            if (slotVerifier <= 0) return
            setPickedPlayersArr(Number(btnText.charAt(btnText.length - 1)));
            setSlotVerifier();
            getPlayer();
        }}>{btnText}</button>
    )
}

export default SetSlotButton;