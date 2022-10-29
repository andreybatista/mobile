import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlertL: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});