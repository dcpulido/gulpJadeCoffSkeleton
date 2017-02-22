




say_hi = () ->
  console.log 'Hello!!!'
$ -> 
	$("#btn1").on 'click' ,() => console.log 'click'

window["say_hi"] = say_hi