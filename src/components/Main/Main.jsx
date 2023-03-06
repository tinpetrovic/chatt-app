import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { Container, Row, Col } from 'react-bootstrap'
import Input from './Input/Input';
import Messages from './Messages/Messages';


const Main = () => {

    const { user, drone } = useContext(UserContext)
    const [messages, setMessages] = useState([])
    const [members, setMembers] = useState([])
    const DEFAULT_ROOM_NAME = "observable-default-room";


    useEffect(() => {
        if (user.username !== "" && drone !== null) {
          setupRoom(drone);
        }
      }, [user, drone]);
    
      function setupRoom(scaledrone) {
        scaledrone.on("error", (error) => console.error(error));
    
        const room = scaledrone.subscribe(DEFAULT_ROOM_NAME);
    
        room.on("error", (error) => console.error(error));
    
        room.on("members", function (members) {
          setMembers([...members]);
        });
    
        room.on("member_join", function (member) {
          setMembers(function (current) {
            return [...current, member];
          });
    
          setMessages((current) => {
            return [
              ...current,
              {
                message: "has joined the chat!",
                id: Math.random(),
                type: "MEMBER_JOINED",
                user: {
                  username: member.clientData.username,
                  avatar: member.clientData.avatar,
                },
              },
            ];
          });
        });
    
        room.on("member_leave", function (member) {
          setMembers((current) => {
            return current.filter((oneMember) => oneMember.id !== member.id);
          });
          setMessages((current) => {
            return [
              ...current,
              {
                message: "has left the chat!",
                id: Math.random(),
                type: "MEMBER_LEFT",
                user: {
                  username: member.clientData.username,
                  avatar: member.clientData.avatar,
                },
              },
            ];
          });
        });
    
        room.on("message", (message) => {
          setMessages((current) => {
            return [
              ...current,
              {
                message: message.data.message,
                id: message.id,
                type: "MESSAGE",
                user: {
                  id: message.member.id,
                  username: message.member.clientData.username,
                  avatar: message.member.clientData.avatar,
                },
              },
            ];
          });
        });
      }
    
      function publishMessage(message) {
        drone.publish({
          room: DEFAULT_ROOM_NAME,
          message: { message },
        });
      }

  return (
    <Container className='main-cont'>
        <Row className="justify-content-center align-itmes-center">
            <Col lg="8" className="p-5 rounded main-wrap">
                <div className='screen rounded'>
                    <Messages messages={messages} user={user} />
                    <Input  publishMessage={publishMessage} />
                </div>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Main