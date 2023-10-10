import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import useGetMuseum from '../api/useGetMuseum'
import FontAwesome from '@expo/vector-icons/FontAwesome'

interface MuseumTileProps {
  id: number
  selected: boolean
  onTap: () => void
}

export default function MuseumTile (props: MuseumTileProps) {
  const museumAction = useGetMuseum(props.id)
  return (

        <View style={styles.tile}>
            <Text>{`${props.id}. `}</Text>
            {museumAction.inProgress
              ? <ActivityIndicator size="small"/>
              : <Text>{museumAction.data?.title}</Text>
            }
            <FontAwesome.Button name={props.selected ? 'heart' : 'heart-o'} color="red" backgroundColor="transparent"
                                underlayColor="lightgrey"
                                onPress={() => { props.onTap() }}/>

        </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    display: 'flex',
    margin: 1
  }
})
