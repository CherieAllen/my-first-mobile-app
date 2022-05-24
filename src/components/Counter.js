import {View, Text, Button, StyleSheet} from "react-native"
import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}> You clicked the button {count} times.</Text>
            <Button title="Add" onPress={()=> setCount(count + 1)} />
            <Button title="Reset" onPress={()=> setCount(0)} />
            <Button title="Remove" onPress={()=> setCount(count- 1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer:{
        width:"80%",
        margin: 14,
        padding: 14,
        backgroundColor:"beige",
        
    },

    counterText:{
        fontSize: 30,
        textAlign:"center",
    }

})