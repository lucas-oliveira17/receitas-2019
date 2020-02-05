<template>
    <div id="login" class="right">
      <div class="right__messages">
        <span class="right__message right__message_signin">Sign in</span>
        <span class="right__message right__message_signup">Don't have an account? <a href="" class="signup__link">Create one</a></span>
      </div>
      <form class="right__login" id="LoginForm">
        <div class="login__field login__field_email">
          <label for="login__input_email" class="login__label login__label_email">E-mail</label>
          <input type="text" placeholder="Your e-mail" id="Email" data-value-missing="Translate('Required')" class="login__input login__input_email" pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$" title="The e-mail must be like example@example.com" required>
        </div>
        <div class="login__field login__field_password">
          <label for="" class="login__label login__label_password">Password</label>
          <input type="password" placeholder="Your password" id="Password" class="login__input login__input_password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" minlength="8" title="Please include at least 1 uppercase character, 1 lowercase character, 1 number and 8 characters." required>
        </div>
        <div class="login__options">
          <div class="option__remeberme">
            <reditus-checkbox/>
            <label for="horns" class="remeberme__label">Remember me</label>
          </div>
          <div class="option_forgot">
            <a href="" class="forgot__link">Forgot password?</a>
          </div>
        </div>
        <button type="button" class="login__button" @click="submit('/home')">Sign in</button>
      </form>
      <div class="other__area">
        <span class="other__enterwith"><span class="enterwith__text">or enter with</span></span>
        <div class="other__logins">
          <button class="other__login other__login_facebook"><img src="../.././img/facebook-logo.svg" alt="" class="other__img other__img_facebook"></button>
          <button class="other__login other__login_google"><img src="../.././img/search.png" alt="" class="other__img other__img_facebook"></button>
          <button class="other__login other__login_twitter"><img src="../.././img/twitter.png" alt="" class="other__img other__img_facebook"></button>
        </div>
      </div>
    </div>
</template>

<script>
import ReditusCheckbox from '../tools/ReditusCheckbox'

export default {
  name: 'SignIn',
  components: {
    ReditusCheckbox
  },
  methods: {
    submit (link) {
      const form = document.getElementById('LoginForm')
      if (form.checkValidity()) {
        form.submit()
        window.location.href = link
      } else {
        document.querySelectorAll('.error__info').forEach(el => el.remove())

        form.querySelectorAll('input[type=text], input[type=password]').forEach(el => {
          const errorInfo = document.createElement('div')
          errorInfo.innerHTML = `<span class="error__info">${el.validationMessage}</span>`
          el.parentNode.append(errorInfo)
        })
      }
    }
  }
}
</script>

<style lang="sass">
$reditus-darkred: #a00101
$reditus-lightred: #ce0404

.error__info
  font-family: 'Roboto'
  font-size: 13px
  font-weight: bold
  color: red

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
    font-family: 'Roboto'
    margin-bottom: 30px

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
  box-shadow: 0 0 10px rgba(160, 1, 1, 0.45);

  &__messages
      align-self: center
      margin: 0 50px
      display: flex
      flex-direction: column

  &__message
      font-family: 'Roboto'

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
    font-family: 'Roboto'

  &__button
    margin-right: auto
    margin-left: auto
    cursor: pointer
    margin-top: 30px
    padding: 10px 60px
    font-size: 15px
    color: #F0F0F0
    font-family: 'Roboto'
    font-weight: bold
    border-radius: 3px
    background-color: rgb(206, 4, 4)
    transition: background .3s ease-in

    &:hover
      background-color: rgba(160, 1, 1, 1)

  &__label
    font-family: 'Roboto';
    margin-bottom: 5px;
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
    font-family: 'Roboto'
    background-color: transparent
    border: 2px solid #c1c1c1
    color: #414141
    transition: all .3s ease-in

    &::placeholder
      color: #a5a5a5

    &:hover
      border: 2px solid $reditus-darkred

    &:focus
      border: 2px solid $reditus-darkred

.option
  &__remeberme
    display: flex
    align-items: center

.forgot__link, .signup__link
  color: #a9a9a9
  &:hover
    color: #7d7d7d
</style>
