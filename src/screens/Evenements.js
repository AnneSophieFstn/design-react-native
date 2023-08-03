import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from "react-native";
import Playground from '../../assets/playground.jpg';


function Evenements() {
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.card}>

                <Image source={Playground} style={{ width: '100%', height: 150 }} />

                <View style={styles.infos}>
                    <View>
                        <Text style={{fontSize: 23, paddingTop:8, paddingBottom:10}}>TERRAINS DES BULLS</Text>
                        <Text style={{fontSize: 15, color:'#595959'}}>24 avenue de Chicago, Saint-Denis - La Réunion</Text>
                    </View>

                    <View>
                        <Button
                            title="Voir plus"
                            onPress={() => Alert.alert('Voir plus btn')}
                        />
                    </View>
                </View>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        height: 230,
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        alignItems: "center"

    },

    infos: { 
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10 
    }

})
export default Evenements;