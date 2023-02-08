import { useState, useEffect } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../components/Background/Index';
import { GameParams } from '../../@types/navigation';
import { Heading } from '../../components/Heading';
import { DouCard, DuoCardProps } from '../../components/DouCard';
import { DuoMatch } from '../../components/DuoMatch';

import logoImg from '../../assets/logo-nlw-esports.png';

import { THEME } from '../../theme';
import { styles } from './styles'

export function Game() {
    const [duos, setDuos] = useState<DuoCardProps[]>([])
    const [discordDuoSelected, setDiscordDuoSelected] = useState('')

    const navigation = useNavigation()
    const route = useRoute()
    const game = route.params as GameParams

    function handleGoBack() {
        navigation.goBack()
    }

    async function getDiscordUser(adsId: string) {
        // fetch(`http://localhost:8080/ads/${adsId}/discord`)
        //     .then(response => response.json())
        //     .then(data => setDiscordDuoSelected(data.discord))
        setDiscordDuoSelected('Andrey#Disc')
    }

    useEffect(() => {
        // fetch(`http://localhost:8080/games/${game.id}/ads`)
        //     .then(response => response.json())
        //     .then(data => setDuos(data))
        setDuos([
            {
                "id": "1c95f582-c8d0-4873-9f7f-a3ee9bf77b2d",
                "name": "AndreyCs",
                "weekDays": [
                    "0",
                    "1",
                    "2",
                    "5",
                    "6"
                ],
                "useVoiceChannel": true,
                "yearsPlaying": 1,
                "hourStart": "10:00",
                "hourEnd": "12:00"
            },
            {
                "id": "5136fa12-73d5-46e3-87b3-5b78e27a6dd3",
                "name": "Sei la",
                "weekDays": [
                    "1",
                    "4",
                    "5",
                    "6"
                ],
                "useVoiceChannel": false,
                "yearsPlaying": 10,
                "hourStart": "18:00",
                "hourEnd": "22:00"
            },
            {
                "id": "6b8eb790-6e63-4e46-8b91-1c902792a9cd",
                "name": "Heeija",
                "weekDays": [
                    "0",
                    "5",
                    "6"
                ],
                "useVoiceChannel": true,
                "yearsPlaying": 6,
                "hourStart": "18:00",
                "hourEnd": "22:00"
            }
        ])
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />

                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode="cover"
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />
                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <DouCard data={item} onConnect={() => getDiscordUser(item.id)} />
                    )}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={duos.length > 0 ? styles.contentList : styles.emptyListContent}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>
                            Não há anúncios publicados ainda.
                        </Text>
                    )}
                />

                <DuoMatch
                    visible={discordDuoSelected.length > 0}
                    discord={discordDuoSelected}
                    onClose={() => setDiscordDuoSelected('')}
                />
            </SafeAreaView>
        </Background>
    )
}