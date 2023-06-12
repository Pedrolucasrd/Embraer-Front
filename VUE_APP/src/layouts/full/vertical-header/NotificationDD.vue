<template>
    <v-btn icon variant="text" class="custom-hover-primary ml-0 ml-md-5 text-muted" @click="toggleNotificationMenu">
      <v-badge dot color="primary" offset-x="-5" offset-y="-3">
        <BellRingingIcon stroke-width="1.5" size="22" />
      </v-badge>
    </v-btn>
  
    <v-menu v-model="notificationMenuVisible" class="notification-menu">
      <v-card>
        <v-list>
          <v-list-item v-for="(notification, index) in notifications" :key="index" @click="openNotification(notification)">
            <v-list-item-content>
              {{ notification.mensagem }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  
    <v-dialog v-model="notificationDialogVisible" max-width="400">
      <v-card>
        <v-card-title>
          <span class="headline">Notificação</span>
        </v-card-title>
        <v-card-text>
          {{ selectedNotification.mensagem }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="closeNotificationDialog">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        notificationMenuVisible: false,
        notifications: [],
        selectedNotification: '',
        notificationDialogVisible: false
      };
    },
    mounted() {
      this.fetchNotifications();
    },
    methods: {
      toggleNotificationMenu() {
        this.notificationMenuVisible = !this.notificationMenuVisible;
      },
      openNotification(notification) {
        this.selectedNotification = notification;
        this.notificationDialogVisible = true;
        this.notificationMenuVisible = false;
      },
      closeNotificationDialog() {
        this.notificationDialogVisible = false;
      },
      fetchNotifications() {
        axios
          .get('http://localhost:8081/notification', {
        withCredentials: true,
      })
          .then(response => {
            this.notifications = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>

<style>
.notification-menu {
  left: 17.5% !important;
  top: 9% !important;
}
</style>
  