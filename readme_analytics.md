Later, inserted analytics code, just before </head> in 3 files:
- holland/index.html
- holland/testonly.html
- menu.html

Analytics code:
```
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-51999582-11', 'auto');
  ga('send', 'pageview');

</script>
```

Just a rememberance.
