angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Original Cheesecake',
    lastText: '$3.99',
    face: 'img/chesecake.jpg'
  }, {
    id: 1,
    name: 'Carrot Cake',
    lastText: '$2.99',
    face: 'img/carrotcake.jpg'
  }, {
    id: 2,
    name: 'Hot Fude Sundae',
    lastText: '$2.99',
    face: 'img/hfs.jpg'
  }, {
    id: 3,
    name: 'Caesar Salad',
    lastText: '$10.99',
    face: 'img/caesar salad.jpg'
  }, {
    id: 4,
    name: 'Chinese Chicken Salad',
    lastText: '$9.99',
    face: 'img/chinese chicken salad.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
