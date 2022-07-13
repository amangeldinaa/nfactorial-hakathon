import {Link} from "react-router-dom";
import '../App.css';

import io from 'socket.io-client';
import {useEffect, useState} from 'react';
import {Content, Joinroom} from '../components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const socket = io.connect("http://localhost:3001");

const Intro = () => {
    const [room, setRoom] = useState("");
    const [shashu, setShashu] = useState("");
    const [shashuReceived, setShashuReceived] = useState("")

    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
    };

    const sendShashu = () => {
        socket.emit("send_shashu", { shashu, room });
    };

    useEffect(() => {
        socket.on("receive_shashu", (data) => {
            setShashuReceived(data.shashu);
        });
    }, [socket]);
    
    return (
        <div className="main-container-1">
            
            <h1>Shashu:</h1>
            <h3 className="container">Қолма-қол ақшаң жоқ па? Ештеңе етпейді! Виртуалды шашу шаш! Достарыңды бөлмеге жина, шашу жинасын. </h3>
            <h4>P.s. Дауысты қосуды ұмытпа ;)</h4>
            <div>
            <input
                placeholder="enter room number..."
                onChange={(event) => {
                setRoom(event.target.value);
                }}
            />
            <button onClick={joinRoom}>Join Room</button></div>

            <div style={{margin: '10px'}}>
            <input placeholder='number of shashu....' onChange={(event) => {
                setShashu(event.target.value);
            }}/>
            <button onClick={sendShashu}>Create room</button></div>
            
            {shashuReceived}
                <Link to="/game">
                    <Button variant="contained" >Шашу шаш!</Button>
                </Link>
                <div style={{width:'40vw'}}></div>
                {/* <h5 className="container">Жақында жүйені QIWI wallet-ке байланыстыру жоспарлануда</h5> */}

        </div>
    )
};
    
export default Intro;