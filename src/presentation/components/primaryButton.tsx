import { Pressable, StyleSheet, Text } from "react-native"


interface PbProps  {
    label: string,
    onPress: () => void;
    onLongPress: () => void;
}


export const PrimaryButton = ({label,onPress,onLongPress}:PbProps) => {
    
    return(
    <Pressable
        onPress={() => onPress && onPress()}
        onLongPress={() => onLongPress && onLongPress()}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}>
        <Text style={{
          
          color: Platform.OS === 'android' ? 'white' : '#476CAB'

            }}>{ label}</Text>
    </Pressable >
    )

}


styles = StyleSheet.create({
     button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10
  },
  buttonPressed: {
    backgroundColor:'#4746AB'
  }
})