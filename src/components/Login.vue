<template>
  <div class="start">
    <div class="left">
      <span class="left__logo">reditus</span>
      <span class="left__message">{{ leftMessage }}<span class="message__type">|</span></span>
    </div>
    <div class="right">
      <div class="right__messages">
        <span class="right__message right__message_signin">Sign in</span>
        <span class="right__message right__message_signup">Don't have an account? <a href="" class="signup__link">Create one</a></span>
      </div>
      <form class="right__login">
        <div class="login__field login__field_email">
          <label for="login__input_email" class="login__label login__label_email">E-mail</label>
          <input type="text" placeholder="Your e-mail" class="login__input login__input_email" pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$" title="The e-mail must be like example@example.com" required>
        </div>
        <div class="login__field login__field_password">
          <label for="" class="login__label login__label_password">Password</label>
          <input type="password" placeholder="Your password" class="login__input login__input_password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" minlength="8" title="Please include at least 1 uppercase character, 1 lowercase character, 1 number and 8 characters." required>
        </div>
        <div class="login__options">
          <div class="option__remeberme">
            <ReditusCheckbox/>
            <label for="horns" class="remeberme__label">Remember me</label>
          </div>
          <div class="option_forgot">
            <a href="" class="forgot__link">Forgot password?</a>
          </div>
        </div>
        <input type="submit" class="login__button" value="Sign in">
      </form>
      <div class="other__area">
        <span class="other__enterwith"><span class="enterwith__text">or enter with</span></span>
        <div class="other__logins">
          <button class="other__login other__login_facebook"><img src=".././img/facebook-logo.svg" alt="" class="other__img other__img_facebook"></button>
          <button class="other__login other__login_google"><img src=".././img/search.png" alt="" class="other__img other__img_facebook"></button>
          <button class="other__login other__login_twitter"><img src=".././img/twitter.png" alt="" class="other__img other__img_facebook"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReditusCheckbox from './ReditusCheckbox'

export default {
  name: 'Login',
  components: {
    ReditusCheckbox
  },
  data: function () {
    return {
      leftMessage: '',
      messageTyped: `Welcome to Food's Home`,
      messageIndex: 0
    }
  },
  methods: {
    typeWriter () {
      if (this.messageIndex < this.messageTyped.length) {
        this.leftMessage += this.messageTyped.charAt(this.messageIndex)
        this.messageIndex++
        setTimeout(this.typeWriter, 100)
      }
    }
  },
  beforeMount () {
    this.typeWriter()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.enterwith
  &__text
    display: inline
    color: #a9a9a9
    font-size: 14px
    font-weight: bold

.other
  &__login
    background-color: transparent
    padding: 5px
    margin: 0 20px

  &__img
    width: 24px
    height: 24px

  &__logins
    display: flex
    justify-content: center
    align-items: center

  &__area
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  &__enterwith
    font-family: 'Lato'
    margin-bottom: 30px

.start
  width: 100%
  height: 100%
  display: flex
  background: linear-gradient(to right, rgba(160, 1, 1, 0.55), rgba(160, 1, 1, 0.45)), url('.././img/salad-2756467_1920.jpg');
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

  &__logo
    margin-left: 20px
    color: #F0F0F0
    font-size: 2vw
    margin-left: 20px
    color: #a00101
    padding: 0px 9px 3px 9px
    letter-spacing: 2px;
    font-size: 2vw
    font-family: 'Maven Pro'
    background-color: #F0F0F0

  &__message
    text-align: left
    color: #F0F0F0
    font-family: 'Lato'
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

.right
  width: 40%
  height: 100%
  background: #F0F0F0
  background-size: cover
  background-repeat: no-repeat
  background-position: right
  display: grid
  grid-template-rows: 1fr 1fr 1fr
  border-radius: 10px

  &__messages
      align-self: center
      margin: 0 50px
      display: flex
      flex-direction: column

  &__message
      font-family: 'Lato'

      &_signin
        font-weight: 800
        font-size: 35px
        margin-bottom: 20px

      &_signup
        color: #a9a9a9

  &__login
    align-self: center
    display: flex
    flex-direction: column
    margin: 0 50px

.signup__link
  color: #a9a9a9

  &:hover

.login

  &__icon
    display: inline

  &__options
    display: flex
    justify-content: space-between
    margin-top: 30px
    font-family: 'Lato'

  &__button
    margin-right: auto
    margin-left: auto
    cursor: pointer
    margin-top: 30px
    padding: 10px 60px
    font-size: 15px
    color: #F0F0F0
    font-family: 'Lato'
    font-weight: bold
    border-radius: 3px
    background-color: rgb(206, 4, 4)
    transition: background .3s ease-in

    &:hover
      background-color: rgba(160, 1, 1, 1)

  &__label
    font-family: 'Lato';
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold

  &__field
    display: flex;
    flex-direction: column;

    &_password
      margin-top: 30px

  &__input
    padding: 8px 10px
    font-size: 15px
    outline: 0
    font-weight: bold
    font-family: 'Lato'
    background-color: transparent
    border: 2px solid #c1c1c1
    color: #414141

    &::placeholder
      color: #a5a5a5

.option
  &__remeberme
    display: flex
    align-items: center

.forgot__link, .signup__link
  color: #a9a9a9
  &:hover
    color: #7d7d7d
</style>
