import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";


interface UsertData {
    data: UserDataType[];
}

export interface UserDataType {
    id: number;
    first_name: string;
    last_name: string;
    age: number;

}


export function UserItem() {

    const params = useParams();///used  React Router useParams hooks. get params
    const navigate = useNavigate(); ///used  React Router useNavigate hooks. get params


    const [userItem, setUserItem] = useState<UserDataType>();

    useEffect(() => { /// for example, useEffect can be used to get table data in page mounting
        axios.get("../../../../src/db/toDo_list.json")
            .then((result: UsertData) => {
                const info = result.data.find((item: UserDataType) => item.id === Number(params.id));
                ////find function to find the first encountered element that satisfies the condition
                /// filter function return array
                setUserItem(info);
            })
            .catch((error) => {
            });
    }, []);



    return (
        <>
            <Card align='center'>
                <CardHeader>
                    <Heading size='md'> Customer dashboard {userItem?.id}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{userItem?.first_name} {userItem?.last_name} {userItem?.age}</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue' onClick={(() => {
                        navigate('/todo-list');
                    })}>Back</Button>
                </CardFooter>
            </Card>
        </>
    )
}