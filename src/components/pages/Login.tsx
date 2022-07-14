import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { ChangeEvent, FC, memo, useState } from "react"
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButon } from "../atoms/button/PrimaryButton";

export const Login:FC = memo(()=>{
    const {login, loading} = useAuth();
    const [userId, setUserId] = useState('');

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>setUserId(e.target.value);

    const onClicLogin = ()=> login(userId);

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md">
                <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                <Divider my={4}/>
                <Stack spacing={6} py={4} px={10}>
                <Input 
                    placeholder="ユーザーID" 
                    value={userId} 
                    onChange={onChangeUserId}
                    />
                <PrimaryButon 
                    disabled={userId === ""}
                    loading ={loading} 
                    onClick={onClicLogin}
                    >
                        ログイン
                    </PrimaryButon>
                </Stack>
            </Box>
        </Flex>
    );
})