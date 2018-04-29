import { API } from './API';
import { AsyncStorage } from 'react-native'
import { ASYNC_KEYS } from './Helpers'
import { Notifications, Permissions } from 'expo';


export function clearLocalNotification () {
  return AsyncStorage.removeItem(ASYNC_KEYS.NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Time to take a Quiz!',
    body: "Don't forget to finish a quiz before you sleep!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

// Shamelessly
export function setLocalNotification () {
  console.log("called")
  AsyncStorage.getItem(ASYNC_KEYS.NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(ASYNC_KEYS.NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
