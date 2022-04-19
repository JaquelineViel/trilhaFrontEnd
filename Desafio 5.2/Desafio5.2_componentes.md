<h1 align="center">Desafio 5.2 - Componentes</h1>
<h6 align="center">Jaqueline Viel</h6>

## Item 1 – Reutilização de componentes
---
#### **A.** A respeito de componente, responda:
<br>

**I.**	O que é um componente em aplicações Angular?

***Resposta:*** Os componentes são o principal bloco de construção para aplicativos Angular.

<br>

**II.**	Do que um componente é composto?

***Resposta:*** Cada componente consiste em:

- Um modelo HTML que declara o que é renderizado na página;

- Uma classe TypeScript que define o comportamento;

- Um seletor CSS que define como o componente é usado em um modelo;

- Opcionalmente, estilos CSS aplicados ao modelo.

<br>

**III.**	Qual é o comando utilizado para criar um componente utilizando Angular CLI?

***Resposta:*** Executar o ng generate component < component-name > omando, onde < component-name > é o nome do seu novo componente.

<br>

**IV.**	Qual a importância da reutilização de componentes?

***Resposta:*** Otimização o trabalho, gerar uma maior consistência em sua base, melhorar o fluxo de ajustes, cortar custos desnecessários, facilitar a colaboração, permitir escalonamento de projetos e acelerar o desenvolvimento.

<br>

**V.**	Qual a funcionalidade do selector no exemplo abaixo?


***Resposta:*** Serve como um selector CSS

<br>

**VI.** Explique a funcionalidade de templateUrl e template nos exemplos abaixo equando devemos utilizar cada uma delas

***Resposta:***

- templateUrl: Usado para definir o modelo HTML que o componente usa para exibir informações. Geralmente esse modelo é um arquivo HTML separado.
No caso do exemplo, pode-se notar que o templateUrl possui o valor de um link externo, sendo ele um html separado.

- template: Permite definir um modelo dentro do componente, adicione uma template propriedade ao decorador que contém o HTML que você deseja usar.@Component (sem ter a necessidade de abrir um html externamente, separado). No caso do exemplo, o template já exibe uma informação de '< h1>Hello World.</ h1>'

<br>

**VII.** Explique a funcionalidade de styleUrls e styles nos exemplos abaixo equando devemos utilizar cada um deles.

***Resposta:***

- styleUrls: Utilizada para declarar os estilos de um componente em um arquivo separado. No caso do exemplo, é inserido um link que direciona diretamente para a formatação de estilos de um componente mas em um arquivo separado.

- styles: Utilizada para declarar os estilos dentro do componente. No caso do exemplo, é definido um font-weight: normal, sem a necessidade de realizar o estilo em um arquivo separado.

---

## Item 2 – Rotas

---
#### **Sobre o funcionamento das rotas do Angular, responda:** 
<br>

**I.**	Qual é o comando no Angular CLI para criar uma nova aplicação com rotas?    

***Resposta:*** ng generate module app-routing --flat --module=app

<br>

**II.**	Qual é o comando no Angular CLI para criar um novo módulo com rotas?   

***Resposta:*** ng generate nome-do-projeto --routing

<br>

**III.** Para que serve o método navigate( ) da classe Router?

***Resposta:*** É utilizado para fazer a navegação via código.

<br>

**IV.** Para que serve o método isactive( ) da classe Router?

***Resposta:*** Função utilizada para receber informações de configuração de quando o link do router esta ativo.

<br>

**V.**  Para que serve o arquivo src/app/app-routing.module.ts? 

***Resposta:*** Possibilita a importação de rotas dentro do arquivo através do seu módulo de rotas.

**VI.** Para que serve a tag < router-outlet></ router-outlet>?

***Resposta:*** Atua como um espaço reservado que o Angular preenche dinamicamente com base no estado atual do roteador.

**VII.** Dê um exemplo de um botão chamando uma rota através de um método em angular.

***Resposta:*** 

```html
<button [routerLink]="['lista']">Abrir lista de números</button>
```

<br>

