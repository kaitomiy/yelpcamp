var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
  {
    name: "Cloud's rest",
    image:
      'https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Majestic hill',
    image:
      'https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Night hill',
    image:
      'https://images.unsplash.com/photo-1505735754789-3404132203ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

function seedDB() {
  //remove all campgrounds
  Campground.deleteMany({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('removed campgrounds!');
      //add a few campgrounds
      data.forEach(function (seed) {
        Campground.create(seed, function (err, campground) {
          if (err) {
            console.log(err);
          } else {
            console.log('added a campground');
            ////add a coment
            Comment.create(
              {
                text: 'This place is great, but I wish there was internet!',
                author: 'Homer',
              },
              function (err, comment) {
                if (err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log('Created new comment');
                }
              }
            );
          }
        });
      });
    }
  });
}

module.exports = seedDB;

// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// var Comment   = require("./models/comment");

// var data = [
//     {
//         name: "Cloud's Rest",
//         image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//         author:{
//             id : "588c2e092403d111454fff76",
//             username: "Jack"
//         }
//     },
//     {
//         name: "Desert Mesa",
//         image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//         author:{
//             id : "588c2e092403d111454fff71",
//             username: "Jill"
//         }
//     },
//     {
//         name: "Canyon Floor",
//         image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
//         author:{
//             id : "588c2e092403d111454fff77",
//             username: "Jane"
//         }
//     }
// ]

// function seedDB(){
//    //Remove all campgrounds
//    Campground.deleteMany({}, function(err){
//         if (err){
//             console.log(err);
//         }
//         console.log("removed campgrounds!");
//         Comment.deleteMany({}, function(err) {
//             if (err){
//                 console.log(err);
//             }
//             console.log("removed comments!");
//             //add a few campgrounds
//             data.forEach(function(seed){
//                 Campground.create(seed, function(err, campground){
//                     if(err){
//                         console.log(err)
//                     } else {
//                         console.log("added a campground");
//                         //create a comment
//                         Comment.create(
//                             {
//                                 text: "This place is great, but I wish there was internet",
//                                 author:{
//                                     id : "588c2e092403d111454fff76",
//                                     username: "Jack"
//                                 }
//                             }, function(err, comment){
//                                 if(err){
//                                     console.log(err);
//                                 } else {
//                                     campground.comments.push(comment);
//                                     campground.save();
//                                     console.log("Created new comment");
//                                 }
//                             });
//                     }
//                 });
//             });
//         })
//     });
//     //add a few comments
// }

// module.exports = seedDB;
