import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
    card_container: {
        backgroundColor: "white",
        
    },
    card_background: {
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        flex:1,
        margin:10


    },
    img_container: {
        height: Dimensions.get('screen').height / 8,
        width: Dimensions.get('screen').width / 4,
        flex: 1,
        margin: 20,
        borderRadius: 10,
        
    
    },
    prod_title: {
        fontWeight: 'bold',
        alignItems:"center",
        flex:1,
        padding:5

    },
    prod_price:{
        padding:5,
        color:"grey"
    },
    stock:{
        fontSize:20,
        fontWeight:"bold",
        color:"red"
    }



})