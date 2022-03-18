<h1 align="center">Desafio 3 - FlexBox</h1>
<h6 align="center">Jaqueline Viel</h6>

## Exercícios FlexBox

---
#### **A.** Explique o que é o FlexBox?
<br>

***Resposta:*** O FlexBox é uma propriedade do css que realiza a organização e alinhamento dos componentes/ elementos da página, ele é flexível e vem ajudando os desenvolvedores a resolverem alguns problemas de layout.
Esta propriedade é caracterizada por um container, onde nele você pode organizar da forma que quiser, com alinhamento, distribuição de espaço entre ele ou em sua volta.

---
#### **B.** Cite e explique cada propriedade do eixo principal.    
<br>

***Resposta:*** O eixo principal é definido pela propriedade flex-direction, podendo ter os valores de: row | row-reverse | column | column-reverse.
- flex-direction: row ou flex-direction row-reverse: 
Se o valor escolhido for row (linha) ou row-reverse (linha reversa), seu eixo principal se moverá ao longo da linha — na direção inline.

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img1.0_j2tCx2GNXta1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647452576886">

<br>

- flex-direction: column ou flex-direction column-reverse: 
Se o valor escolhido for column (coluna) ou column-reverse (coluna reversa) e o eixo principal se moverá do topo até o fim da página — na direção block.

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img1.1_ubnFwBbKELZ75.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647452577005">

Fonte de pesquisa:
[Developer.mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

---
#### **C.** Cite e explique cada propriedade do eixo transversal.   
<br>

***Resposta:*** O eixo transversal é perpendicular ao eixo principal, logo, se a propriedade flex-direction estiver definida nas linhas, como row ou row-reverse, o eixo transversal estará na direção das colunas, como column ou column-reverse.

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img2.0_2MpTVH25eR5Iv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647452577000">

<br>

Se o eixo principal for definido nas colunas, como column ou column-reverse, então o eixo transversal estará na direção das linhas, como row ou row-reverse.

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img2.1_JMCGXAdAn4mrs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647452577256">

Fonte de pesquisa:
[Developer.mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

---

#### **D.** Explique o que é um Flex Container? 
<br>

***Resposta:*** O flex container é o elemento pai, que direciona comandos aos elementos-filhos (flex items).

---
#### **E.** Explique o que é um Flex Item?
<br>

***Resposta:*** O Flex Item é o elemento filho que recebe comandos do elemento pai (flex container)

---
#### **F.** Como funciona o flex-wrap?
<br>

***Resposta:*** Na primeira imagem, sendo definido dentro do .Item a width de 50%, na nossa visão os blocos deveriam se dividir em 2 para cada linha, se distribuindo por iguais, porém, por padrão o flex determina que fique tudo alinhado na mesma linha.

- Sem flex-wrap:

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img3.0_naMz34qgCUkrg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647452895143">

O flex-wrap apresenta uma maneira mais fácil de manipular os elementos, sendo assim, o tamanho inserido vai ser respeitado, dando uma liberdade maior para a manipulação do tamanho dos elementos.

<br>

- Com flex-wrap: Elementos de bloco divididos por igual (50%) em dentro da página

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img3.1_OvQTRMWnEnSw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647452893390">

---
#### **G.** Como é feita a Expansão, Encolhimento e Tamanho dos elementos ¬ex?
<br>

***Resposta:*** Pode ser feita através dessas 3 propriedades: 

- flex-grow (en-US): pode-se definir como um inteiro positivo, os elementos flex podem crescer ao longo do eixo principal, a partir do valor mínimo estabelecido nessa propriedade;

- flex-shrink (en-US): Controla a redução dps elementos;

- flex-basis (en-US): define o tamanho inicial dos elementos, em unidades de pixel, antes que o espaço remanescente seja redistribuído.


---
#### **H.** Como é feito o Alinhamento, Justificação e Distribuição de espaço livre entre os elementos?
<br>

***Resposta:*** Feito através dessas propriedades:

- align-items: Alinha os elementos no eixo transversal;

- justify-content: alinha os elementos ao longo do eixo principal;

---
#### **I.** Com base nos conceitos aprendidos até aqui, crie um arquivo index_flexbox.html para criar um menu usando FlexBox como da figura 1:
<br>

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img4.0_l_qJGm_kzxCG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647452577785">

***Resposta:*** 
<br>

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Desafio 3 - FlexBox Exercicio I</title>
    <style>
        .container {
            display: flex;
            flex-direction: row;
            border: 1px solid black;
            height: 50px;
            width: 100%;
            align-items: center;
        }
        
        #logo {
            width: 77%;
            margin: 20px;
        }
        
        .menu {
            width: 20%;
            text-align: center;
            justify-content: flex-end;
        }
    </style>
</head>

<body>
    <div class="container">

        <div id="logo">
            <a href="url">Your logo</a>
        </div>

        <div class="menu">Menu 1</div>
        <div class="menu">Menu 2</div>
        <div class="menu">Menu 3</div>
        <div class="menu">Menu 4</div>

    </div>

</body>

</html>
```
---

#### **j.** Aproveitando o menu criado no item H, crie um arquivo index_flexbox_resp.html e torne o menu responsivo como da figura 2:
<br>

<img src="https://ik.imagekit.io/zo6fhpfjl5f/3IMG/img5.0_wnAr8rDK_wjS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647453300603">

***Resposta:*** 

<br>

### HTML

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Desafio 3 - FlexBox Exercicio J</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="container">
        <nav>
            <h4><a href="#">Your logo</a></h4>
            <div class="button">
                <img src="https://img.icons8.com/android/24/000000/menu.png">
            </div>
            <ul class="menu">
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
            </ul>
        </nav>
    </div>
    </div>
    <script src="main.js"></script>
</body>

</html>
```
<br>

### CSS

```css
* {
    margin: 0, 5%;
    padding: 0, 5%;
    box-sizing: border-box;
}

nav {
    padding: 0% 20px;
    align-items: center;
    height: 75px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
}

li:hover,
h1:hover,
img:hover {
    cursor: pointer;
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.2);
}

nav,
ul,
li {
    list-style: none;
}

nav ul.menu {
    position: absolute;
    padding: 5px;
    top: 71px;
    right: 0.6%;
    border: 1px solid black;
    display: none;
    flex-direction: column;
}

nav ul.menu li:not(:last-child) {
    margin-bottom: 10px;
}

nav ul.menu li {
    margin-right: 33px;
}

nav ul.button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media(min-width: 600px) {
    nav ul.menu {
        display: flex!important;
        flex-direction: row;
        position: relative;
        top: 0%;
        padding: 0%;
        justify-content: space-between;
        border: none;
        flex-wrap: wrap;
    }
    img {
        display: none;
    }
    nav ul.menu li:not(:last-child) {
        margin-bottom: 0;
        flex-direction: row;
        justify-content: space-around;
    }
}
```
<br>

### JS

```js
let menuaberto = false;
const button = document.querySelector('nav img');
const menu = document.querySelector('nav ul.menu');

button.addEventListener("click", () => {
    if (!menuaberto) {
        menu.style.display = 'flex';
        menuaberto = true;
    } else {
        menu.style.display = 'none';
        menuaberto = false;
    }
})
```


---
Referências de pesquisa:
<br>

- [Developer.mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

- [Developer.mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#alinhamento_justifica%C3%A7%C3%A3o_e_distribui%C3%A7%C3%A3o_de_espa%C3%A7o_livre_entre_os_elementos)


- [DPW](https://desenvolvimentoparaweb.com/css/flexbox/)

- [Trybe](https://blog.betrybe.com/css/css-flexbox/#4)

