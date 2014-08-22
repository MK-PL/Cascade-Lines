Cascade-Lines
=============
[Demo site] (http://maciejkawa.lubin.pl/cascadelines)
---

"Cascade Lines" are  jQuery Plugin for change background color with cascading lines transition.

You can use it for change background color of html, body or divs.

It's small size and easy in use. 

---

### How to use?

Copy jQuery and Cascade Lines files to your folder.

~~~ javascript

<script src="jquery.js"></ script>
<script src="cascadelines.js"></script>
<script>
  $("body").cascadelines();
</script>

~~~

### Attention!

If you want use plugin with divs, you must first set up position style of div (like absolute, relative, fixed)!


### Parametrs

Color - set new color in hex of background, default is "#00F"

Direction - set direction of transition ("lr", "rl", "tb", "bt"), default is "lr"

Lines - set numbers of lines used in transition, default is 10

Speed - set speed of transition, default is 100

Zindex - set z-index for object used in transition, default is 0

### Example [Link] (http://jsfiddle.net/axb8bknh/)
~~~ html

<script src="jquery.js"></ script>
<script src="cascadelines.js"></script>
<script>
  $("#mydiv").cascadelines({
		color: '#00F',
		direction: 'bt',
		lines: 50,
		speed: 220,
		zindex: 0
  });
</script>

<style>
  #mydiv {
    background-color: #0F0;
    position: relative;
    height: 200px;
    width: 300px;
  }
</style>


<div id="mydiv"></div>

~~~

### Author

Maciej Kawa

kontakt @ maciejkawa.lubin.pl


