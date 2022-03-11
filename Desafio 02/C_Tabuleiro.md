<h1 align="center">Desafio 2 - C</h1>
<h6 align="center">Jaqueline Viel</h6>

## TABULEIRO
Crie um arquivo index_tabuleiro.html, nele irá criar 2 tabuleiros iguais ao da figura 2, sendo que o primeiro será usando a tag **DIV** e o segundo usando a tag **TABLE**. 

**OBS:** Lembre-se de colocar o título em cima para identificar cada tabuleiro.

<img src="https://ik.imagekit.io/zo6fhpfjl5f/ex.tabuleiro_oaJQJ_id1D.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646954803936">
<p></p>

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
        h2{
            color:rgb(61, 58, 58);
        }
        table{
            font-family: arial;
            border-color: white;
        }
    </Style>
    <link rel="stylesheet" href="css/style.css" class="css">
</head>
<body>
    <h1 align="center">Desafio 2 - Tabuleiro usando a tag DIV e tag TABLE</h1>
    <br></br>

<div><h2>DIV</h2></div>
<p></p>
<div id="bloco-a"></div>
<div id="bloco-b"></div>
<div id="bloco-c"></div>
<div id="bloco-d"></div>
<p></p>
<div id="bloco-e"></div>
<div id="bloco-f"></div>
<div id="bloco-g"></div>
<div id="bloco-h"></div>
<p></p>
<div id="bloco-i"></div>
<div id="bloco-j"></div>
<div id="bloco-k"></div>
<div id="bloco-l"></div>
<p></p>
<div id="bloco-m"></div>
<div id="bloco-n"></div>
<div id="bloco-o"></div>
<div id="bloco-p"></div>
</body>

<table border="2" align="center">
<caption><h2>TABLE</h2></caption>
<tr>
    <td width="40" height="40" bgcolor="black"></td>
    <td width="40" height="40" bgcolor="silver"></td>
    <td width="40" height="40" bgcolor="black"></td>
    <td width="40" height="40" bgcolor="silver"></td>
</tr>
<tr>
    <td width="40" height="40" bgcolor="silver"></td>
    <td width="40" height="40" bgcolor="black"></td>
    <td width="40" height="40" bgcolor="silver"></td>
    <td width="40" height="40" bgcolor="black"></td>
</tr>
<tr>
    <td width="40" height="40" bgcolor="black"></td>
    <td width="40" height="40" bgcolor="silver"></td>
    <td width="40" height="40" bgcolor="black"></td>
    <td width="40" height="40" bgcolor="silver"></td>
</tr>
<tr>
    <td width="40" height="40" bgcolor="silver"></td>
    <td width="40" height="40" bgcolor="black"></td>
    <td width="40" height="40" bgcolor="silver"></td>
    <td width="40" height="40" bgcolor="black"></td>
</tr>
</table>
</html>
```
## CSS
```css
div{
    width: 40px;
    height: 40px;
    position: relative;
    margin-top: -0.99em;
    white-space: nowrap;
    display: inline-block;
}

#bloco-a{
    background-color: black;
}
#bloco-b{
    background-color: silver;
}
#bloco-c{
    background-color: black;
}
#bloco-d{
    background-color: silver;
}

div{
    width: 40px;
    height: 40px;
}

#bloco-e{
    background-color: silver;
}
#bloco-f{
    background-color: black;
}
#bloco-g{
    background-color: silver;
}
#bloco-h{
    background-color: black;
}

div{
    width: 40px;
    height: 40px;
}

#bloco-i{
    background-color: black;
}
#bloco-j{
    background-color: silver;
}
#bloco-k{
    background-color: black;
}
#bloco-l{
    background-color: silver;
}

div{
    width: 40px;
    height: 40px;
}

#bloco-m{
    background-color: silver;
}
#bloco-n{
    background-color: black;
}
#bloco-o{
    background-color: silver;
}
#bloco-p{
    background-color: black;
}

```

