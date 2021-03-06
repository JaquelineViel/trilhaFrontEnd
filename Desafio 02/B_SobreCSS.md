<h1 align="center">Desafio 2 - B</h1>
<h6 align="center">Jaqueline Viel</h6>

## Exercícios CSS

---
#### **I.** Explique com suas palavras a importância do CSS (mínimo 5 linhas e no máximo 10)
<br>

***Resposta:*** O CSS é importante pois ele organiza todo o conteúdo da documentação, o deixando mais bonito, formatado e atrativo. Ele é como se fosse o designer do projeto da página Web, utilizando-se de atributos específicos para a identidade visual.

---
#### **II.** Explique a diferença entre class & id.
<br>

***Resposta:*** O selector class é atribuído para mais de um elemento e/ou grupo de elementos (definido pelo . ).

O selector id é atribuído apenas para um elemento específico (definido pela #).


---
#### **III.** Como podemos fazer a inserção do CSS na página?
<br>

***Resposta:*** De forma mais simples, ele pode ser inserido através da tag < style></ style> dentro da sessão < head></ head>, o estilo é definido após de a identificação um seletor, podendo ser ele < body>, < h1>, < text>, < p> entre outros, ou inserindo um link rel dentro do head o direcionando para o css/style.css.

***Exemplo simples:***

```html
<!doctype html>
<html lang="pt-br">

<head>
    <style>
        body {
            /*Alterando a cor de fundo da página*/
            background-color: purple;
        }

        h1 {
            /*Alterando estilos de texto nível 1*/
            color: white;
            text-align: center;
            font-style: italic;
        }

        h2 {
            /*Alterando estilos de texto nível 2*/
            color: yellow;
        }

        li {
            /*Alterando estilos de lista*/
            color: pink;
        }
    </style>
</head>

<body>
    <h1>Testando a cor branca nas letras, alinhado no meio e formatado em itálico</h1>
    <h2>Testando a cor amarela na fonte</h2>
</body>
<nav>
    <ul>
        <li><b>A lista ficará pink</b></li>
        <li><b>A lista ficará pink</b></li>
        <li><b>A lista ficará pink</b></li>
    </ul>
</nav>

</html>
```
<br>
<img src="https://ik.imagekit.io/zo6fhpfjl5f/imagens_corretas/ex.c_yqZKZjU0HU2vn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647126223056">

---
#### **IV.** Explique o que é encadeamento e agrupamento de seletores.
<br>

***Resposta:*** Os encadeados exigem uma especificidade, onde em casos de alterações de algum estilo em um elemento ou palavra em específico, você deve especificar como será feito.

Agrupamento de seletores é o conjunto vários elementos onde você deseja atribuir as mesmas características a eles.


---
#### **V.** O que é Box-Model e dê 3 exemplos de aplicação.
<br>

***Resposta:*** Todo elemento inserido em uma página web, geralmente é acompanhado de uma caixa retangular.
Uma dessas caixas (box), é a Box-Model, sendo ela um modelo padrão.

Alguns exemplos de aplicação são:  área de conteúdo (content area); área de preenchimento (padding area); área de borda (border area) e área de margem (margin area) 


---
#### **VI.** Explique a diferença entre Margin e Padding.
<br>

***Resposta:*** O margin faz a separação do elemento de elementos vizinhos, faz um espaçamento fora do conteúdo.
O padding realiza o preenchimento dentro dos limites do conteúdo.

---
#### **VII.** Explique o que é Position e dê um exemplo de cada.
<br>

***Resposta:*** Position é um recurso que ordena e determina o lugar/posição de elementos em uma determinada página web, blog, rede social etc.

1.  Área de conteúdo (content area) - Aréa destinada ao conteúdo da página Web.

2. Área de preenchimento (padding area) - Extenção do conteúdo, quando a formatação de cores ou imagem, ele se estende para a área de preenchimento.

3.  Área de borda (border area) - Se estende da área de preenchimento, possui as dimensões de largura e a altura do border-box.

4. Área de margem (margin area) - Faz a separação do elemento de elementos vizinhos, faz um espaçamento fora do conteúdo.
---
Referências de pesquisa:
<br>

- [GoDaddy Brasil - Position CSS: Estilos de Posição Para O Seu Layout](https://br.godaddy.com/blog/position-css-estilos-de-posicao-para-seu-layout/#:~:text=A%20position%20CSS%20%C3%A9%20um,devido%20a%20esse%20%E2%80%9Ccomando%E2%80%9D.)
<br>

- [MdnWebDocs - Box model](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
<br>

- [GETTING STARTED - Box Model](https://tableless.github.io/iniciantes/manual/css/box-model.html)
<br>

- [IMasters - Seletores Agrupados e Encadeados](https://imasters.com.br/css/seletores-agrupados-e-encadeados)
<br>

- [Linha de código - Agrupando seletores em uma regra CSS](http://www.linhadecodigo.com.br/artigo/276/agrupando-seletores-em-uma-regra-css.aspx)
<br>

- [Tableless - Seletores Agrupados e Encadeados](https://tableless.com.br/seletores-agrupados-e-encadeados/)
<br>

- [DPW - Diferenças entre IDs e Classes](https://desenvolvimentoparaweb.com/css/diferencas-entre-ids-e-classes/)