
function loginFB(){
    FB.login(function(rensponse){
        if(rensponse.status == "unknown"){
            $('#login').show()
            
        } else {
            $('#login').hide()
        }
    })
}
function logoutFB(){
    FB.logout(function(rensponse){
        if(rensponse.status == "unknown"){
            $('#login').show()
            
        } else {
            $('#login').hide()
        }
    })
}
function statusChangeCallback(response) {
    if (response.status === 'connected') {
      testAPI();
      $.ajax({
        type:"post",
        url: "http://localhost:3000",
        data:{
            token:response.authResponse.accessToken
        },
        success: function(result){
                let auth = {
                    id:result.id,
                    name:result.name,
                    accessToken:result.token
                }
                localStorage.setItem('authentifikasi', JSON.stringify(auth));
                // $('#login').hide()
            }
        });  
    } else {
        // $('#login').show()
    }
  }
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : 1446633312052757,
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  function testAPI() {
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
    });
  }
$(document).ready(function(){
    let status = false
    let token = localStorage()
})
