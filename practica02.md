# Práctica 2: Prácticas con CSS y Bootstrap

## Práctica 2.1. Analisis de selectores
### Ejemplo 1
```css
* {
  background-color: beige;
}
```
- El asterisco es el selector universal. Afecta absolutamente a todos
los elementos de la página web (el cuerpo de la página, los textos,
las cajas...)
- Le pone un color de fondo beige a todo lo que encuentre en el HTML,
a menos que otra regla más específica le diga lo contrario más adelante.
- Esta regla por tanto afecta solo al fondo de la pagina en HTML


```css
p {
  color: blue;
  text-align: left;
  background-color: yellow;
}
```
- Afecta a todos los párrafos del documento (cualquier texto que esté
dentro de una etiqueta `<p>`)
- Cambia el color del texto a azul, alinea el texto a la izquierda y
le pone un color de fondo amarillo
- Esta regla aplica a la linea en HTML `<p>Este párrafo no tiene nada
de particular<p>`


```css
.feo {
  color: red;
  background-color: pink;
}
```
- Afecta a cualquier etiqueta HTML que tenga puesto el atributo `class="feo"`.
En CSS siempre que nos queramos referir a una clase hay que poner el "." del
principio
- Cambia el color del texto a rojo y el color de fondo a rosa

- **Importante**: *Las clases tienen más "fuerza" que las etiquetas normales,
si le ponemos la clase "feo" a un párrafo, este se verá rojo con fondo
rosa, ignorando el azul y amarillo que definimos antes*

- Por tanto, esta regla afecta solo a `<p class=feo>Este parrafo tiene
un formato terrible.</p>`


```css
.inverso {
  color: white;
  background-color: black;
}
```
- Afecta a cualquier etiqueta HTML que tenga puesto el atributo `class="inverso"`
en el HTML
- Pone el texto en blanco y el color de fondo en negro
- Por tanto, esta regla afecta a `<div class=inverso>Este aparece
con los colores invertidos. </div>`


```css
h1 {
  color: violet;
  text-align: center;
  font-size: large;
}
```
- Afecta a todos los títulos principales (las etiquetas `<h1>`)
- Pone las letras de color violeta, centra el título en el medio de la pantalla
y hace que el tamaño de la letra sea grande
- Por tanto, regla afecta a `<h1>Hola, css</h1>`

---

### Ejemplo 2
```css
.españa .toledo {
  color: red;
}
```
- Afecta a las etiquetas HTML que tenga puesto el atributo `class="toledo"`
y esten dentro de una clase españa `class="españa"`
Esto es porque entre ambas clases (.españa .toledo) hay un espacio
- Pone el texto en rojo
- Afecta unicamente a:
```html
        <div class="toledo">
          3.La ciudad de Toledo
        </div>
```

```css
.toledo {
  color: blue;
}
```
- Afecta a las etiquetas HTML que tenga puesto el atributo
 `class="toledo"` pero que no se encuentre "anidada" dentro de otra clase
 padre que tenga regla css establecida del tipo color
 - Pone el texto en azul
 - Afecta unicamente a:
 ```html
        <div class="toledo">
          8.La ciudad de Toledo
        </div>
```

```css
.toledo, .cuenca {
  text-align: center;
}
```
- Afecta tanto a etiquetas HTML con el atributo `class="toledo"` como a 
etiquetas HTML con el atributo `class="cuenca"`
- Alinea el texto en el centro de la pagina
- Afecta a estas etiquetas:
```html
        <div class="toledo">
          3.La ciudad de Toledo
        </div>
        <div class="cuenca">
          4.La ciudad de Cuenca
        </div>
        <div class="toledo">
          8.La ciudad de Toledo
        </div>
```

```css
.castilla-la-mancha {
  text-decoration: underline;
}
```
- Afecta a las etiquetas HTML que tenga puesto el atributo
`class="castilla-la-mancha"` pero que no se encuentre "anidada"
dentro de otra clase padre que tenga regla css establecida del tipo
text-decoration
- Subraya el texto
Afecta a estas etiquetas (a las etiquetas hijas del padre):
```html
      <div class="castilla-la-mancha">
        2.La comunidad Castilla la Mancha
        <div class="toledo">
          3.La ciudad de Toledo
        </div>
        <div class="cuenca">
          4.La ciudad de Cuenca
        </div>
        <div class="albacete">
          5.La ciudad Albacete
        </div>
      </div>
```

---

### Ejemplo 3
```css
#alfa {
  color: blue;
}
```
- Afecta a las etiquetas que tenga como atributo `id="alfa"`
- Cambia el color de la fuente a azul
- Afecta solo a la etiqueta `<p id="alfa">Párrafo 2, llamado alfa.
Está dentro de un elemento div, pero no es un elemento div</p>`


```css
p#alfa {
  font-size: 200%;
}
```
- Afecta a las etiquetas que sean de tipo `<p>` y que además tengan
como atributo `id="alfa"` 
- Cambia el tamaño de la fuente y lo aumenta al doble (si fuera 100% sería
el tamaño normal)
- Afecta solo a la misma etiqueta de antes `<p id="alfa">Párrafo 2, llamado
alfa. Está dentro de un elemento div, pero no es un elemento div</p>`


