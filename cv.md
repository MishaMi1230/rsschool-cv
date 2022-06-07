# Milto Mikhail

## contacts
* Location: Homel, Belarus
* Phone: +375293032901
* Email: miltomisha43@gmail.com
* GitHub: MishaMi1230

## About me
* stress resistant
* easily trained
* plodding 

## Skills
* Python(basic)
* Java(basic)
* Pascal(basic)

## Code exemple
```
import turtle

directions = 'R'
interactions = 15
line_length = 3
angle = 90

turtle.penup()
turtle.setpos(0, 0)
turtle.width(2)
turtle.pendown()
turtle.speed(100000)

for i in range(interactions):
    rev = directions[::-1]
    rev = rev.replace('R', '-').replace('L', 'R').replace('-', 'L')
    directions = directions + 'R' + rev

for a in directions:
    if a == 'R':
        turtle.right(angle)
    else:
        turtle.left(angle)
    turtle.forward(line_length)

turtle.update()
turtle.done()

```

## Education
* University: Homel Trade and Economics Kollege (present)
* Rolling scopes school stage 0 (present)

## Language:

* English level - A2

* Russian - native speaker
