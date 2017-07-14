'use strict';

var view = {
  entries: [],
  quotes: [
    'I want my world to be fun. No parents, no rules, no nothing. Like, no one can stop me. No one can stop me.',
    'It\'s freezing; it\'s uncomfortable; there are people in there you just don’t want to be around. I had people who were yelling at me. They were saying, “Bieber! We (expletive) with you, bro! We love you! Aye! Keep your head up, bro!” It was kind of funny to hear that, especially from cats in jail.',
    'We\'re trying to set up a movie for me in the near future. It\'s going to be similar to the story of how I got discovered. Kinda like my own version of \'8 Mile.\'',
    'I\'m crazy, I\'m nuts. Just the way my brain works. I\'m not normal. I think differently.'
  ],
  data: [
    {
      title: 'I hate Justin',
      date: 'Thurs Jul 13 2017',
      category: 'Pining',
      mood: 'Depressed',
      text: 'Oh, no. He got a new girlfriend. Where is the beiber ipsum when we need it.',
      author: 'Stephanie Lingwood'
    },
    {
      title: 'I love Justin',
      date: 'Wed Jul 12 2017',
      category: 'Swooning',
      mood: 'Infatuation',
      text: "Baby, baby, baby, oh don't be so cold, we could be fire let the music blast we gon' do our dance. Don't be so cold, we could be fire let the music blast we gon' do our dance we don't need no wings to fly. Got your girlfriend at my crib watching Netflix swag I'm all fancy, yeah I'm popping Pellegrino. Canada don't be so cold, we could be fire I'm all fancy, yeah I'm popping Pellegrino. I'm in pieces, so come fix me what you got, a billion could've never bought if I was your boyfriend, I'd never let you go. Swag let the music blast we gon' do our dance swaggie. I'ma make you shine bright like you're laying in the snow, burr and all the haters I swear they look so small from up here man, we steppin' out like whoa. Let the music blast we gon' do our dance I could be your Buzz Lightyear fly across the globe it's a Bieber world live it or die.",
      author: 'Stephanie Lingwood'
    }
  ]
};

// make an object for entries
function Entry (entryObject) {
  this.title = entryObject.title;
  this.date = entryObject.date;
  this.category = entryObject.category;
  this.mood = entryObject.mood;
  this.text = entryObject.text;
  this.author = entryObject.author || 'Stephanie Lingwood';
}

Entry.prototype.templateAndDomify = function (element) {
  var template = $('#entryTemplate').html();
  var compiled = Handlebars.compile(template);
  $(element).append(compiled(this));
};

view.init = function () {
  view.newEntry = new Entry({});
  // loop through array
  view.data.forEach(function (entry) {
    //  and feed the data to the constructor to make an Entry object
    var existingEntry = new Entry({
      title: entry.title,
      date: entry.date,
      category: entry.category,
      mood: entry.mood,
      text: entry.text,
      author: entry.author,
    });
    // then call the templateAndDomify function for that object
    existingEntry.templateAndDomify('#existingEntries');
  });
};

view.showPreview = function (event) {
  event.preventDefault();
  $('#entryPreview').empty();
  // do stuff
  // retrieve the data from the form
  view.newEntry.title = $('#entryTitle').val();
  view.newEntry.date = (new Date()).toDateString();
  view.newEntry.category = $('#entryCategory').val();
  view.newEntry.mood = $('#entryMood').val();
  view.newEntry.text = $('#entryText').val();
  view.newEntry.author = $('#entryAuthor').val();
  view.newEntry.templateAndDomify('#entryPreview');
};

view.saveEntry = function (event) {
  event.preventDefault();

  view.data.push(view.newEntry);
  view.newEntry = new Entry({});
  $('#entryPreview').empty();
  $('#existingEntries').empty();
  view.init();
};

$('#entryForm').on('change', view.showPreview);
$('#save').on('click', view.saveEntry);

// capture the inputted data, and render it to the preview area
// stretch goal: save button to acutally add it to our data array

// sidebar: example of templater literal
// var foo = 'justin poster'
// 'my string about a ' + foo
// `hey look at my ${foo}!`
