import { useEffect, useState } from "react"
import SetSlotButton from "./SetSlotButton";
import PickedPlayersSlot from "./PickedPlayersSlot";
import SixKGame from "./SixKGame";
import NineKGame from "./NineKGame";
import ElevenKGame from "./ElevenKGame";
export type Player = { id: string, name: string, goals: number };

function App() {
    const playersArray: Array<Player> = [
        { id: '0', name: 'Cristiano Ronaldo', goals: 906 },
        { id: '1', name: 'Lionel Messi', goals: 896 },
        { id: '2', name: 'Pelé', goals: 767 },
        { id: '3', name: 'Romário', goals: 772 },
        { id: '4', name: 'Ferenc Puskás', goals: 746 },
        { id: '5', name: 'Ronaldo Nazário', goals: 414 },
        { id: '6', name: 'Josef Bican', goals: 805 },
        { id: '7', name: 'Gerd Müller', goals: 735 },
        { id: '8', name: 'Zlatan Ibrahimović', goals: 573 },
        { id: '9', name: 'Robert Lewandowski', goals: 584 },
        { id: '10', name: 'Thierry Henry', goals: 411 },
        { id: '11', name: 'Raúl González', goals: 404 },
        { id: '12', name: 'Neymar Jr.', goals: 436 },
        { id: '13', name: 'Luis Suárez', goals: 528 },
        { id: '14', name: 'Karim Benzema', goals: 437 },
        { id: '15', name: 'Diego Maradona', goals: 344 },
        { id: '16', name: 'Sergio Agüero', goals: 427 },
        { id: '17', name: 'Francesco Totti', goals: 316 },
        { id: '18', name: 'Alessandro Del Piero', goals: 346 },
        { id: '19', name: 'Gabriel Batistuta', goals: 356 },
        { id: '20', name: 'Samuel Eto’o', goals: 359 },
        { id: '21', name: 'Didier Drogba', goals: 300 },
        { id: '22', name: 'Edinson Cavani', goals: 429 },
        { id: '23', name: 'Kylian Mbappé', goals: 267 },
        { id: '24', name: 'Wayne Rooney', goals: 366 },
        { id: '25', name: 'Marco van Basten', goals: 277 },
        { id: '26', name: 'Andriy Shevchenko', goals: 349 },
        { id: '27', name: 'Michael Owen', goals: 222 },
        { id: '28', name: 'David Villa', goals: 323 },
        { id: '29', name: 'Hernán Crespo', goals: 273 },
        { id: '30', name: 'Ruud van Nistelrooy', goals: 347 },
        { id: '31', name: 'Patrick Kluivert', goals: 240 },
        { id: '32', name: 'Fernando Torres', goals: 260 },
        { id: '33', name: 'Roberto Baggio', goals: 318 },
        { id: '34', name: 'Ryan Giggs', goals: 168 },
        { id: '35', name: 'Frank Lampard', goals: 303 },
        { id: '36', name: 'Steven Gerrard', goals: 212 },
        { id: '37', name: 'Paul Scholes', goals: 155 },
        { id: '38', name: 'Zinedine Zidane', goals: 125 },
        { id: '39', name: 'Xavi Hernández', goals: 113 },
        { id: '40', name: 'Andrés Iniesta', goals: 93 },
        { id: '41', name: 'Ronaldinho Gaúcho', goals: 266 },
        { id: '42', name: 'Pavel Nedvěd', goals: 146 },
        { id: '43', name: 'Clarence Seedorf', goals: 127 },
        { id: '44', name: 'Robinho', goals: 193 },
        { id: '45', name: 'Luka Modrić', goals: 107 },
        { id: '46', name: 'Jari Litmanen', goals: 203 },
        { id: '47', name: 'Dejan Stanković', goals: 118 },
        { id: '48', name: 'David Beckham', goals: 146 },
        { id: '49', name: 'Arjen Robben', goals: 246 },
        { id: '50', name: 'Paolo Maldini', goals: 40 },
        { id: '51', name: 'Cafu', goals: 20 },
        { id: '52', name: 'Roberto Carlos', goals: 75 },
        { id: '53', name: 'Carles Puyol', goals: 22 },
        { id: '54', name: 'Philipp Lahm', goals: 25 },
        { id: '55', name: 'Javier Zanetti', goals: 33 },
        { id: '56', name: 'John Terry', goals: 41 },
        { id: '57', name: 'Rio Ferdinand', goals: 15 },
        { id: '58', name: 'Giorgio Chiellini', goals: 38 },
        { id: '59', name: 'Gerard Piqué', goals: 53 },
        { id: '60', name: 'Sergio Ramos', goals: 105 },
        { id: '61', name: 'Nemanja Vidić', goals: 20 },
        { id: '62', name: 'Vincent Kompany', goals: 37 },
        { id: '63', name: 'Thiago Silva', goals: 42 },
        { id: '64', name: 'Ashley Cole', goals: 20 },
        { id: '65', name: 'Gary Neville', goals: 7 },
        { id: '66', name: 'Patrice Evra', goals: 15 },
        { id: '67', name: 'Marcelo Vieira', goals: 38 },
        { id: '68', name: 'Dani Alves', goals: 60 },
        { id: '69', name: 'João Cancelo', goals: 15 },
        { id: '70', name: 'Johan Cruyff', goals: 368 },
    ];

    const [pickedPlayersArr, setPickedPlayersArr] = useState<Player[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<Player>({} as Player);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);
    const [goal, setGoal] = useState<number>(6000);
    const [X1, setX1] = useState<number>(0);
    const [maxX1, setMaxX1] = useState<number>(4);
    const [X2, setX2] = useState<number>(0);
    const [maxX2, setMaxX2] = useState<number>(3);
    const [X3, setX3] = useState<number>(0);
    const [maxX3, setMaxX3] = useState<number>(1);
    const [X4, setX4] = useState<number>(0);
    const [maxX4, setMaxX4] = useState<number>(1);
    const [X5, setX5] = useState<number>(0);
    const [maxX5, setMaxX5] = useState<number>(0);
    const [highestScore, setHighestScore] = useState<number>(0);
    const [maxArrLength, setMaxArrLength] = useState<number>(7);
    const [triggerX1Button, setTriggerX1Button] = useState<boolean>(false);


    useEffect(() => {
        console.log(pickedPlayersArr)
        console.log(maxArrLength)
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
    }, [triggerX1Button]);

    function resetGame() {
        setPickedPlayersArr([]);
        setX1(0);
        setX2(0);
        setX3(0);
        setX4(0);
        setX5(0);
        setResult(0);
    }

    function setMaxSlots(x1: number, x2: number, x3: number, x4: number, x5: number) {
        setMaxX1(x1);
        setMaxX2(x2);
        setMaxX3(x3);
        setMaxX4(x4);
        setMaxX5(x5);
    }

    function getRandomNumber(): number {
        return Math.floor(Math.random() * playersArray.length);
    }

    return (
        <main>
            <h1>Goal: {goal}</h1>
            <select name="goal" id="goal_select" disabled={gameStarted} onChange={(e) => {
                const selectedValue = Number(e.target.value);
                switch (selectedValue) {
                    case 6000:
                        setMaxArrLength(7);
                        break;
                    case 9000:
                        setMaxArrLength(8);
                        break;
                    case 11000:
                        setMaxArrLength(10);
                        break;
                    default:
                        break;
                }
                resetGame();
                setHighestScore(0);
                setGoal(selectedValue);
            }}>
                <option value="6000">6000</option>
                <option value="9000">9000</option>
                <option value="11000">11000</option>
            </select>
            <button className="button" disabled={gameStarted} onClick={() => {
                const randomIndex = Math.floor(getRandomNumber());
                setCurrentPlayer(playersArray[randomIndex]);
                console.log(currentPlayer)
                setGameStarted(true);
                if (pickedPlayersArr.length >= maxArrLength) {
                    resetGame();
                }
            }}>{pickedPlayersArr.length >= maxArrLength ? 'Play again!' : 'Start game!'}</button>

            <div className="current_player">{currentPlayer.name}</div>
            <div className="options">
                {goal === 6000 && <SixKGame
                    getPlayer={() => {
                        const randomIndex = Math.floor(getRandomNumber());
                        setCurrentPlayer(playersArray[randomIndex]);
                        console.log(currentPlayer)
                    }}
                    setPickedPlayersArr={(mult) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * mult };
                        setX1(X1 + 1);
                        return auxArr;
                    })}
                    currentPlayer={currentPlayer}
                    triggerX1Button={() => setTriggerX1Button(!triggerX1Button)}
                />}
                {goal === 9000 && <NineKGame
                    getPlayer={() => {
                        const randomIndex = Math.floor(getRandomNumber());
                        setCurrentPlayer(playersArray[randomIndex]);
                        console.log(currentPlayer)
                    }}
                    setPickedPlayersArr={(mult) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * mult };
                        setX1(X1 + 1);
                        return auxArr;
                    })}
                    currentPlayer={currentPlayer} />}
                {goal === 11000 && <ElevenKGame
                    getPlayer={() => {
                        const randomIndex = Math.floor(getRandomNumber());
                        setCurrentPlayer(playersArray[randomIndex]);
                        console.log(currentPlayer)
                    }}
                    setPickedPlayersArr={(mult) => setPickedPlayersArr(prev => {
                        const auxArr = [...prev, currentPlayer];
                        auxArr[auxArr.length - 1] = { ...auxArr[auxArr.length - 1], goals: auxArr[auxArr.length - 1].goals * mult };
                        setX1(X1 + 1);
                        return auxArr;
                    })}
                    currentPlayer={currentPlayer} />}
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