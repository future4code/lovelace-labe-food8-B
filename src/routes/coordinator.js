export const goToLogin = (history) => {
    history.push('/login')
  }
  export const goToSignUp = (history) => {
    history.push('/signup')
  }
  export const goToHome = (history) => {
    history.push('/home')
  }
  export const goToProfile = (history) => {
    history.push('/profile')
  }
  
  export const goToEditProfile = (history) => {
    history.push('/update-profile')
  }

  export const goToRestaurantsPage = (history, id) => {
    history.push(`/restaurant/${id}`)
  }
  
  export const goToAdressPage = (history) => {
    history.push('/address-form')
  }
  
  export const goToCart = (history) => {
    history.push('/cart')
  }
  
  export const goBack = (history) => {
    history.goBack()
  }