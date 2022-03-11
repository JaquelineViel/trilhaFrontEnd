<h1 align="center">Desafio 2 - B</h1>
<h6 align="center">Jaqueline Viel</h6>

## Exercícios CSS

---
#### **I.** Explique com suas palavras a importância do CSS (mínimo 5 linhas e no máximo 10)
<br/>

***Resposta:*** O CSS é importante pois ele organiza todo o conteúdo da documentação, o deixando mais bonito, formatado e atrativo. Ele é como se fosse o designer do projeto da página Web, utilizando-se de atributos específicos para a identidade visual.

---
#### **II.** Explique a diferença entre class & id.
<br/>

***Resposta:*** O selector class é atribuído para maus de um elemento e/ou grupo de elementos (definido pelo . ).

O selector id é atribuído apenas para um elemento específico (definido pela #).


---
#### **III.** Como podemos fazer a inserção do CSS na página?
<br/>

***Resposta:*** De forma mais simples, ele pode ser inserido através da tag < style></ style> dentro da sessão < head></ head>, o estilo é definido depois de identificado um seletor, podendo ser ele < body>, < h1>, < text>, < p> entre outros.

Exemplo:

```html
<!doctype html>
<html lang="pt-br">

<head>
    <style>
        body{ /*Alterando a cor de fundo da página*/
            background-color:purple;
        }
        h1{ /*Alterando estilos de texto nível 1*/
            color:white;
            text-align: center;
            font-style: italic;
        }
        h2{ /*Alterando estilos de texto nível 2*/
            color:yellow;
        }
        li{ /*Alterando estilos de lista*/
            color:pink;
        }
    </style>
</head>
<body>
    <h1>Testando a cor branca na fonte, alinhado no meio e em itálico</h1>
    <h2>Testando a cor amarela na fonte</h2>
</body>
<nav>
    <ul>
        <li>A lista ficará pink</li>
        <li>A lista ficará pink</li>
        <li>A lista ficará pink</li>
    </ul>
</nav>
</html>
```
Visualização:
<img src="https://ik.imagekit.io/zo6fhpfjl5f/ex.c_qhtGUJDF6n3R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646969627486">

---
#### **IV.** Explique o que é encadeamento e agrupamento de seletores.
<br/>

***Resposta:***

---
#### **V.** O que é Box-Model e dê 3 exemplos de aplicação.
<br/>

***Resposta:***

---
#### **VI.** Explique a diferença entre Margin e Padding.
<br/>

***Resposta:***

---
#### **VII.** Explique o que é Position e dê um exemplo de cada.
<br/>

***Resposta:***