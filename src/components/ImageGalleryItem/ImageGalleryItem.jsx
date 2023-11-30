import {  useState } from 'react';
import s from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';





export const ImageGalleryItem = ({item}) => {

const [isModalOpen, setIsModalOpen] = useState(false)
const  openModal = () => {
        setIsModalOpen(true)
    }
const  closeModal = () => {
    setIsModalOpen(false)
    }

        return (
            <li
            className={s.ImageGalleryItem}
            onClick={openModal}
            >
{isModalOpen ? 
<Modal 
item={item} 
onClose={closeModal}/> :
            <img
            className={s.ImageGalleryItem__image}
                width="240"
                alt={item.tags}
                src={item.webformatURL}
            />}
            </li>

        )
    }

