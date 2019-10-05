import React from 'react'
import { chats } from '../../db';
import moment from 'moment';
import { List, ListItem } from '@material-ui/core';

const ChatsList : React.FC = () => (
    <div>
        <List>
            {
                chats.map(chat => (
                    <ListItem key={chat.id} button>
                        <img src="{chat.picture}" alt="Profile"/>
                        <div>{chat.name}</div>
                        {chat.lastMessage && (
                        <>
                            <div>{chat.lastMessage.content}</div>
                            <div>{moment(chat.lastMessage.createdAt)}</div>
                        </>
                        )}
                    </ListItem>
                ))
            }
        </List>>
    </div>
);

export default ChatsList;