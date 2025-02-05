import React from "react"
import { View } from "react-native"

export default function StyleDemo() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Border Styling Code */}
            {/* <View style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 100,
                borderWidth: 10,
                borderColor: 'red',
                borderRadius: 50,
                // borderTopWidth: 20,
                // borderTopLeftRadius: 50,
             }}>
            </View> */}
            <View style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 100,
                shadowColor: 'red',
                shadowOffset: { width: 10, height: 10 },
                shadowOpacity: 3,
                shadowRadius: 10,
                elevation: 30

            }}>

            </View>

        </View>
    )
}

/* offset angle or postion of the shadow
    opacity how dark shadow
    radius makes softer
    for IOS:
                shadowColor:'grey',
                shadowOffset:{width:0, height:10},
                shadowOpacity:1,
                shadowRadius:10,
    for Android:
    Lack of shadow control in android
    elevation: 30

*/
