import { useEffect, useState } from "react"

function App() {
    type Player = { name: string, goals: number };
    const playersArray: Array<Player> = [{ name: 'CR7', goals: 906 }, { name: 'Messi', goals: 896 }, { name: 'Allan', goals: 1 }]
    const [currentPlayer, setCurrentPlayer] = useState<Player>({} as Player);
    const [startButtonDisabled, setStartButtonDisabled] = useState<boolean>(false);
    const [X1ButtonDisabled, setX1ButtonDisabled] = useState<boolean>(false);
    const [carrerGoalsArr, setCarrerGoalsArr] = useState<Player[]>([]);
    const [X2ButtonDisabled, setX2ButtonDisabled] = useState<boolean>(false);
    const [X3ButtonDisabled, setX3ButtonDisabled] = useState<boolean>(false);
    const [X4ButtonDisabled, setX4ButtonDisabled] = useState<boolean>(false);
    const [timeToSet, setTimeToSet] = useState<boolean>(false);

    useEffect(() => {
        setStartButtonDisabled(timeToSet);
    }, [timeToSet]);
    useEffect(() => {
        if (carrerGoalsArr.length < 3) {
            setX1ButtonDisabled(false);
        } else {
            setX1ButtonDisabled(true);
        }
    }, [carrerGoalsArr]);

    return (
        <main>
            <button className="button" disabled={startButtonDisabled} onClick={() => {
                const randomIndex = Math.floor(Math.random() * playersArray.length);
                setCurrentPlayer(playersArray[randomIndex]);
                setTimeToSet(true);
            }}>Start</button>
            <div className="current_player">{currentPlayer.name}</div>
            <div className="options">
                <button disabled={X1ButtonDisabled} onClick={() => {
                    if (timeToSet && carrerGoalsArr.length < 3) {
                        setCarrerGoalsArr(prev => {
                            const auxArr = [...prev, currentPlayer];
                            return auxArr;
                        });
                        console.log(carrerGoalsArr.length)
                        setTimeToSet(false);
                    }
                }}>X1</button>
            </div>
            <div className="slots">
                <div className="times-one">X1: {carrerGoalsArr.length > 0 ? `${carrerGoalsArr[0].name} - ${carrerGoalsArr[0].goals}` : ''}</div>
                <div className="times-one">X1: {carrerGoalsArr.length > 1 ? `${carrerGoalsArr[1].name} - ${carrerGoalsArr[1].goals}` : ''}</div>
                <div className="times-one">X1: {carrerGoalsArr.length > 2 ? `${carrerGoalsArr[2].name} - ${carrerGoalsArr[2].goals}` : ''}</div>
            </div>
        </main>
    )
}

export default App
