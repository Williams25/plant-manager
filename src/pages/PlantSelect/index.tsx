import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Header, EnviromentButton, PlantCardPrimary, Load } from '../../components'
import { styles } from './styles'
import { api } from '../../services/api'

interface PlantEnvironment {
  key: string
  title: string
}

interface Plants {
  id: number
  name: string
  about: string
  water_tips: string
  photo: string
  environments: Array<string>
  frequency: {
    times: number
    repeat_every: string
  }
}

export const PlantSelect: React.FC = () => {
  const [plantsEnvironments, setPlantsEnvironments] = useState<PlantEnvironment[]>([])
  const [plants, setPlants] = useState<Plants[]>([])
  const [filterPlants, setFilterPlants] = useState<Plants[]>([])
  const [environmentsSelected, setEnvironmentsSelected] = useState<string>('all')
  const [loading, setLoading] = useState<boolean>(true)
  // paginação
  const [page, setPage] = useState<number>(1)
  const [loadngMore, setLoadingMore] = useState<boolean>(true)
  const [loadedAll, setLoadedAll] = useState<boolean>(false)

  const fethEnviroment = async () => {
    const { data } = await api.get('/plants_environments', {
      params: {
        _sort: 'title',
        _order: 'asc'
      }
    })
    setPlantsEnvironments([
      {
        key: 'all',
        title: 'Todos'
      },
      ...data
    ])
    setLoading(false)
  }

  const fethPlants = async () => {
    const { data } = await api.get('/plants', {
      params: {
        _sort: 'name',
        _order: 'asc',
        _limit: '8',
        _page: page
      }
    })

    if (!data) {
      return setLoading(true)
    } else if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilterPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data)
      setFilterPlants(data)
    }
    setLoading(false)
    setLoadingMore(false)
  }

  const handleEnvironmentsSelected = (item: string) => {
    setEnvironmentsSelected(item)

    if (item === 'all') {
      setLoading(false)
      return setFilterPlants(plants)
    }

    const filteredPlants = plants.filter(plant => {
      return plant.environments.includes(item)
    })

    setFilterPlants(filteredPlants)
    setLoading(false)
  }

  const handleFethMore = (distance: number) => {
    if (distance < 1) return

    setLoadingMore(true)
    setPage(oldValue => oldValue + 1)
    fethPlants()
  }

  useEffect(() => {
    fethEnviroment()
    fethPlants()
  }, [])

  if (loading) return <Load />

  return (
    <SafeAreaView style={styles.container}>
      <Header name="william" />

      <View style={styles.header}>
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtile}>você quer colocar sua planta?</Text>
      </View>

      <View style={styles.contentFlatList}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
          keyExtractor={item => item.key}
          data={plantsEnvironments}
          renderItem={({ item }) => (
            <EnviromentButton
              title={String(item.title)}
              active={item.key === environmentsSelected}
              onPress={() => handleEnvironmentsSelected(item.key)}
            />
          )}
        />
      </View>

      <View style={styles.contentPlants}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.plantItem}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFethMore(distanceFromEnd)}
          keyExtractor={item => String(item.id)}
          data={filterPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={{
                name: item.name,
                photo: item.photo
              }}
            />
          )}
          ListFooterComponent={
            loadngMore ?
              <ActivityIndicator color="green" />
              : <></>
          }
        />
      </View>
    </SafeAreaView>
  )
}