**VIII.** Dê um exemplo de um botão chamando uma rota sem chamar um método em angular.

***Resposta:***

```html
<a href="lista">
	<button>Abrir lista de números</button>
</a>
```

<br>

**IX.** O que é Lazy Load? Dê um exemplo da definição de uma rota em angular utilizando Lazy Load.

***Resposta:*** O Lazy Load (Lazy Loading, ou “carregamento preguiçoso”, em bom português) é uma técnica de programação que ajuda as páginas a exibirem seus conteúdos de maneira mais ágil e eficiente.

<br>

**X.** O que é Eager Load? Dê um exemplo da definição de uma rota em angular utilizando Eager Load.

***Resposta:*** é o mecanismo pelo qual uma associação, coleção ou atributo é carregado imediatamente quando o objeto principal é carregado. Dessa forma todas as relações de uma entidade serão carregadas no mesmo momento em que esta entidade é carregada. É o contrário do Lazy Loading.

---

## Item 3 – Pipes

---
#### **Por fim, respondas as seguintes perguntas sobre pipes** 
<br>

**I.** Qual é a utilidade dos pipes em aplicações Angular?    

***Resposta:*** Transformar strings, valores monetários, datas e outros dados para exibição. Pipes são funções simples para usar em expressões de modelo para aceitar um valor de entrada e retornar um valor transformado. Os pipes são úteis porque você pode usá-los em toda a sua aplicação, enquanto declara cada pipe apenas uma vez. Por exemplo, você usaria um pipe para mostrar uma data como 15 de abril de 1988 em vez do formato de string bruto.

<br>

**II.** Cite os 6 pipes que fazem parte do pacote inicial do Angular.    

***Resposta:*** 

- DatePipe;

- UpperCasePipe;

- LowerCasePipe; 

- CurrencyPipe;

- DecimalPipe;

- PercentPipe.

<br>

**III.** Descreva a funcionalidade de cada um dos pipes citados acima e dê um exemplo da sua utilização, juntamente com o resultado em tela.

***Resposta:*** 

- **DatePipe:** formata um valor de data de acordo com as regras de localidade.

- **UpperCasePipe:** transforma o texto em letras maiúsculas.

- **LowerCasePipe:** transforma o texto em todas as letras minúsculas.

- **CurrencyPipe:** transforma um número em uma string de moeda, formatada de acordo com as regras de localidade.

- **DecimalPipe:** transforma um número em uma string com um ponto decimal, formatado de acordo com as regras de localidade.

- **PercentPipe:** transforma um número em uma string de porcentagem, formatada de acordo com as regras de localidade.

<br>

**IV.** O que são custom pipes?

***Resposta:*** Custom pipes (pipes personalizados) são utilizados para criar transformações personalizadas do pipe.

---

Referências de pesquisa:

- [Angular - Angular Components Overview](https://angular.io/guide/component-overview)


- [Segredo Dev - O que é um componente reutilizável?](https://segredo.dev/o-que-e-um-componente-reutilizavel/#:~:text=Ao%20criar%20componentes%20reutiliz%C3%A1veis%20voc%C3%AA,projetos%20e%20acelerar%20o%20desenvolvimento.)

- [Angular - Routing Overview](https://angular.io/guide/routing-overview)

- [Angular - Router Module](https://angular.io/api/router/RouterModule)

- [Angular - Router](https://angular.io/guide/router)

- [Alright - O que é lazy load](https://alright.com.br/o-que-e-lazy-load/)

- [Desenvolvimento para web - Lazy loading nativo de imagens e iframes](https://desenvolvimentoparaweb.com/html/lazy-loading-nativo-imagem-iframe/)

- [Marcoratti.net - Curso Entity Framework - Eager Loading - XII](https://www.macoratti.net/Cursos/ef_curb1/ef_curb12.htm#:~:text=Eager%20Load%20%C3%A9%20o%20mecanismo,o%20contr%C3%A1rio%20do%20Lazy%20Loading.)

- [Angular - Transforming Data Using Pipes](https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations)











