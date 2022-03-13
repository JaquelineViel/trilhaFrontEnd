<h1 align="center">Desafio 2 - C</h1>
<h6 align="center">Jaqueline Viel</h6>

## TABULEIRO
Crie um arquivo index_tabuleiro.html, nele irá criar 2 tabuleiros iguais ao da figura 2, sendo que o primeiro será usando a tag **DIV** e o segundo usando a tag **TABLE**. 

**OBS.:** Lembre-se de colocar o título em cima para identificar cada tabuleiro.

<img src="https://ik.imagekit.io/zo6fhpfjl5f/imagens_corretas/ex.tabuleiro_lvKTLt3vx3mR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647128500975">

<br>

***Resposta:***

## HTML
```html
<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio 2 - index_tabuleiro.html</title>
    <Style>
        h2 {
            color: rgb(61, 58, 58);
            font-family: arial;
        }
        
        table {
            font-family: arial;
            border-color: white;
            margin-top: 20px;
        }
    </Style>
    <link rel="stylesheet" href="css/style.css" class="css">
</head>

<body>
    <h1 align="center">Desafio 2 - Tabuleiro usando a tag DIV e tag TABLE</h1>
    <h2 align="center">DIV</h2>

    <div>
        <div class="black"></div>
        <div class="silver"></div>
        <div class="black"></div>
        <div class="silver"></div>
        <br>
        <div class="silver"></div>
        <div class="black"></div>
        <div class="silver"></div>
        <div class="black"></div>
        <br>
        <div class="black"></div>
        <div class="silver"></div>
        <div class="black"></div>
        <div class="silver"></div>
        <br>
        <div class="silver"></div>
        <div class="black"></div>
        <div class="silver"></div>
        <div class="black"></div>
    </div>

    <table border="2" align="center">
        <caption>
            <h2>TABLE</h2>
        </caption>
        <tr>
            <td width="40" height="40" class="black"></td>
            <td width="40" height="40" class="silver"></td>
            <td width="40" height="40" class="black"></td>
            <td width="40" height="40" class="silver"></td>
        </tr>
        <tr>
            <td width="40" height="40" class="silver"></td>
            <td width="40" height="40" class="black"></td>
            <td width="40" height="40" class="silver"></td>
            <td width="40" height="40" class="black"></td>
        </tr>
        <tr>
            <td width="40" height="40" class="black"></td>
            <td width="40" height="40" class="silver"></td>
            <td width="40" height="40" class="black"></td>
            <td width="40" height="40" class="silver"></td>
        </tr>
        <tr>
            <td width="40" height="40" class="silver"></td>
            <td width="40" height="40" class="black"></td>
            <td width="40" height="40" class="silver"></td>
            <td width="40" height="40" class="black"></td>
        </tr>
    </table>

</body>

</html>
```
<br>

## CSS
```css
        div {
            width: 43px;
            height: 43px;
            position: relative;
            left: 266px;
            margin-top: -0.0em;
            white-space: nowrap;
            display: inline-block;
        }
        
        .black {
            background-color: black;
        }
        
        .silver {
            background-color: silver;
        }
```

