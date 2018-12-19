<template>
  <div v-if="userExists" class="chat-box">
    <app-nav></app-nav>
    <div class="container-fluid mt-4">
      <div class="row justify-content-center h-100">
        <div class="col-md-8 col-xl-6 chat">
          <div class="card">
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="../assets/user.png" class="rounded-circle user_img">
                </div>
                <div class="mt-3 ml-4">
                  <h2>{{target}}</h2>
                </div>
              </div>
            </div>

            <div class="card-body msg_card_body">
              <div v-for="message in messages" :key="message._id" ref="container">
                <!--Left side-->
                <div v-if="(message.username !== username) && (message.room === room)" class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img src="../assets/user.png" class="rounded-circle user_img_msg">
                    <h6 class="mt-2" style="font-size: 60%">{{message.username}}</h6>
                  </div>
                  <div class="msg_cotainer">
                    {{message.message}}
                    <span class="msg_time ml-2">{{formatTime(message.date_created)}}</span>
                  </div>
                </div>

                <!--Right side-->
                <div v-if="(message.username === username) && (message.room === room)" class="d-flex justify-content-end mb-4">
                  <div class="msg_cotainer_send">
                    {{message.message}}
                    <span class="msg_time_send mr-2">{{formatTime(message.date_created)}}</span>
                  </div>
                  <div class="img_cont_msg">
                    <img src="../assets/user.png" class="rounded-circle user_img_msg">
                    <h6 class="mt-2" style="font-size: 60%">You</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-footer">
              <form class="input-group">
                <textarea name="" class="form-control" v-model="message" placeholder="Type your message..."></textarea>
                <div class="input-group-append">
                  <span class="input-group-text send_btn" @click="sendMessage()">Send</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import * as io from 'socket.io-client'
import axios from '../services/axios'
import auth from '../services/auth'
import msg from '../models/messages'
import AppNav from '@/components/Nav'

export default {
  name: 'Chat',
  components: {AppNav},
  data () {
    return {
      userExists: false,
      target: '',
      username: '',
      message: '',
      messages: [],
      room: ''
    }
  },
  created () {
    if (auth.loggedIn()) {
      this.username = auth.getName()
    }
    this.getProfileName()
    this.getMessages()

    // let socket = io.connect('http://localhost:8000/')
    //
    // socket.on('fromServer', function (data) { // listen for fromServer message
    //   console.log('Connected to Server on Port ' + data.id)
    //   socket.emit('fromClient', {id: this.username}) // send fromClient message to server
    // })
    //
    // socket.on('Handshake', function () { // listen for fromServer message
    //   setTimeout(function () {
    //     socket.emit('Handshake')
    //   }, 2500)
    // })
    // socket.on('disconnect', function () {
    //   console.log('Server disconnected')
    // })
  },
  methods: {
    sendMessage () {
      let url = 'http://localhost:3000/api/chat/'
      msg.room = this.room
      msg.username = this.username
      msg.message = this.message
      this.axios.post(url, msg).then(() => {
        this.message = ''
        this.getMessages()
      })
        .catch(err => {
          console.log(err)
        })
    },
    getProfileName () {
      let url = 'http://localhost:3000/api' + this.$route.path
      this.room = this.$route.path.substring(6)
      this.axios.get(url).then(response => {
        this.target = response.data.username
        this.userExists = true
      })
        .catch(err => {
          console.log(err)
        })
    },
    getMessages () {
      let url = 'http://localhost:3000/api/chat/'
      let req = {'username': 'jill'}
      axios.get(url, JSON.stringify(req))
        .then(response => {
          this.messages = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },

    formatTime (date) {
      let time = new Date(date)
      return time.toLocaleTimeString()
    }
  }
}
</script>

<style scoped>
  body,html{
    height: 100%;
    margin: 0;
    background: #7F7FD5;
    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
    background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
  }

  .chat{
    margin-top: auto;
    margin-bottom: auto;
  }
  .card{
    height: 100%;
    border-radius: 15px !important;
  }
  .msg_card_body{
    overflow-y: auto;
    max-height: 400px;
  }
  .card-header{
    border-radius: 15px 15px 0 0 !important;
    border-bottom: 0 !important;
  }
  .card-footer{
    border-radius: 0 0 15px 15px !important;
    border-top: 0 !important;
  }
  .send_btn{
    border-radius: 0 15px 15px 0 !important;
    background-color: #78e08f !important;
    border:0 !important;
    color: white !important;
    cursor: pointer;
  }
  .contacts li{
    width: 100% !important;
    padding: 5px 10px;
    margin-bottom: 15px !important;
  }
  .user_img{
    height: 70px;
    width: 70px;
    border:1.5px solid #f5f6fa;

  }
  .user_img_msg{
    height: 40px;
    width: 40px;
    border: 2px solid #f5f6fa;

  }
  .img_cont{
    position: relative;
    height: 70px;
    width: 70px;
  }
  .img_cont_msg{
    height: 40px;
    width: 40px;
  }
  .user_info span{
    font-size: 20px;
    color: white;
  }
  .user_info p{
    font-size: 10px;
    color: rgba(255,255,255,0.6);
  }
  .video_cam span{
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-right: 20px;
  }
  .msg_cotainer{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    border-radius: 25px;
    background-color: #82ccdd;
    padding: 10px 20px;
    position: relative;
    min-width: 75px;
    min-height: 41px;
    text-align: left;
  }
  .msg_cotainer_send{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;
    border-radius: 25px;
    background-color: #78e08f;
    padding: 10px 20px;
    position: relative;
    min-width: 75px;
    min-height: 41px;
    text-align: right;
  }
  .msg_time{
    position: absolute;
    left: 0;
    bottom: -15px;
    font-size: 10px;
  }
  .msg_time_send{
    position: absolute;
    right: 0;
    bottom: -15px;
    font-size: 10px;
  }
  .msg_head{
    position: relative;
  }
  .action_menu ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .action_menu ul li{
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 5px;
  }
  .action_menu ul li i{
    padding-right: 10px;

  }
  .action_menu ul li:hover{
    cursor: pointer;
    background-color: rgba(0,0,0,0.2);
  }
</style>
