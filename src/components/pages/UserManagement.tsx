import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react"
import { FC, memo, useCallback, useEffect } from "react"
import { useAllUsers } from "../../hooks/useAllUsers"
import { useSelectUser } from "../../hooks/useSelectUser"
import { UserCard } from "../oganisms/user/UserCarad"
import { UserDetailModal } from "../oganisms/user/UserDetailModal"

export const UserManagement:FC = memo(()=>{
    const{ isOpen, onOpen, onClose } = useDisclosure();
    const {getUsers, users, loading } = useAllUsers();
    const { onSelectUser, selectedUser} = useSelectUser();

    useEffect(() => getUsers(),[]);

    const onClickuser = useCallback((id:number)=> {
        onSelectUser({ id, users, onOpen })
    },
     [users, onSelectUser, onOpen]
    );

    return (
        <>
        {loading ? (
        <Center h="100vh">
         <Spinner />
        </Center>
        ): (
        <Wrap p={{base:4, md:10}}>
            {users.map((user)=>(
                <WrapItem key={user.id} mx="auto">
                <UserCard 
                id={user.id}
                imageUrl="https://source.unsplash.com/random" 
                userName={user.username} 
                fullName={user.name}
                onClick={onClickuser}
                />
                </WrapItem>
            ))}
        </Wrap>
        )}
        <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
        </>
    )
})