import {
    Tr,
    Td,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

import { ToDoListDataType } from '../../pages/toDoList/index';
import { useNavigate } from 'react-router-dom';

export interface ITodoListItemProps {
    element: ToDoListDataType;
    deleteItem: Function;
}

export function ToDoListItem({ element, deleteItem }: ITodoListItemProps) {

    const navigate = useNavigate(); ///used  React Router useNavigate hooks.

    return (
        <>
            <Tr>
                <Td>{element?.id}</Td>
                <Td>{element?.first_name}</Td>
                <Td>{element?.last_name}</Td>
                <Td>{element?.age}</Td>
                <Td><EditIcon onClick={(() => {
                    navigate(`/user/${element?.id}`)
                })} /></Td>
                <Td><DeleteIcon onClick={(() => {
                    console.log();
                    deleteItem(element?.id) ///using react state
                })} /></Td>

            </Tr>
        </>
    )
}
