<template>
    <div class="start">
    <div class="left">
      <div class="logo">
        <ReditusLogo logo-background-color="white" color="#a00101"/>
      </div>
      <span class="left__message">{{ leftMessage }}<span class="message__type">|</span></span>
    </div>
    <SignIn />
  </div>
</template>

<script>
import SignIn from './SignIn'
import ReditusLogo from '../tools/ReditusLogo'

export default {
  name: 'Login',
  components: {
    SignIn, ReditusLogo
  },
  data: function () {
    return {
      leftMessage: '',
      messageTyped: `Welcome to Food's Home`,
      messageIndex: 0,
      writeSpeed: 100
    }
  },
  methods: {
    typeWriter () {
      if (this.messageIndex < this.messageTyped.length) {
        this.leftMessage += this.messageTyped.charAt(this.messageIndex)
        this.messageIndex++
        setTimeout(this.typeWriter, this.writeSpeed)
      }
    }
  },
  beforeMount () {
    this.typeWriter()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$reditus-darkred: #a00101
$reditus-lightred: #ce0404

.logo
  margin-left: 20px

.reditus
  &__logo
      margin-left: 20px
      color: #F0F0F0
      font-size: 2vw
      margin-left: 20px
      color: $reditus-darkred
      padding: 0px 9px 3px 9px
      letter-spacing: 2px;
      font-size: 2vw
      font-family: 'Maven Pro'
      background-color: #F0F0F0

.start
  width: 100%
  height: 100%
  display: flex
  background: linear-gradient(to right, rgba(160, 1, 1, 0.55), rgba(160, 1, 1, 0.45)), url('../.././img/salad-2756467_1920.jpg');
  padding: 20px
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

.left
  width: 60%
  height: 100%
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: center

  &__message
    text-align: left
    color: #F0F0F0
    font-family: 'Roboto'
    font-weight: bold
    font-size: 5vw
    margin-left: 20px
    margin-top: auto
    margin-bottom: auto
    width: 45%
    overflow-wrap: break-word;

.message
  &__type
    animation-name: blinker;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.5, 0, 1, 1);
    animation-duration: .6s;
    margin-left: -4px
    font-weight: 200

@keyframes blinker
  from
    opacity: 1.0;
  to
    opacity: 0.0;
</style>
