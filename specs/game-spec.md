# Spec — Juego Infantil Educativo de Superhéroes y Superheroínas (HTML/CSS/JS)

## Concepto General

Juego de mesa digital educativo por turnos, inspirado en:

* juegos de tablero clásicos,
* superhéroes infantiles,
* aprendizaje matemático temprano,
* interacción colaborativa y competitiva amigable.

El objetivo es que los niños:

* practiquen suma básica,
* reconocimiento numérico,
* conteo,
* lógica simple,
* turnos y espera,
  mientras avanzan en un tablero temático de superhéroes.

---

# Inspiración Visual

La estética debe inspirarse en:

* ilustraciones infantiles suaves,
* superhéroes amigables,
* colores vivos,
* personajes inclusivos,
* diseño cartoon simple.

El poster de referencia aporta:

* formas redondeadas,
* expresiones amigables,
* paleta cálida,
* identidad infantil muy adecuada.

---

# Recomendación Artística (MUY IMPORTANTE)

## Sí:

Usar personajes en:

* CSS vectorial,
* SVG,
* ilustraciones flat,
* shapes geométricos simples.

## NO recomendable:

* sprites complejos,
* pixel art,
* imágenes pesadas,
* renders 3D.

---

# Recomendación Técnica Ideal

## Mejor opción:

### SVG + CSS

Porque:

* escala perfecto,
* pesa poco,
* funciona excelente en GitHub Pages,
* permite animaciones,
* fácil de personalizar.

---

# Arquitectura Visual Recomendada

## Personajes

Cada héroe:

* cuerpo simple,
* capa,
* antifaz,
* color identificatorio,
* animaciones suaves.

---

# Ejemplo de Personajes

| Personaje         | Color       |
| ----------------- | ----------- |
| CAPITANA ESTRELLA | Rosa        |
| RAYO VELOZ        | Amarillo    |
| MEGA BOT          | Azul        |
| ECO VERDE         | Verde       |
| FLAMA ÍGNEA       | Rojo        |
| CRISTAL POLAR     | Cian        |
| VELOCIBOT         | Morado      |
| AQUA TORRENTE     | Azul agua   |

---

# Público Objetivo

Niños:

* 4 a 8 años.

---

# Objetivos Educativos

## Matemática

* suma,
* conteo,
* reconocimiento numérico,
* secuencias,
* múltiplos.

## Cognitivo

* turnos,
* memoria,
* planificación simple.

## Lectura

* reconocimiento de números y palabras.

---

# Stack Tecnológico

* HTML5
* CSS3
* JavaScript Vanilla
* SVG/CSS animations

Compatible con:

```txt id="crbbfz"
GitHub Pages
```

---

# Modalidad de Juego

## Multiplayer Local

* 1 a 8 jugadores,
* por turnos,
* mismo dispositivo.

---

# Flujo General

```txt id="u9pq6i"
1. Elegir cantidad de jugadores
2. Elegir personaje
3. Escribir nombre
4. Comenzar partida
5. Tirar dado
6. Resolver suma
7. Avanzar
8. Obtener recompensas
9. Llegar a meta
10. Ver ranking final
```

---

# Pantalla Inicial

## Elementos

* Logo
* Botón jugar
* Selector de jugadores
* Música ON/OFF

---

# Selección de Personajes

## Cada jugador debe:

* elegir héroe,
* ingresar nombre.

---

# Requisito MUY importante

TODO debe mostrarse en:

```txt id="13d0vx"
MAYÚSCULAS
```

---

# Input de Nombre

## Comportamiento

Mientras escribe:

* convertir automáticamente a uppercase.

Ejemplo:

```js id="htrqch"
input.value = input.value.toUpperCase();
```

---

# Selección Visual

## Recomendado

Tarjetas grandes con:

* personaje,
* nombre,
* color,
* ícono.

---

# Recomendación UX

Cada personaje:

* debe ser fácilmente distinguible,
* importante para niños pequeños.

---

# Tablero

## Concepto

Tablero lineal:

```txt id="q4vixf"
1 → 100
```

o configurable.

---

# Diseño del Tablero

## Recomendado

Camino serpenteante:

* estilo juego de mesa,
* visualmente entretenido.

---

# Casillas

## Tipos

| Tipo            | Efecto          |
| --------------- | --------------- |
| Normal          | Nada            |
| Recompensa x5   | Premio          |
| Recompensa x10  | Premio especial |
| Bonus aleatorio | Objeto sorpresa |
| Meta            | Fin             |

---

# Sistema de Movimiento Educativo

## Mecánica principal

### Paso 1

Jugador tira dado.

---

# Dado

## Resultado

Número aleatorio:

```txt id="5g6e2w"
1 → 6
```

---

# IMPORTANTE

El personaje:

```txt id="v0jlwm"
NO AVANZA AUTOMÁTICAMENTE
```

---

# Mecánica Educativa

## Ejemplo

Jugador está en:

```txt id="ys22xr"
5
```

Dado:

```txt id="0t0a8r"
3
```

---

# El juego pregunta:

```txt id="sz2m0m"
¿A QUÉ CASILLA DEBES IR?
```

---

# Opciones visuales

Ejemplo:

* 6
* 7
* 8
* 9

---

# El niño debe seleccionar:

```txt id="wz1mq0"
8
```

---

# Respuesta Correcta

## Si acierta:

