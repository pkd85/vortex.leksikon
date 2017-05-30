(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/bs_BA/sdk.js#xfbml=1&version=v2.9"; //"//connect.facebook.net/en_US/sdk.js"//
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
  FB.init({
    appId            : 'your-app-id',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.9'
  });
FB.ui({
  method: 'share_open_graph',
  action_type: 'og.likes',
  action_properties: JSON.stringify({
    object:'https://developers.facebook.com/docs/',
  })
}, function(response){
  // Debug response (optional)
  console.log(response);
});
  FB.AppEvents.logPageView();
};
