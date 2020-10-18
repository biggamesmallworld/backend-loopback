var models = require('./server.js').models;

/*var toSave = [{
    name: "Nick",
    email: "nick@nickgermaine.com"
  },
  {
    name: "Lea",
    email: "mail@nickgermaine.com"
  },
  {
    name: "Nick1",
    email: "mail1@nickgermaine.com"
  },
  {
    name: "Nick2",
    email: "mail2@nickgermaine.com"
  },
  {
    name: "Someone",
    email: "mail3@nickgermaine.com"
  },
  {
    name: "Someone Else",
    email: "sudomail@nickgermaine.com"
  },
  {
    name: "Jimmy Jensen",
    email: "bingbong@nickgermaine.com"
  },
  {
    name: "Dan",
    email: "butthole@nickgermaine.com"
  },
  {
    name: "Bill",
    email: "penis@nickgermaine.com"
  }
];

var toSave = [{
  name: "Nick",
  email: "someguy@wiener.com"
}, ];
toSave.map(obj => {
  models.profile.create(obj, (err, created) => {
    console.log("Created?", created, err);
  })
});

/*var filter = {
  where: {},
  order: 'date ASC', // order by field, direction
  limit: 3,
  include: {
    relation: 'Post',
    scope: {
      limit: 5,
      order: 'date DESC',
      include: {
        relation: 'Image',
        limit: 1,
        where: {type: 'thumbnail'}
      }
    }
  },
};*/

var filter = {
  where: {
    email: {
      like: 'nick'
    }
  },
  order: 'id ASC',
  limit: 10,
  skip: 4,
  fields: {
    email: true,
  }
};

models.Profile.destroyById("5f4f8632efe8092c67bb42f4", {
  include: "Posts"
}, (err, found) => {
  console.log("Found?", err, found);
  found.Posts.destroyAll({
    data: {
      lte: new Date('2019-02-04')
    }
  });
  Profile.Posts.find((err, posts) => {

  });
});


/*models.Profile.findOrCreate({
  name: "Nick2"
}, (err, profile) => {
  if (err) {
    console.log("There was an error", err);
  } else if (profile) {
    profile.email = 'nick@nickgermaine2.com';
    profile.save((ue, updated) => {
      console.log("Updated?", ue, updated);
    });
  }
});*/
