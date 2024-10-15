import { useEffect, useState } from "react"

function App() {
    type Player = { name: string, goals: number };
    const playersArray: Array<Player> = [{ name: 'CR7', goals: 906 }, { name: 'Messi', goals: 896 }, { name: 'Allan', goals: 1 }]
    const [pickedPlayersArr, setPickedPlayersArr] = useState<Player[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<Player>({} as Player);
    const [startButtonDisabled, setStartButtonDisabled] = useState<boolean>(false);
    const [X1ButtonDisabled, setX1ButtonDisabled] = useState<boolean>(false);
    const [carrerGoalsArr, setCarrerGoalsArr] = useState<Player[]>([]);
    const [X2ButtonDisabled, setX2ButtonDisabled] = useState<boolean>(false);
    const [doubleGoalsArr, setDoubleGoalsArr] = useState<Player[]>([]);
    const [X3ButtonDisabled, setX3ButtonDisabled] = useState<boolean>(false);
    const [tripleGoalsArr, setTripleGoalsArr] = useState<Player[]>([]);
    const [X4ButtonDisabled, setX4ButtonDisabled] = useState<boolean>(false);
    const [quadrupleGoalsArr, setQuadrupleGoalsArr] = useState<Player[]>([]);
    const [timeToSet, setTimeToSet] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    useEffect(() => {
        setStartButtonDisabled(timeToSet);
    }, [timeToSet]);

    useEffect(() => {
        if (carrerGoalsArr.length < 3) {
            setX1ButtonDisabled(false);
        } else {
            setX1ButtonDisabled(true);
        }

        if (doubleGoalsArr.length < 2) {
            setX2ButtonDisabled(false);
        } else {
            setX2ButtonDisabled(true);
        }

        if (tripleGoalsArr.length < 2) {
            setX3ButtonDisabled(false);
        } else {
            setX3ButtonDisabled(true);
        }

        if (quadrupleGoalsArr.length < 1) {
            setX4ButtonDisabled(false);
        } else {
            setX4ButtonDisabled(true);
        }
    }, [carrerGoalsArr, doubleGoalsArr, tripleGoalsArr, quadrupleGoalsArr]);

    useEffect(() => {
        if (pickedPlayersArr.length >= 8) {
            let acc = 0
            pickedPlayersArr.forEach(player => {
                acc += player.goals;
            });
            setResult(acc);
        }
    }, [pickedPlayersArr])

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
                        setPickedPlayersArr(prev => {
                            const auxArr = [...prev, currentPlayer];
                            return auxArr;
                        });
                        setTimeToSet(false);
                    }
                }}>X1</button>
                <button disabled={X2ButtonDisabled} onClick={() => {
                    if (timeToSet && doubleGoalsArr.length < 2) {
                        setDoubleGoalsArr(prev => {
                            const auxArr = [...prev, currentPlayer];
                            auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * 2 };
                            return auxArr;
                        });
                        setPickedPlayersArr(prev => {
                            const auxArr = [...prev, currentPlayer];
                            auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * 2 };
                            return auxArr;
                        });
                        setTimeToSet(false);
                    }
                }}>X2</button>
                <button disabled={X3ButtonDisabled} onClick={() => {
                    if (timeToSet && tripleGoalsArr.length < 2) {
                        setTripleGoalsArr(prev => {
                            const auxArr = [...prev, currentPlayer];
                            auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * 3 };
                            return auxArr;
                        });
                        setPickedPlayersArr(prev => {
                            const auxArr = [...prev, currentPlayer];
                            auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * 3 };
                            return auxArr;
                        });
                        setTimeToSet(false);
                    }
                }}>X3</button>
                <button disabled={X4ButtonDisabled} onClick={() => {
                    if (timeToSet && quadrupleGoalsArr.length < 1) {
                        setQuadrupleGoalsArr(prev => {
                            const auxArr = [...prev, currentPlayer];
                            auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * 4 };
                            return auxArr;
                        });
                        setPickedPlayersArr(prev => {
                            const auxArr = [...prev, currentPlayer];
                            auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * 4 };
                            return auxArr;
                        });
                        setTimeToSet(false);
                    }
                }}>X4</button>
            </div>
            <div className="slots">
                <div className="times-one">X1: {carrerGoalsArr.length > 0 ? `${carrerGoalsArr[0].name} - ${carrerGoalsArr[0].goals}` : ''}</div>
                <div className="times-one">X1: {carrerGoalsArr.length > 1 ? `${carrerGoalsArr[1].name} - ${carrerGoalsArr[1].goals}` : ''}</div>
                <div className="times-one">X1: {carrerGoalsArr.length > 2 ? `${carrerGoalsArr[2].name} - ${carrerGoalsArr[2].goals}` : ''}</div>
                <div className="times-one">X2: {doubleGoalsArr.length > 0 ? `${doubleGoalsArr[0].name} - ${doubleGoalsArr[0].goals}` : ''}</div>
                <div className="times-one">X2: {doubleGoalsArr.length > 1 ? `${doubleGoalsArr[1].name} - ${doubleGoalsArr[1].goals}` : ''}</div>
                <div className="times-one">X3: {tripleGoalsArr.length > 0 ? `${tripleGoalsArr[0].name} - ${tripleGoalsArr[0].goals}` : ''}</div>
                <div className="times-one">X3: {tripleGoalsArr.length > 1 ? `${tripleGoalsArr[1].name} - ${tripleGoalsArr[1].goals}` : ''}</div>
                <div className="times-one">X4: {quadrupleGoalsArr.length > 0 ? `${quadrupleGoalsArr[0].name} - ${quadrupleGoalsArr[0].goals}` : ''}</div>
            </div>
            <p>{result}</p>
            <p>{result >= 9000 ? 'You Win!' : 'You Lose!'}</p>
        </main>
    )
}

export default App;
