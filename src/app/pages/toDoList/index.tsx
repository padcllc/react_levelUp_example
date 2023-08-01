import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react';

import { ToDoListItem } from '../../components/toDo_list_item';

import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


interface ToDoListData {
    data: ToDoListDataType[];
}

export interface ToDoListDataType {
    id: number;
    first_name: string;
    last_name: string;
    age: number;

}

export function ToDoList() {

    const navigate = useNavigate(); ///used  React Router useNavigate hooks.

    const [toDoItem, setToDoItem] = useState<ToDoListDataType[]>([]);///for example, useState can be used to send and change state

    useEffect(() => { /// for example, useEffect can be used to get table data in page mounting
        axios.get("db/toDo_list.json")
            .then((result: ToDoListData) => {
                setToDoItem(result.data)

            })
            .catch((error) => {
            });
    }, []);


    const  addToDoList = useCallback(() => { ///used useCallback
        setToDoItem((t) => [...toDoItem, {
            id: toDoItem.length+1,
            first_name: 'Johny',
            last_name: 'Doe',
            age: 40,
        }]);
      }, [toDoItem]);


       function openUserPage() {
        navigate('/user');
      }



    return (
        <>
            {/* Use Chakra UI Table  */}
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>firstName</Th>
                            <Th>lastName</Th>
                            <Th>Age</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            toDoItem.map((element: ToDoListDataType, index: number) => {
                                return <ToDoListItem element={element} key={index + 1}
                                    deleteItem={(event: number) => {
                                        setToDoItem(
                                            toDoItem.filter((item: ToDoListDataType) => item.id !== event))

                                    }} />///used ToDoListItem component  and used state and props
                            })
                        }

                    </Tbody>
                </Table>
            </TableContainer>
            <Button colorScheme='blue' m={4} onClick={addToDoList}>Add List</Button>
            <Button colorScheme='blue' m={4} onClick={openUserPage}>Go to user Page</Button>

        </>
    )
};

