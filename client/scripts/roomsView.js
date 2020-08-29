var RoomsView = {

  $room: $('#rooms .room'),
  $select: $('select'),
  $addroom: $('.room'),

  initialize: function() {
    RoomsView.$addroom.on('submit', RoomsView.addRoom);
  },

  render: function() {
    //
  },

  renderRoom: function(roomname) {
    // set var optiontag,
    var optionTag = `<option value="${roomname}">${roomname}</option>`;

    $('select').append(optionTag);
  },

  //
  addRoom: function(roomname) {
    //
  }
};


// handleSubmit: function(event) {
//   // Stop the browser from submitting the form
//   event.preventDefault();

//   // user text submetted
//   var message = {
//     username: window.location.search.substring(10),
//     text: $('#message').val(),
//     roomname: 'testing'
//   };

//   // send msg in server(POST)
//   Parse.create(message);

//   console.log('submit click!');

//   // receive the updated data
//   App.fetch();
// },
