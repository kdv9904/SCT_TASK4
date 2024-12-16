import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

export const List = ({ text, updateMode, deleteList }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%", backgroundColor: "rgb(220,99,0,0.7)", padding: '10px', margin: "10px 0", borderRadius: '5px', boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <span style={{ flex: 1, wordBreak: 'break-word', fontSize: "16px" }}>{text}</span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <BiEdit style={{ color: 'blue', cursor: 'pointer', fontSize: '20px' }} onClick={updateMode} />
        <AiFillDelete style={{ color: 'white', cursor: 'pointer', fontSize: '20px' }} onClick={deleteList} />
      </div>
    </div>
  );
};
