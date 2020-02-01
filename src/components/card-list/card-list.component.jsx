import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'

export const CardList = (props)=>(
    <div className = 'card-list'>
    {props.monsters.map(monster => (
        <h1 key={monster.id}> <Card monster = {monster}/></h1>
      ))}
    
    </div>

) 