```css
div#alfa{
  background-color: yellow;
}
```
- Afecta a las etiquetas que sean de tipo `<div>` y que además tenga
como atributo `id="alfa"`
- Cambia el fondo del texto, es decir, subraya el texto como si fuera
un subrayador amarillo
- En este caso no hay ninguna etiqueta que cumpla esta regla CSS


```css
div #alfa{
  font-style: italic;
}
```
- Afecta a las etiquetas que tengan el atributo `id="alfa"` y que sean
decendientes de una etiqueta de tipo `<div>`
- Cambia el tipo de fuente por *italic* (cursiva)
- Solo afecta a la misma etiqueta que las 2 primera reglas,
`<p id="alfa">Párrafo 2, llamado alfa. Está dentro de un elemento div,
pero no es un elemento div</p>`

---

### Ejemplo 4
```css
.urjc {
  color: #CB0017;
}
```
- Afecta a las etiquetas que contengan dentro de su atributo `class` la clase
**urjc**
- Cambia el color del texto a *#CB0017* (mas o menos un rojo)
- Afecta a las etiquetas:
```html
      <p class="reglamento urjc">Párrafo 2, clases reglamento y urjc.</p>
      <p class="investigacion urjc">Párrafo 4, clases investigacion y urjc.</p>
```

```css
.urjc.reglamento {
  text-decoration: underline;
}
```
- Afecta a las etiquetas que tengan dentro del atributo `class`las clases
**urjc** y **reglamento**
- Subraya el texto
- Afecta unicamente a la etiqueta `<p class="reglamento urjc">Párrafo 2,
clases reglamento y urjc.</p>`

```css
.urjc, .reglamento {
  background-color: lightblue;
}
```
- Afecta a las etiquetas que dentro del atributo `class` tengan la clase 
**urjc** o la clase **reglamento** o ambas
- Cambia el color del fondo del texto y lo subraya con un color azul claro
- Afecta a las etiquetas:
```html
      <p class="reglamento urjc">Párrafo 2, clases reglamento y urjc.</p>
      <p class="reglamento ucm">Párrafo 2, clases reglamento y ucm.</p>
      <p class="investigacion urjc">Párrafo 4, clases investigacion y urjc.</p>
```


# Práctica 2.2. Uso de Selectores
Vamos a explicar las 5 reglas CSS definidas en el archivo `ej22.html`,
detallando un caso donde se aplican correctamente y un caso "trampa" donde
no se aplican

### Regla 1: Selector de etiqueta (`h1`)
```css
h1 { 
    text-decoration: underline; 
    text-align: center; 
}
```
- **Dónde se aplica:** En el título principal `<h1>Clase de Música</h1>`.
El texto aparece centrado y subrayado, tal y como dicta la regla.

---

### Regla 2: Selector de agrupación (`h2, h3`)
```css
h2 { 
    text-decoration: underline; 
}
```
- **Dónde se aplica:** En los títulos `<h2>` ("Instrumentos que tocan los
alumnos" y "Tipos de sonidos según su intensidad"). Ambos aparecen con el
texto subrayado en el navegador.

---

### Regla 3: Selector de descendiente (`.instrumento .piano`)
```css
.instrumento .piano { 
    color: red; 
}
```
- **Dónde se aplica:** En el elemento `<li class="piano">El piano lo toca
Víctor</li>`. Se pinta de color rojo porque tiene la clase `.piano` y,
además, se encuentra dentro del contenedor `<div class="instrumento">`
- **Dónde no se aplica:** En el elemento `<li class="piano">Piano: es un
sonido muy flojo</li>`. El programador vería el atributo `class="piano"`
en el HTML y esperaría que el texto se pintase de rojo inmediatamente.
Sin embargo, no se aplica porque este elemento de la lista se encuentra
dentro del `<div id="sonido">`. Al no ser descendiente de la clase
`.instrumento`, la regla lo ignora por completo

---

### Regla 4: Selector de etiqueta y clase juntas (`li.flauta`)
```css
li.flauta { 
    color: blue; 
}
```
- **Dónde se aplica:** En la línea `<li class="flauta">La flauta la toca
Alejandro</li>`. El texto se vuelve azul porque cumple las dos condiciones
obligatorias del selector de forma simultánea: ser una etiqueta `<li>` y
tener aplicada la clase `.flauta`.
- **Dónde no se aplica:** En el párrafo `<p class="flauta">Alejandro
también tiene una flauta travesera en casa.</p>`. Un programador
despistado le añadiría la clase "flauta" a este párrafo esperando que se
vuelva azul como el elemento de la lista superior. Pero como la etiqueta
principal es una `<p>` y no un `<li>`, la regla CSS no tiene ningún
efecto sobre él

---

### Regla 5: Selector de etiqueta e ID juntos (`div#sonido`)
```css
div#sonido { 
    font-style: italic; 
}
```
- **Dónde se aplica:** Al bloque que contiene la lista de intensidades
musicales (`<div id="sonido">`). Todo el texto que hay dentro de esa caja
 se pone en cursiva porque el elemento es un `div` y su identificador
 único es exactamente "sonido".
- **Dónde no se aplica:** Al final del documento hay un contenedor creado
como `<div class="sonido">`. Un programador que esté leyendo rápido el
código HTML verá la palabra "sonido" dentro de un `div` y pensará que el
texto de su interior también se pondrá en cursiva. El error está en que
utilizó el atributo `class` en lugar de `id` para nombrarlo, por lo que
el selector con almohadilla (`#`), que busca identificadores únicos, no
lo reconoce
