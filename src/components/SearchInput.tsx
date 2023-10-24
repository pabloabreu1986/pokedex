import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Platform,
    StyleProp,
    ViewStyle
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// Styles
import { globalStyles } from '../theme/styles'
import { useDebouncedValue } from '../hooks/useDebouncedValue'

interface SearchInputProps {
    style?: StyleProp<ViewStyle>
    onDebouce: (term: string) => void
}

export const SearchInput = ({ style, onDebouce }: SearchInputProps) => {
    const [textValue, setTextValue] = useState('')
    const debouncedValue = useDebouncedValue(textValue, 1500)

    useEffect(() => {
        onDebouce(debouncedValue)
    }, [debouncedValue])

    return (
        <View style={{ ...styles.container, ...(style as any) }}>
            <View style={{ ...styles.textBackground }}>
                <TextInput
                    placeholder="Buscar pokemon..."
                    style={{ ...styles.textInput }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon name="search-outline" size={25} color={'grey'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ...globalStyles,
    container: {},
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 15,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: Platform.OS === 'ios' ? 0 : 2
    }
})
