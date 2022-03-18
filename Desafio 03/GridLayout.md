<h1 align="center">Desafio 3 - GridLayout</h1>
<h6 align="center">Jaqueline Viel</h6>

## Exercícios GridLayout

---
#### **A.** Explique o que é o GridLayout?
<br>

***Resposta:*** Uma ferramenta de programação visual utilizada em grandes sessões de uma página web. São grades que formam linhas auxiliares na vertical e horizontal tornando o layout mais estilizado e alinhado.
Também pode utizar os elementos pai (container) onde diz como os elementos filhos (item) vão se comportar.

---
#### **B.** Cite e dê exemplos das propriedades do Grid Container?
<br>

***Resposta:*** 

- display: Define o elemento como um grid container;

- grid-template-columns: Define o número total de colunas que serão criadas no grid;

- grid-template-rows: Define a quantidade de linhas no grid;

- grid-template-areas: Define áreas específicas no grid. O ponto (.) pode ser utilizado para criar áreas vazias;

- grid-template: Atalho para definir o grid-template-columns, grid-template-rows e grid-template-areas;

- gap: Define o gap (gutter) entre os elementos do grid;

- grid-auto-columns: Define o tamanho das colunas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma coluna que não foi definida);

- grid-auto-rows - Define o tamanho das linhas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma linha que não foi definida);

- grid-auto-flow: Define o fluxo dos itens no grid. Se eles vão automaticamente gerar novas linhas ou colunas;

- grid: Atalho geral para definir o grid: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns e grid-auto-flow;

- justify-content: Justifica os itens do grid em relação ao eixo x (horizontal);

- align-content: Alinha os itens do grid em relação ao eixo y (vertical);

- justify-items: Justifica o conteúdo dos itens do grid em relação ao eixo x (horizontal). Justifica em relação a célula;

- align-items: Alinha o conteúdo dos itens do grid em relação ao eixo y (vertical). Alinha em relação a célula;

<br>

Fonte de pesquisa: [Origamid](https://www.origamid.com/projetos/css-grid-layout-guia-completo/)

---
#### **C.** Cite e dê exemplos das propriedades do Grid Item?
<br>

***Resposta:*** 

- grid-column: Define quais colunas serão ocupadas pelo grid item. É possível definir uma linha de início e final, assim o item irá ocupar múltiplas colunas.

- grid-row: Define quais linhas serão ocupadas pelo grid item - Atenção aqui, pois esse linha é referente a row. Porém as chamadas grid lines que por tradução também significam linhas do grid, são diferentes. Uma row (linha), possui sempre 2 grid lines (linhas do grid), uma no início dela e uma no final dela.

- grid-area: Define a área do item do grid. É um atalho para grid-row-start, grid-column-start, grid-row-end, grid-column-end.
O z-index pode ser utilizado para manipular a posição no eixo Z do item. Ou seja, se um item for posicionado em cima de outro, o z-index controla qual vêm na frente.

- justify-self: Justifica o item do grid em relação ao eixo x (horizontal). Justifica em relação a célula.

- align-self: Justifica o item do grid em relação ao eixo y (vertical). Alinha em relação a célula.

<br>

Fonte de pesquisa: [Origamid](https://www.origamid.com/projetos/css-grid-layout-guia-completo/)

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

        <header id="header">
            <h3>
                Header
            </h3>
        </header>

        <nav id="nav">
            <h3>
                Nav
            </h3>
        </nav>

        <section id="section">
            <h3>
                Section
            </h3>
            <article id="article">
                <h3>
                    Article
                </h3>
            </article>
        </section>

        <aside id="aside">
            <h3>Aside</h3>
        </aside>

        <footer id="footer">
            <h3>Footer</h3>
        </footer>

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
    grid-template-areas: 'header header header' 'nav nav nav' 'section section aside' 'footer footer footer';
}

.container div {
    background-color: silver;
    padding: 5px;
}

#header {
    grid-area: header;
    background-color: silver;
    padding-left: 2%;
}

#nav {
    grid-area: nav;
    background-color: blue;
    color: white;
    padding-left: 2%;
}

#section {
    grid-area: section;
    background-color: silver;
    padding-left: 3%;
    height: 300px;
    padding-right: 20px;
}

#article {
    grid-area: article;
    background-color: grey;
    padding-left: 1%;
    height: 220px;
    margin: 1%;
}

#aside {
    grid-area: aside;
    background-color: silver;
    padding-left: 5%;
}

#footer {
    grid-area: footer;
    background-color: silver;
    padding-left: 2%;
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

        <header id="header">
            <h1>
                Header
            </h1>
        </header>

        <nav id="nav">
            <ul>
                <li><a href="#" style="color: white;">Item 1</a></li>
                <li><a href="#" style="color: white;">Item 2</a></li>
                <li><a href="#" style="color: white;">Item 3</a></li>
            </ul>
        </nav>

        <section id="section">
            <article id="article">
                <h2>
                    Article
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Donec ac uma nisl. Maecenas quis mauris ac nisi volutpat</p>
                <p>tincidunt sed id orci Fusce dapibus gravida arcu.</p>
            </article>
        </section>

        <aside id="aside">
            <h3>Aside</h3>
        </aside>

        <footer id="footer">
            <h3>Footer</h3>
        </footer>

    </div>

</body>

</html>
```

<br>

### CSS

```css
.container {
    padding: 4px;
    display: grid;
    gap: 15px;
    grid-template-areas: 'header header header' 'nav nav nav' 'section section aside' 'footer footer footer';
}

.container div {
    background-color: silver;
    padding: 5px;
}

#header {
    grid-area: header;
    background-color: silver;
    padding-left: 2%;
    height: 80px;
}

#nav {
    grid-area: nav;
    background-color: blue;
    color: white;
    padding-left: 0%;
    height: 80px;
}

#section {
    grid-area: section;
    background-color: silver;
    height: 210px;
}

#article {
    grid-area: article;
    background-color: silver;
    margin: 6%;
}

#aside {
    grid-area: aside;
    background-color: silver;
    padding-left: 5%;
}

#footer {
    grid-area: footer;
    background-color: silver;
    padding-left: 2%;
}

@media(max-width: 600px) {
    .container {
        padding: 5px;
        display: grid;
        gap: 10px;
        grid-template-areas: 'header header' 'nav nav' 'section section' 'aside aside' 'footer footer';
    }
}
```

---
Referências de pesquisa:

<br>

- [Developer.mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

- [Tableless](https://tableless.com.br/um-pouco-sobre-css-grid-layout/)

- [Origamid](https://www.origamid.com/projetos/css-grid-layout-guia-completo/)

