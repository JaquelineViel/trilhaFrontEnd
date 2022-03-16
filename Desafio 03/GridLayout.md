<h1 align="center">Desafio 3 - GridLayout</h1>
<h6 align="center">Jaqueline Viel</h6>

## Exercícios GridLayout

---
#### **A.** Explique o que é o FlexBox?
<br>

***Resposta:*** Uma ferramenta de programação visual utilizada em grandes sessões de uma página web. São grades que formam linhas auxiliares na vertical e horizontal tornando o layout mais estilizado e alinhado.
Também pode ser definido como pai (container) onde diz como os elementos filhos (item) vão se comportar.

---
#### **B.** Cite e dê exemplos das propriedades do Grid Container?
<br>

***Resposta:*** 

- display: grid 
// Torna o elemento um grid container.

- display: inline-grid
// Torna o elemento um grid container porém com comportamento inline.

- display: subgrid;
// Para grids dentro de grids (ainda não é suportado, porém você pode normalmente colocar display: grid; no grid dentro do grid que funciona).

---
#### **C.** Cite e dê exemplos das propriedades do Grid Item?
<br>

***Resposta:*** 
- grid-row-start - que recebe a linha vertical em que deve iniciar,

- grid-row-end - que recebe a linha vertical em que deve acabar,

- grid-column-start - que recebe a linha horizontal em que deve iniciar e

- grid-column-end- que recebe a linha horizontal em que deve acabar.
---
#### **D.** O que é a unidade fr?
<br>

***Resposta:*** “A unidade fr representa uma fração do espaço disponível no container do grid. A próxima definição de grid cria três espaços com tamanhos iguais que aumentam e diminuem de acordo com o espaço disponível.” – [Developer.mozila](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout).

---
#### **E.** O que é a notação repeat?
<br>

***Resposta:*** A notação repeat é utilizada para a repetição da seção de track listing

---
#### **F.** O que são as linhas do Grid?
<br>

***Resposta:*** As linhas são numeradas e podem ser posicionadas a partir do layout da trilha definida.

---
#### **G.** O que é uma célula no Grid?
<br>

***Resposta:*** A célula é a menor unidade do grid, pode ser comparada com uma célula de tabela. O grid sendo definido como pai, os items (filhos) serão organizados e distribuídos em célular. 

---
#### **H.** O que são áreas do Grid?
<br>

***Resposta:*** Áreas do grid é o espaço em que o item se ocupa (sempre retangulares – não em L por exemplo)

---
#### **I.** Crie  um  arquivo  index_grid_exer.html  e  desenvolva  uma  tela  com  aparência  da  figura 4. Dica: use o HTML Semântico para facilitar a construção.
<br>

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img6_0qQ1-8dtSS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647463401836">

***Resposta:***

<br>

### HTML

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Desafio 3 - Grid exercício i</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container" id="templade-areas">
        <div id="header">
            <h3>
                Header
            </h3>
        </div>
        <div id="nav">
            <h3>
                Nav
            </h3>
        </div>
        <div id="section">
            <h3>
                Section
            </h3>
        </div>
        <div id="article">
            <h3>
                Article
            </h3>
        </div>
        <div id="aside">
            <h3>Aside</h3>
        </div>
        <div id="footer">
            <h3>Footer</h3>
        </div>
    </div>

</body>

</html>
```

<br>

### CSS
```css
.container {
    padding: 5px;
    display: grid;
    gap: 10px;
    grid-template-areas: 'header header header' 'nav nav nav' 'section aside aside' 'article 0 0' 'footer footer footer';
}

.container div {
    background-color: silver;
    padding: 5px;
}

#header {
    grid-area: header;
}

#nav {
    grid-area: nav;
    background-color: blue;
    color: white;
}

#section {
    grid-area: section;
    height: 150px;
    padding-right: 500px;
}

#article {
    grid-area: article;
    background-color: grey;
    height: 80px;
    padding-right: 80px;
}

#aside {
    grid-area: aside;
    height: 150px;
    padding-right: 500px;
}

#footer {
    grid-area: footer;
}
```

---
#### **J.** Aproveitando o menu criado no item I, crie um arquivo index_grid_exerc_resp.html e torne-o responsivo como da figura 5. Dica: para torná-lo responsivo veja a dica do exercício de FlexBox.
<br>

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img7_CGI-BLxB1j.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647463402202">

***Resposta:***

<br>

### HTML

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Desafio 3 - Grid exercício J</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container" id="templade-areas">
        <div id="header">
            <h3>
                Header
            </h3>
        </div>
        <div id="nav">
            <h3>
                Nav
            </h3>
            <ul>
                <li><a href="#" style="color: white;">Item 1</a></li>
                <li><a href="#" style="color: white;">Item 2</a></li>
                <li><a href="#" style="color: white;">Item 3</a></li>
            </ul>
        </div>
        <div id="section">
            <h3>
                Section
            </h3>
        </div>
        <div id="article">
            <h3>
                Article
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Donec ac uma nisl. Maecenas quis mauris ac nisi volutpat</p>
            <p>tincidunt sed id orci Fusce dapibus gravida arcu.</p>
        </div>
        <div id="aside">
            <h3>Aside</h3>
        </div>
        <div id="footer">
            <h3>Footer</h3>
        </div>
    </div>

</body>

</html>
```

<br>

### CSS

```css
.container {
    padding: 5px;
    display: grid;
    gap: 15px;
    grid-template-areas: 'header header header' 'nav nav nav' 'section aside aside' 'article article article' 'footer footer footer';
}

.container div {
    background-color: silver;
    padding: 5px;
}

#header {
    grid-area: header;
}

#nav {
    grid-area: nav;
    background-color: blue;
    color: white;
}

#section {
    grid-area: section;
    height: 150px;
    padding-right: 500px;
}

#article {
    grid-area: article;
    background-color: grey;
    height: 150px;
}

#aside {
    grid-area: aside;
    height: 150px;
    padding-right: 500px;
}

#footer {
    grid-area: footer;
}
```

---
Referências de pesquisa:

<br>

- [Developer.mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

- [Tableless](https://tableless.com.br/um-pouco-sobre-css-grid-layout/)
