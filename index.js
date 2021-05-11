// TODO:
// - Update fCC to new URLs
// - Get twitter handles for sources
// - Add dev.to

const sources = {};

sources.mediumCustomPublications = [
  {
    url: 'https://levelup.gitconnected.com',
    id: 'levelup.gitconnected.com',
    twitter: 'gitconnected',
  },
  {
    url: 'https://javascript.plainenglish.io',
    id: 'javascript.plainenglish.io',
    twitter: 'JS_PlainEnglish',
  },
  {
    url: 'https://betterprogramming.pub',
    id: 'betterprogramming.pub',
    twitter: 'BttrProgramming',
  },
  {
    url: 'https://medium.freecodecamp.com',
    id: 'medium.freecodecamp.com',
    twitter: 'freeCodeCamp',
  },
  {
    url: 'https://hackernoon.com',
    id: 'hackernoon.com',
    twitter: 'hackernoon',
  },
  {
    url: 'https://code.likeagirl.io',
    id: 'code.likeagirl.io',
    twitter: 'code_likeagirl',
  },
  {
    url: 'https://edgecoders.com',
    id: 'edgecoders.com',
    twitter: 'JavaScriptLabs',
  },
  {
    url: 'https://codeburst.io',
    id: 'codeburst.io',
    twitter: 'codeburstio',
  },
  {
    url: 'https://medium.mybridge.co',
    id: 'medium.mybridge.co',
    twitter: 'Mybridge',
  },
  {
    url: 'https://dev-blog.apollodata.com',
    id: 'dev-blog.apollodata.com',
    twitter: 'apollographql',
  },
  {
    url: 'https://cdb.reacttraining.com',
    id: 'cdb.reacttraining.com',
    twitter: 'ReactTraining',
  },
  {
    url: 'https://blog.angular.io',
    id: 'blog.angular.io',
    twitter: 'angular',
  },
  {
    url: 'https://blog.hellojs.org',
    id: 'blog.hellojs.org',
    twitter: 'hellojs_org',
  },
  {
    url: 'https://slack.engineering',
    id: 'slack.engineering',
    twitter: 'SlackHQ',
  },
  {
    url: 'https://medium.engineering',
    id: 'medium.engineering',
    twitter: 'mediumeng',
  },
  {
    url: 'https://blog.cloudboost.io',
    id: 'blog.cloudboost.io',
    twitter: 'cloudboostio',
  },
  {
    url: 'https://blog.logrocket.com',
    id: 'blog.logrocket.com',
    twitter: 'LogRocket',
  },
  {
    url: 'https://blog.twitch.tv',
    id: 'blog.twitch.tv',
    twitter: 'twitch',
  },
  {
    url: 'https://code-cartoons.com',
    id: 'code-cartoons.com',
    twitter: 'codecartoons',
  },
  {
    url: 'https://itnext.io',
    id: 'itnext.io',
    twitter: 'itnext_io',
  },
];

sources.webFeeds = [
  {
    url: 'https://alligator.io/feed.xml',
    id: 'alligator.io',
    twitter: 'alligatorio',
  },
  {
    url: 'https://hacks.mozilla.org/feed',
    id: 'hacks.mozilla.org',
    twitter: 'mozhacks',
  },
  {
    url: 'https://www.quirksmode.org/blog/atom.xml',
    id: 'quirksmode.org',
    twitter: 'ppk',
  },
  {
    url: 'https://reactjs.org/feed.xml',
    id: 'reactjs.org',
    twitter: 'reactjs',
  },
  {
    url: 'https://toddmotto.com/feed',
    id: 'toddmotto.com',
    twitter: 'toddmotto',
  },
  {
    url: 'https://davidwalsh.name/feed',
    id: 'davidwalsh.name',
    twitter: 'davidwalshblog',
  },
  {
    url: 'http://feeds.feedburner.com/2ality?format=xml',
    id: '2ality.com',
    twitter: '2ality',
  },
  {
    url: 'https://scotch.io/feed',
    id: 'scotch.io',
    twitter: 'scotch_io',
  },
  {
    url: 'https://feed.dotdev.co',
    id: 'dotdev.co',
    twitter: 'dotdevco',
  },
  {
    url: 'https://webkit.org/blog/feed',
    id: 'webkit.org',
    twitter: 'webkit',
  },
  {
    url: 'http://feeds2.feedburner.com/ChrisCoyier',
    id: 'chriscoyier.net',
    twitter: 'chriscoyier',
  },
  {
    url: 'https://blog.risingstack.com/rss',
    id: 'blog.risingstack.com',
    twitter: 'risingstack',
  },
  {
    url: 'https://www.smashingmagazine.com/feed',
    id: 'smashingmagazine.com',
    twitter: 'smashingmag',
  },
  {
    url: 'http://feeds.feedburner.com/johnpapa',
    id: 'johnpapa.net',
    twitter: 'john_papa',
  },
  {
    url: 'http://feeds.feedburner.com/TheJavascriptPlayground',
    id: 'javascriptplayground.com',
    twitter: 'Jack_Franklin',
  },
  {
    url: 'https://derickbailey.com/feed',
    id: 'derickbailey.com',
    twitter: 'derickbailey',
  },
  {
    url: 'http://jsramblings.com/feed.xml',
    id: 'jsramblings.com',
    twitter: 'ucorina28',
  },
  {
    url: 'http://blog.mgechev.com/feed',
    id: 'blog.mgechev.com',
    twitter: 'mgechev',
  },
  {
    url: 'http://www.echojs.com/rss',
    id: 'echojs.com',
    twitter: 'echojs',
  },
  {
    url: 'https://javascriptreport.com/rss',
    id: 'javascriptreport.com',
    twitter: '_jsreport',
  },
  {
    url: 'https://javascriptkicks.com/feeds/rss',
    id: 'javascriptkicks.com',
    twitter: 'javascriptkicks',
  },
];

sources.mediumPublications = [
  { id: 'dailyjs', twitter: 'javascriptdaily' },
  { id: 'javascript-scene', twitter: '_ericelliott' },
  { id: 'dev-channel', twitter: 'chromiumdev' },
  { id: 'webpack', twitter: 'webpack' },
  { id: 'learning-new-stuff', twitter: 'perborgen' },
  { id: 'hackingui', twitter: 'HackingUI' },
  { id: 'the-node-js-collection', twitter: 'nodejs' },
  { id: 'coderbyte', twitter: 'Coderbyte' },
  { id: 'airbnb-engineering', twitter: 'AirbnbEng' },
  { id: 'front-end-hacking', twitter: 'frontendweekly1' },
  { id: 'statuscode', twitter: 'statuscode' },
  { id: 'js-dojo', twitter: 'vuejsdevelopers' },
  { id: 'google-developers', twitter: 'googledevs' },
  { id: 'on-coding', twitter: 'on_coding' },
];

sources.mediumUsers = [
  { id: '@Pinterest_Engineering', twitter: 'PinterestEng' },
  { id: '@sachagreif', twitter: 'SachaGreif' },
  { id: '@addyosmani', twitter: 'addyosmani' },
  { id: '@dan_abramov', twitter: 'dan_abramov' },
];

module.exports = sources;
