import {StyleSheet, View} from "react-native"
import { Text } from "./text"

interface ListItem {
    index: number;
    title: string;
    description: string;
}

function ListItem({index, title, description}: ListItem) {
    return (
        <View style={styles.cotainer}>
            <Text color="grey1" variant="body-medium" style={styles.title}>
                List { index } 🌶
            </Text>
            <Text color="black">{title}</Text>
            <Text multiline={true} color="grey1">{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    title: {
        marginBottom: 8,
    },
})

export default ListItem;