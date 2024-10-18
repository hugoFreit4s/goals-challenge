import { useEffect, useState } from "react"
import SetSlotButton from "./SetSlotButton";

function App() {
    type Player = { id: string, name: string, goals: number };
    const playersArray: Array<Player> = [
        { id: crypto.randomUUID(), name: 'Cristiano Ronaldo', goals: 906 },
        { id: crypto.randomUUID(), name: 'Lionel Messi', goals: 896 },
        { id: crypto.randomUUID(), name: 'Pelé', goals: 767 },
        { id: crypto.randomUUID(), name: 'Romário', goals: 772 },
        { id: crypto.randomUUID(), name: 'Ferenc Puskás', goals: 746 },
        { id: crypto.randomUUID(), name: 'Ronaldo Nazário', goals: 414 },
        { id: crypto.randomUUID(), name: 'Josef Bican', goals: 805 },
        { id: crypto.randomUUID(), name: 'Gerd Müller', goals: 735 },
        { id: crypto.randomUUID(), name: 'Robert Lewandowski', goals: 598 },
        { id: crypto.randomUUID(), name: 'Luis Suárez', goals: 520 },
        { id: crypto.randomUUID(), name: 'Zlatan Ibrahimović', goals: 573 },
        { id: crypto.randomUUID(), name: 'Neymar', goals: 436 },
        { id: crypto.randomUUID(), name: 'Eusébio', goals: 622 },
        { id: crypto.randomUUID(), name: 'Kylian Mbappé', goals: 300 },
        { id: crypto.randomUUID(), name: 'Erling Haaland', goals: 250 },
        { id: crypto.randomUUID(), name: 'Karim Benzema', goals: 426 },
        { id: crypto.randomUUID(), name: 'Thierry Henry', goals: 411 },
        { id: crypto.randomUUID(), name: 'Gabriel Batistuta', goals: 356 },
        { id: crypto.randomUUID(), name: 'Sergio Agüero', goals: 427 },
        { id: crypto.randomUUID(), name: 'Edinson Cavani', goals: 428 },
        { id: crypto.randomUUID(), name: 'Raúl', goals: 404 },
        { id: crypto.randomUUID(), name: 'David Villa', goals: 376 },
        { id: crypto.randomUUID(), name: 'Ruud van Nistelrooy', goals: 347 },
        { id: crypto.randomUUID(), name: 'Andriy Shevchenko', goals: 372 },
        { id: crypto.randomUUID(), name: 'Samuel Eto\'o', goals: 426 },
        { id: crypto.randomUUID(), name: 'Wayne Rooney', goals: 366 },
        { id: crypto.randomUUID(), name: 'Roberto Baggio', goals: 318 },
        { id: crypto.randomUUID(), name: 'Ronaldinho', goals: 299 },
        { id: crypto.randomUUID(), name: 'Paolo Rossi', goals: 134 },
        { id: crypto.randomUUID(), name: 'Marco van Basten', goals: 277 },
        { id: crypto.randomUUID(), name: 'Sándor Kocsis', goals: 558 },
        { id: crypto.randomUUID(), name: 'Uwe Seeler', goals: 575 },
        { id: crypto.randomUUID(), name: 'Ademir de Menezes', goals: 401 },
        { id: crypto.randomUUID(), name: 'Romelu Lukaku', goals: 368 },
        { id: crypto.randomUUID(), name: 'Eden Hazard', goals: 185 },
        { id: crypto.randomUUID(), name: 'Angel Di Maria', goals: 126 },
        { id: crypto.randomUUID(), name: 'Alfredo Di Stefano', goals: 493 },
        { id: crypto.randomUUID(), name: 'Philippe Coutinho', goals: 121 },
        { id: crypto.randomUUID(), name: 'Toni Kroos', goals: 100 },
        { id: crypto.randomUUID(), name: 'Casemiro', goals: 46 },
        { id: crypto.randomUUID(), name: 'Riyad Mahrez', goals: 140 },
        { id: crypto.randomUUID(), name: 'Sergio Busquets', goals: 18 },
        { id: crypto.randomUUID(), name: 'N’Golo Kanté', goals: 24 },
        { id: crypto.randomUUID(), name: 'Thomas Müller', goals: 277 },
        { id: crypto.randomUUID(), name: 'Miroslav Klose', goals: 277 },
        { id: crypto.randomUUID(), name: 'Marco Reus', goals: 159 },
        { id: crypto.randomUUID(), name: 'Lautaro Martínez', goals: 149 },
        { id: crypto.randomUUID(), name: 'João Félix', goals: 80 },
        { id: crypto.randomUUID(), name: 'Paulo Dybala', goals: 152 },
        { id: crypto.randomUUID(), name: 'Roberto Firmino', goals: 164 },
        { id: crypto.randomUUID(), name: 'Paolo Maldini', goals: 40 },
        { id: crypto.randomUUID(), name: 'Alessandro Nesta', goals: 20 },
        { id: crypto.randomUUID(), name: 'Fabio Cannavaro', goals: 15 },
        { id: crypto.randomUUID(), name: 'Marquinhos', goals: 38 },
        { id: crypto.randomUUID(), name: 'Leonardo Bonucci', goals: 42 },
        { id: crypto.randomUUID(), name: 'Virgil van Dijk', goals: 50 },
        { id: crypto.randomUUID(), name: 'Raphaël Varane', goals: 29 },
        { id: crypto.randomUUID(), name: 'Kalidou Koulibaly', goals: 23 },
        { id: crypto.randomUUID(), name: 'Douglas Costa', goals: 56 },
        { id: crypto.randomUUID(), name: 'Aymeric Laporte', goals: 25 },
        { id: crypto.randomUUID(), name: 'Ben Chilwell', goals: 14 },
        { id: crypto.randomUUID(), name: 'Reece James', goals: 13 },
        { id: crypto.randomUUID(), name: 'Matthijs de Ligt', goals: 21 },
        { id: crypto.randomUUID(), name: 'Achraf Hakimi', goals: 28 },
        { id: crypto.randomUUID(), name: 'Andrew Robertson', goals: 12 },
        { id: crypto.randomUUID(), name: 'Jordi Alba', goals: 27 },
        { id: crypto.randomUUID(), name: 'César Azpilicueta', goals: 18 },
        { id: crypto.randomUUID(), name: 'Antonio Rüdiger', goals: 19 },
        { id: crypto.randomUUID(), name: 'Trent Alexander-Arnold', goals: 15 },
        { id: crypto.randomUUID(), name: 'Luke Shaw', goals: 8 },
        { id: crypto.randomUUID(), name: 'Giorgio Chiellini', goals: 37 },
        { id: crypto.randomUUID(), name: 'Bruno Fernandes', goals: 120 },
        { id: crypto.randomUUID(), name: 'Jadon Sancho', goals: 65 },
        { id: crypto.randomUUID(), name: 'Marcus Rashford', goals: 120 },
        { id: crypto.randomUUID(), name: 'Bukayo Saka', goals: 40 },
        { id: crypto.randomUUID(), name: 'Raheem Sterling', goals: 140 },
        { id: crypto.randomUUID(), name: 'Jack Grealish', goals: 40 },
        { id: crypto.randomUUID(), name: 'Phil Foden', goals: 60 },
        { id: crypto.randomUUID(), name: 'Mason Mount', goals: 55 },
        { id: crypto.randomUUID(), name: 'Jude Bellingham', goals: 30 },
        { id: crypto.randomUUID(), name: 'Kai Havertz', goals: 75 },
        { id: crypto.randomUUID(), name: 'Tammy Abraham', goals: 90 },
        { id: crypto.randomUUID(), name: 'Victor Osimhen', goals: 110 },
        { id: crypto.randomUUID(), name: 'Wilfried Zaha', goals: 70 },
        { id: crypto.randomUUID(), name: 'Jamie Vardy', goals: 190 },
        { id: crypto.randomUUID(), name: 'Youri Tielemans', goals: 40 },
        { id: crypto.randomUUID(), name: 'Willian', goals: 123 },
        { id: crypto.randomUUID(), name: 'Harvey Barnes', goals: 40 },
        { id: crypto.randomUUID(), name: 'Ollie Watkins', goals: 65 },
        { id: crypto.randomUUID(), name: 'Ivan Toney', goals: 85 },
        { id: crypto.randomUUID(), name: 'Alexander Isak', goals: 75 },
        { id: crypto.randomUUID(), name: 'Martin Ødegaard', goals: 50 },
        { id: crypto.randomUUID(), name: 'Garrincha', goals: 232 },
        { id: crypto.randomUUID(), name: 'Gabriel Jesus', goals: 120 },
        { id: crypto.randomUUID(), name: 'Richarlison', goals: 85 },
        { id: crypto.randomUUID(), name: 'Dominic Calvert-Lewin', goals: 70 },
        { id: crypto.randomUUID(), name: 'Raphinha', goals: 60 },
        { id: crypto.randomUUID(), name: 'Rodri', goals: 25 },
        { id: crypto.randomUUID(), name: 'Declan Rice', goals: 15 },
        { id: crypto.randomUUID(), name: 'Kalvin Phillips', goals: 10 },
        { id: crypto.randomUUID(), name: 'Fabinho', goals: 30 },
        { id: crypto.randomUUID(), name: 'Thiago Alcântara', goals: 25 },
        { id: crypto.randomUUID(), name: 'Georginio Wijnaldum', goals: 70 },
        { id: crypto.randomUUID(), name: 'Jorginho', goals: 34 },
        { id: crypto.randomUUID(), name: 'Yves Bissouma', goals: 10 },
        { id: crypto.randomUUID(), name: 'Enzo Fernández', goals: 15 },
        { id: crypto.randomUUID(), name: 'Zico', goals: 476 },
        { id: crypto.randomUUID(), name: 'Casemiro', goals: 46 },
        { id: crypto.randomUUID(), name: 'Lucas Paquetá', goals: 55 },
        { id: crypto.randomUUID(), name: 'Rodrygo', goals: 45 },
        { id: crypto.randomUUID(), name: 'Vinícius Júnior', goals: 85 },
        { id: crypto.randomUUID(), name: 'Federico Valverde', goals: 35 },
        { id: crypto.randomUUID(), name: 'Eduardo Camavinga', goals: 15 },
        { id: crypto.randomUUID(), name: 'Aurelien Tchouameni', goals: 20 },
        { id: crypto.randomUUID(), name: 'Pedri', goals: 25 },
        { id: crypto.randomUUID(), name: 'Gavi', goals: 15 },
        { id: crypto.randomUUID(), name: 'Hulk', goals: 377 },
        { id: crypto.randomUUID(), name: 'Ansu Fati', goals: 35 },
        { id: crypto.randomUUID(), name: 'Ferran Torres', goals: 45 },
        { id: crypto.randomUUID(), name: 'Ousmane Dembélé', goals: 60 },
        { id: crypto.randomUUID(), name: 'Memphis Depay', goals: 145 },
        { id: crypto.randomUUID(), name: 'Gonzalo Higuaín', goals: 336 },
        { id: crypto.randomUUID(), name: 'Karim Adeyemi', goals: 50 },
        { id: crypto.randomUUID(), name: 'Christopher Nkunku', goals: 85 },
        { id: crypto.randomUUID(), name: 'Randal Kolo Muani', goals: 50 },
        { id: crypto.randomUUID(), name: 'Dusan Vlahovic', goals: 105 },
        { id: crypto.randomUUID(), name: 'Federico Chiesa', goals: 60 },
        { id: crypto.randomUUID(), name: 'Lorenzo Insigne', goals: 135 },
        { id: crypto.randomUUID(), name: 'Ciro Immobile', goals: 240 },
        { id: crypto.randomUUID(), name: 'Andrea Belotti', goals: 120 },
        { id: crypto.randomUUID(), name: 'Sandro Tonali', goals: 25 },
        { id: crypto.randomUUID(), name: 'Adrien Rabiot', goals: 40 },
        { id: crypto.randomUUID(), name: 'Manuel Locatelli', goals: 25 },
        { id: crypto.randomUUID(), name: 'Sergej Milinkovic-Savic', goals: 80 },
        { id: crypto.randomUUID(), name: 'Rafael Leão', goals: 85 },
        { id: crypto.randomUUID(), name: 'Domenico Berardi', goals: 125 },
        { id: crypto.randomUUID(), name: 'Paulo Dybala', goals: 152 },
        { id: crypto.randomUUID(), name: 'Giorgio Chiellini', goals: 37 },
        { id: crypto.randomUUID(), name: 'Leonardo Bonucci', goals: 42 },
        { id: crypto.randomUUID(), name: 'Paul Pogba', goals: 87 },
    ];



    const [pickedPlayersArr, setPickedPlayersArr] = useState<Player[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<Player>({} as Player);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);
    const [goal, setGoal] = useState<number>(6000);
    const [X1, setX1] = useState<number>(0);
    const [maxX1, setMaxX1] = useState<number>(3);
    const [X2, setX2] = useState<number>(0);
    const [maxX2, setMaxX2] = useState<number>(3);
    const [X3, setX3] = useState<number>(0);
    const [maxX3, setMaxX3] = useState<number>(2);
    const [X4, setX4] = useState<number>(0);
    const [maxX4, setMaxX4] = useState<number>(0);
    const [highestScore, setHighestScore] = useState<number>(0);
    const [maxArrLength, setMaxArrLength] = useState<number>(maxX1 + maxX2 + maxX3 + maxX4);


    useEffect(() => {
        if (pickedPlayersArr.length >= maxArrLength) {
            let acc = 0
            pickedPlayersArr.forEach(player => {
                acc += player.goals;
            });
            setResult(acc);
            setHighestScore(acc > highestScore ? acc : highestScore);
            setGameStarted(false);
        }

        setPickedPlayersArr((prev) => {
            const auxArr = [...prev]
            for (let i = 0; i < auxArr.length; i++) {
                for (let j = 0; j < auxArr.length; j++) {
                    if (auxArr[j].goals > auxArr[i].goals) {
                        let aux = auxArr[j];
                        auxArr[j] = auxArr[i];
                        auxArr[i] = { ...aux };
                    }
                }
            }
            return auxArr;
        });
    }, [X1, X2, X3, X4]);

    useEffect(() => {
        setMaxArrLength(Number(maxX1 + maxX2 + maxX3 + maxX4));
    }, [maxX1, maxX2, maxX3, maxX4]);

    return (
        <main>
            <h1>Goal: {goal}</h1>
            <select name="goal" id="goal_select" disabled={gameStarted} onChange={(e) => {
                const selectedValue = Number(e.target.value);
                switch (selectedValue) {
                    case 6000:
                        setMaxX1(3);
                        setMaxX2(3);
                        setMaxX3(2);
                        setMaxX4(0);
                        break;
                    case 9000:
                        setMaxX1(3);
                        setMaxX2(3);
                        setMaxX3(2);
                        setMaxX4(1);
                        break;
                    case 11000:
                        setMaxX1(3);
                        setMaxX2(3);
                        setMaxX3(2);
                        setMaxX4(2);
                        break;
                    default:
                        break;
                }
                setPickedPlayersArr([]);
                setX1(0);
                setX2(0);
                setX3(0);
                setX4(0);
                setResult(0);
                setGoal(selectedValue);
            }}>
                <option value="6000">6000</option>
                <option value="9000">9000</option>
                <option value="11000">11000</option>
            </select>
            <button className="button" disabled={gameStarted} onClick={() => {
                if (pickedPlayersArr.length < maxArrLength) {
                    const randomIndex = Math.floor(Math.random() * playersArray.length);
                    setCurrentPlayer(playersArray[randomIndex]);
                    setGameStarted(true);
                } else if (pickedPlayersArr.length >= maxArrLength) {
                    setPickedPlayersArr([]);
                    setX1(0);
                    setX2(0);
                    setX3(0);
                    setX4(0);
                    setResult(0);
                    const randomIndex = Math.floor(Math.random() * playersArray.length);
                    setCurrentPlayer(playersArray[randomIndex]);
                    setGameStarted(true);
                }
            }}>{pickedPlayersArr.length >= maxArrLength ? 'Play again!' : 'Start game!'}</button>

            <div className="current_player">{currentPlayer.name}</div>
            <div className="options">
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(Math.random() * playersArray.length);
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={(multiplier) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * multiplier };
                        setX1(X1 + 1);
                        return auxArr;
                    })}
                    slotVerifier={X1}
                    maxLength={maxX1}
                    setSlotVerifier={() => setX1(X1 + 1)}
                    btnText="X1"
                />
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(Math.random() * playersArray.length);
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={(multiplier) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * multiplier };
                        setX2(X2 + 1);
                        return auxArr;
                    })}
                    slotVerifier={X2}
                    maxLength={maxX2}
                    setSlotVerifier={() => setX2(X2 + 1)}
                    btnText="X2"
                />
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(Math.random() * playersArray.length);
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={(multiplier) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * multiplier };
                        setX3(X3 + 1);
                        return auxArr;
                    })}
                    slotVerifier={X3}
                    maxLength={maxX3}
                    setSlotVerifier={() => setX3(X3 + 1)}
                    btnText="X3"
                />
                <SetSlotButton
                    getPlayer={() => {
                        const randomIndex = Math.floor(Math.random() * playersArray.length);
                        setCurrentPlayer(playersArray[randomIndex]);
                    }}
                    setPickedPlayersArr={(multiplier) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * multiplier };
                        setX4(X4 + 1);
                        return auxArr;
                    })}
                    slotVerifier={X4}
                    maxLength={maxX4}
                    setSlotVerifier={() => setX4(X4 + 1)}
                    btnText="X4"
                />
            </div>
            <div className="slots">
                {pickedPlayersArr.map(player => {
                    return <p>{`${player.name} - ${player.goals}`}</p>
                })}
            </div>
            {pickedPlayersArr.length >= maxArrLength &&
                <div className="modal_backdrop">
                    <div className="modal_content">
                        <p>Score: {result}</p>
                        <p>{result >= goal ? 'You Win!' : 'You Lose!'}</p>
                    </div>
                </div>}
            <p>Highest Score: {highestScore}</p>
        </main>
    )
}

export default App;