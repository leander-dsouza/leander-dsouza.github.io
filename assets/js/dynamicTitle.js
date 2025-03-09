window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Leander\'s Profile Awaits You.'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/headshot.png'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/sunglasses.png'
    }
  }
}
