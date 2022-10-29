import { GameController } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

import { THEME } from '../../theme';
import { DouInfo } from '../DouInfo';

import { styles } from './styles';

export interface DuoCardProps {
    hourEnd: string;
    hourStart: string;
    id: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[],
    yearsPlaying: number,
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void
}

export function DouCard({ data, onConnect }: Props) {
    return (
        <View style={styles.container}>
            <DouInfo
                label='Nome'
                value={data.name}
            />

            <DouInfo
                label='Tempo de Jogo'
                value={`${data.yearsPlaying} anos`}
            />

            <DouInfo
                label='Disponibilidade'
                value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />

            <DouInfo
                label='Chamada de áudio'
                value={data.useVoiceChannel ? 'Sim' : 'Não'}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >
                <GameController color={THEME.COLORS.TEXT} size={20} />
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>

        </View>
    )
}