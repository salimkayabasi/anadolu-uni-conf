Anadolu Uni REST API
====================

Source project of given site `http://anadolu-uni-conf.herokuapp.com`

Installing
==========

```
npm install
node server
```

Usage
=====

After installing node dependencies, you can run node application.
App will start at 8080 port by default

```
localhost:8080
```

URL Endpoints
=============

`/` just returning a dummy date object

```json
  {
    "date": "2015-01-27T00:43:47.287Z"
  }
```

`/schedule?skip=1&limit=1` it will give whole items from [page](http://ab2015.anadolu.edu.tr/index.php?menu=5&submenu=28)

`skip` and `page` are optional filters

```json
  [
    {
      "type": "-K-",
      "code": 5,
      "title": "Python ile Web Geliştiriciliği",
      "people": "Fatih Erikli - Halit Alptekin - Emre Yılmaz - Doğan Çecen"
    }
  ]
```