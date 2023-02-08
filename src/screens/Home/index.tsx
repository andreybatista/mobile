import { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { Background } from '../../components/Background/Index';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    // fetch('http://localhost:8080/games')
    //   .then(response => response.json())
    //   .then(data => setGames(data))

      setGames([
        {
          "id": "a8827c79-5a73-4743-aa3b-ccd5fa204d50",
          "title": "League of Legends",
          "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
          "_count": {
            "ads": 1
          }
        },
        {
          "id": "50dcfc4e-14d1-4549-abe9-c9aeca61ba5d",
          "title": "Counter-Strike: Global Offensive",
          "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg",
          "_count": {
            "ads": 3
          }
        },
        {
          "id": "d455284a-c460-4ead-908c-2c3934eb4c86",
          "title": "VALORANT",
          "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
          "_count": {
            "ads": 0
          }
        },
        {
          "id": "2f9dc062-fe72-49dd-99e7-bebbdec2b15d",
          "title": "Fall Guys",
          "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/512980-285x380.jpg",
          "_count": {
            "ads": 0
          }
        },
        {
          "id": "fffa483d-1142-47da-8f35-31b5303aff97",
          "title": "FIFA 23",
          "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-285x380.jpg",
          "_count": {
            "ads": 0
          }
        },
        {
          "id": "7499ecf5-0539-4321-ad26-1cca166f2ee1",
          "title": "The Last of Us Part I",
          "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/294724507_IGDB-285x380.jpg",
          "_count": {
            "ads": 0
          }
        }
      ])
  }, [])
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />
        <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (<GameCard data={item} onPress={() => handleOpenGame(item)} />)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}