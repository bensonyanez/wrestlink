angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabs.camera', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  .state('tabs.cart', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('tabs.cloud', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/page1',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabs.home'
      2) Using $state.go programatically:
        $state.go('tabs.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/page7
      /page1/tab1/page7
  */
  .state('tabs.home', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('account', {
    url: '/page8',
    templateUrl: 'templates/account.html',
    controller: 'accountCtrl'
  })

  .state('signedOut', {
    url: '/page9',
    templateUrl: 'templates/signedOut.html',
    controller: 'signedOutCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});