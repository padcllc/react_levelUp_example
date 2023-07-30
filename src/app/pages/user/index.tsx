import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext } from 'react';


//////// in this page used useContext hook 

function User1(){
    const userInfo = useContext(userInformation);
return(
    <>
    <p>{userInfo}</p>
    </>
)
}

function User2(){
    return(
        <>
        <User1/>
        </>
    )
}

function User3(){
    return(
        <>
        <User2/>
        </>
    )
}
const userInformation = createContext('');

export function User() {

    const navigate = useNavigate(); ///used  React Router useNavigate hooks.

    function openToDoPage(){
        navigate('/todo-list');
    }

    return (
        <>
         <userInformation.Provider value={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,'}>
         <User3/>
         </userInformation.Provider>
        
           <Button colorScheme='blue' m={4} onClick={openToDoPage}>Go to ToDo List Page</Button>
        
        </>
    )
}

/////questions
/// 1.how to send object Via useContext 
///2.how to send more than one data using useContext