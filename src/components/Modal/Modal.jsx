import { useEffect } from 'react';
import s from './Modale.module.css'
import React from 'react';


export const Modal = ({item, onClose}) =>  {
  
    const handleKeydown = (e) => {
        if(e.code === 'Escape') {
    onClose();
        }
    }
    
    const handleClickBackdrop = (e) => {
    e.target === e.currentTarget && onClose();
        
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        };
    }, [handleKeydown])









    return (
        <div className={s.Overlay}
        onClick={handleClickBackdrop}
        >
  <div className={s.Modal}>
    <img src={item.largeImageURL} alt={item.tags} />
  </div>
</div>
    )

}
