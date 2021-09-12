import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks.ts/useAuth';
import '../styles/room.scss'

type RoomParams = {
    id: string;
}

export function Room () {
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
  
  
    const roomId = params.id;

    async function handleSendQuestion(){
        if(newQuestion.trim() == ''){
            return;
        }

        if(!user){
            throw new Error('You must be logged in')
        }

        const question = {
            content: newQuestion,
            author: {
                nome : user.nome, 
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        }



    }

    return (
        <div id="page-room">
            <header>   
                <div className="content">
               <img src={logoImg} alt="LetMeAsk" />
                <RoomCode code={roomId}/>
                </div>

            </header>

            <main>
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>

                </div>
                <form>
                    <textarea 
                    placeholder="O que você quer perguntar"
                    onChange={event => setNewQuestion(event.target.value)}
                    value ={newQuestion}
                    />
                
                <div className="form-footer"> 
                <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                <Button type="submit"> Enviar pergunta </Button>
                </div>
                </form>
            </main>
        </div>
    );
}