* animación positiva,
* personaje avanza,
* sonido alegre,
* sumar puntos.

---

# Respuesta Incorrecta

## Si falla:

NO penalizar.

Solo:

* borde rojo,
* vibración suave,
* sonido amistoso.

Luego:

* permitir volver a intentar.

---

# Objetivo Pedagógico

Refuerzo positivo sin frustración.

---

# Sistema de Recompensas

## Múltiplos de 5

Otorgan:

* estrellas,
* monedas,
* cristales.

---

# Múltiplos de 10

Otorgan:

* súper poderes,
* medallas,
* cofres.

---

# Bonus Aleatorios

## Regla

Cada decena:

```txt id="w7xj6p"
1-10
11-20
21-30
...
```

tiene:

* 1 casilla especial aleatoria.

---

# Generación Aleatoria

## Ejemplo

En:

```txt id="5nrmdn"
11-20
```

sale:

```txt id="v93a4t"
17
```

---

# Casilla Especial

Puede dar:

* turbo,
* objeto raro,
* mini bonus,
* sonido especial.

---

# Objetos Coleccionables

## Ejemplos

* CAPA DORADA
* ESCUDO LÁSER
* BOTAS RÁPIDAS
* GEMA ESTELAR
* SÚPER CASCO

---

# Inventario

Cada jugador debe tener:

* lista visual de objetos,
* contador.

---

# HUD del Juego

## Mostrar

* jugador actual,
* posición,
* inventario,
* score,
* tiradas.

---

# Turnos

## Reglas

### Si responde bien:

avanza.

### Luego:

cambia turno.

---

# Orden

```txt id="ekr6s7"
1 → 2 → 3 → 4
```

---

# Fin de Partida

## Condición

Llegar a META.

---

# Opciones

## Recomendado

La partida termina cuando:

* TODOS llegan.

Así nadie queda afuera.

---

# Ranking Final

## Mostrar

### Posición

```txt id="6x7ggt"
🥇 SOFIA
🥈 JUAN
🥉 LUCAS
```

---

# También mostrar

* puntos,
* objetos recolectados,
* respuestas correctas,
* cantidad de tiradas,
* precisión matemática.

---

# Fórmula de Precisión

\text{Precisión} = \frac{\text{Respuestas Correctas}}{\text{Intentos}} \times 100

---

# Sistema de Puntos

| Acción                 | Puntos |
| ---------------------- | ------ |
| Respuesta correcta     | +50    |
| Casilla múltiplo de 5  | +100   |
| Casilla múltiplo de 10 | +250   |
| Objeto raro            | +300   |

---

# Accesibilidad Infantil

## MUY IMPORTANTE

### Letras grandes

Mínimo:

```txt id="o4ifwl"
20px
```

---

# Fuente Recomendada

* Fredoka
* Baloo 2
* Comic Neue
* Lexend

---

# TODO en mayúsculas

```css id="7u0shp"
text-transform: uppercase;
```

---

# Sonidos

## Recomendados

* dado,
* respuesta correcta,
* error amigable,
* recompensa,
* victoria.

---

# Animaciones

## Deseables

* dado rodando,
* héroes saltando,
* brillo en premios,
* confetti final.

---

# Arquitectura Recomendada

```txt id="81c7tk"
/index.html
/css
  styles.css
/js
  game.js
  board.js
  players.js
  dice.js
  rewards.js
  ui.js
/assets
  heroes/
  sounds/
```

---

# Modelo de Datos

## Player

```js id="e7mjlwm"
{
  id: 1,
  name: "SOFIA",
  hero: "CAPITANA_ESTRELLA",
  position: 0,
  score: 0,
  inventory: [],
  correctAnswers: 0,
  diceRolls: 0
}
```

---

# Estados del Juego

```txt id="yxyi84"
SETUP
ROLLING_DICE
WAITING_ANSWER
MOVING
NEXT_TURN
FINISHED
```

---

# Características Educativas Extra (MUY recomendadas)

## 1. Lectura en voz

El juego puede leer:

* números,
* preguntas,
* premios.

Usando:

```js id="r17b5g"
speechSynthesis
```

---

# 2. Dificultad Adaptativa

## Fácil

Solo sumas pequeñas.

## Medio

Opciones más parecidas.

## Difícil

Sumas más grandes.

---

# 3. Modo Matemática Avanzada (V2)

Más adelante:

* restas,
* multiplicaciones,
* secuencias.

---

# 4. Modo Cooperativo

Todos intentan llegar juntos a la meta.

---

# Recomendación MUY IMPORTANTE

El juego debe:

* celebrar SIEMPRE,
* evitar frustración,
* no castigar errores.

---

# Mensajes Positivos

En vez de:

```txt id="6c67gk"
INCORRECTO
```

usar:

```txt id="7nbqif"
¡CASI!
¡INTENTA OTRA VEZ!
```

---

# MVP Recomendado

## Incluir

✅ 1–4 jugadores
✅ Tablero
✅ Dado
✅ Suma educativa
✅ Recompensas
✅ Ranking final
✅ Personajes SVG/CSS
✅ Responsive
✅ GitHub Pages compatible

---

# Recomendación Técnica Final

Para este proyecto:

```txt id="n2bgoh"
SVG + CSS animations
```

es probablemente la mejor decisión posible.

Porque:

* es liviano,
* moderno,
* accesible,
* altamente personalizable,
* ideal para estética infantil.
