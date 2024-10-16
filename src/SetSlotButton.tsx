type ButtonProps = {
    timeToSet: boolean;
    setTimeToSet: () => void;
    setPickedPlayersArr: (mult: number) => void;
    multiplier: number;
    slotVerifier: number;
    maxLength: number;
    setSlotVerifier: () => void;
    btnText: string;
}

function SetSlotButton({ setTimeToSet, timeToSet, setPickedPlayersArr, multiplier, slotVerifier, maxLength, setSlotVerifier, btnText }: ButtonProps) {
    return (
        <button disabled={slotVerifier >= maxLength || !timeToSet} onClick={() => {
            setPickedPlayersArr(multiplier);
            setTimeToSet();
            setSlotVerifier();
        }}>{btnText}</button>
    )
}

export default SetSlotButton;