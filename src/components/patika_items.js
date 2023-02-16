import React from "react";
import { Image, Text, View } from "react-native";
import styles from './items.style';



const StoreCards = ({ prod }) => {
    return (

        <View style={styles.card_background}>
            <Image style={styles.img_container} source={{ uri: prod.imgURL }}
            />
            <Text style={styles.prod_title}>{prod.title}</Text>
            <Text style={styles.prod_price}>{prod.price}</Text>
            <Text style={styles.stock}>{prod.inStock ? "" : "Stokta Yok!"}</Text>
        </View>



    )
}

export default StoreCards;