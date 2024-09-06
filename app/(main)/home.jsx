import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'

const Home = () => {
    const {user, setAuth} = useAuth();

    console.log('user: ', user);

    const onLogout = async () => {
        // setAuth(null);
        const {error}  = await supabase.auth.signOut();
        if(error) {
            Alert.alert("Cerrar sesion", "error al cerrar sesion");
        }
    }

    return (
        <ScreenWrapper>
            <Text>home</Text>
            <Button title="logout" onPress={onLogout} />
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({})