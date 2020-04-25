// var fs = require('fs');
// var path = require('path');
let express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  server,
  store = {
    home: {
      link_name: 'Home',
      page: 'Home app',
      content: 'Home page content'
    },
    about: {
      link_name: 'About',
      page: 'About app',
      content: 'About page content'
    },
    download: {
      link_name: 'Download',
      page: 'Download app',
      content: 'Download page content'
    },
    profile: {
      link_name: 'Profile',
      page: 'Profile app',
      content: 'Profile page content'
    }
  };
let storeKeys = Object.keys(store);

app.disable('X-Powered-By');
app.set('view engine', 'pug')

app.use((req, res, next) => {
  console.log('%s %s', req.method, req.url)
  next()
})
app.use(express.static(__dirname +'/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.get('/about', (req, res) => {
  res.render('about', {
    links: storeKeys,
  })
})
app
  .route('/contacts')
  .get((req, res) => {
    res.render('contacts', {
      page: 'Contact us',
      links: storeKeys,
    })
  })
  .post((req, res) => {
    let data = req.body
    if(data.pageurl && data.pagename && data.pagecontent) {
      store[data.pagename] = {
        page: data.pagename,
        content: data.pagecontent,
      }
      storeKeys = Object.keys(store);
    }
    res.redirect('/')
  })
// app
//   .route('/new')
//   .get((req, res) => {
//     res.render('new', {
//       page: 'Add New',
//       links: storeKeys,
//     })
//   })
//   .post((req, res) => {
//     let data = req.body
//     if(data.pageurl && data.pagename && data.pagecontent) {
//       store[data.pagename] = {
//         page: data.pagename,
//         content: data.pagecontent,
//       }
//       storeKeys = Object.keys(store);
//     }
//     res.redirect('/')
//   })

app
  .get('/:page?', (req, res) => {
    let page = req.params.page,
      data
    if (!page) page = 'home'
    data = store[page]
    if (!data) res.redirect('/')
    data.links = storeKeys
    data.query = req.query
    res.render('main', data)
  })
server = app.listen(3000, () => console.log('Server ON 3000'))


// console.log(express)
// const http = require('http'),
//   server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     // console.log(req.headers)
//     console.log(req.url)
//     res.write('Hello world!')
//     res.end()
//   })
// server.listen(8000)
// console.log('List on port 8000')

// let Readable = require('stream').Readable,
//   stream = new Readable(),
//   data = ('At athe ene we all we all gonna be raacchh At athe ene we all gonna be raacchh At athe ene we all gonna be raacchh At athe ene we all gonna be raacchh At athe ene we all gonna be raacchh At athe ene we all gonna be raacchh ').split(' ');
//
// stream._read = () => {
//   if(data.length) {
//     setTimeout(() => {
//       stream.push(data.shift() + ' ');
//     }, 200);
//   } else {
//     stream.push(null);
//   }
// }
// stream.pipe(process.stdout);

