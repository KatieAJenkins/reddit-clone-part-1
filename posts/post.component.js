(function() {
  'use strict'

  angular
    .module("app" , ['angularMoment'])

    .component('postArea', {
      controller: Controller,
      templateUrl: './posts/post.template.html'
    })

    function Controller () {
      // console.log('Made it in Controller');
      const vm = this
      vm.$onInit = onInit
      vm.createPost = createPost
      vm.createComment = createComment
      vm.showPostTemplate = showPostTemplate
      vm.showCommentForm = showCommentForm
      vm.setPropertyName = setPropertyName
      vm.increaseVote = increaseVote
      vm.decreaseVote = decreaseVote
      vm.showPostFormDiv = false

      vm.posts = [
        {
          title: "Business Cat",
          body: "Show me the Mice!",
          author: "Mr Mustache",
          imageUrl: "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg",
          time: new Date(),
          comments: ['Go chase your dreams, not your tail!', 'Make it rain!'],
          showComment: false,
          votes: 20
        },
        {
          title: "Horse-in Around",
          body: "Give me a keese!",
          author: "Mr Ed",
          imageUrl: "http://cdn0.wideopenpets.com/wp-content/uploads/2016/05/Untitled-design-18-770x405.jpg",
          time: new Date(),
          comments: ['You\'re my mane man.'],
          showComment: false,
          votes: 4
        },
        {
          title: "Why I hate Halloween.",
          body: "Does this costume make me look fat?",
          author: "Miss Kitty",
          imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMjHcs4aBIAuCx9GfEWh0Q0VN62ZYquBSvYy0q4hxbCMF4HhmwkZzAmZs",
          time: "Make sure to install Moment!",
          comments: ['It looks comfortable!'],
          showComment: false,
          votes: 10
        }
      ]

      function onInit () {
        // console.log('Made it in onInit')
        vm.sort = '-votes'
        vm.propertyName = 'Votes'
      }

      function createPost () {
        // console.log("clicked")
        vm.post.time = new Date()
        // console.log(vm.post.time);

        //reset comments
        vm.post.comments = []

        //push new post to existing posts array
        vm.posts.push(vm.post)
        // console.log(vm.posts)

        //clear post form once submitted
        delete vm.post

        //set form to pristine and untouched after submit
        vm.newPostForm.$setPristine()
        vm.newPostForm.$setUntouched()

        //hide form once submitted
        vm.showPostFormDiv = false
      }

      function showPostTemplate () {
        //toggle new post button
        // console.log('clicked')
        vm.showPostFormDiv = !vm.showPostFormDiv
      }

      vm.newComment = {}

      function createComment (post) {
        //post = thisPost aka only create comment on this post
        // console.log('clicked')

        post.comments.push(vm.newComment.body)

        delete vm.newComment
        // console.log(post.comments);
      }

      function showCommentForm (thisPost) {
        // console.log("clicked");
        // console.log(thisPost.showComment)
        thisPost.showComment = !thisPost.showComment
      }

      function setPropertyName(property) {
        // console.log('clicked')
        // console.log(property)
        vm.sort = property

        if(property == '-votes') {
          vm.propertyName = 'Votes'
        }
        else {
          vm.propertyName = property.substring(0,1).toUpperCase() + property.substring(1).toLowerCase();
        }
      }

      function increaseVote (thisPost) {
        // console.log('clicked')
        thisPost.votes += 1;
      }

      function decreaseVote (thisPost) {
        // console.log('clicked')
        thisPost.votes -= 1
        // console.log(thisPost.votes)
      }
    } //end of controller
})();//end of IIFE
