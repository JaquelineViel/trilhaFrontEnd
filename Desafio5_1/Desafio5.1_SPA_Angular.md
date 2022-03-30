<h1 align="center">Desafio 5.1 - SPA Angular</h1>
<h6 align="center">Jaqueline Viel</h6>

## Exercícios SPA Angular

---
#### **A.** Explique de forma sucinta a diferença entre **SPA** e **MPA**;
<br>

***Resposta:***

O **SPA** (Single Page Application) é uma aplicação web que exibe o conteúdo em uma única página, sendo assim, quando solicitado o carregamento de um elemento em específico, o mesmo ficará disponível nesta mesma página, sem ter a necessidade de entregar múltiplas páginas ao usuário.
O SPA possibilita uma comunicação mais dinâmica com o servidor, deixando a apresentação dos dados solicitados mais eficiente.
As principais características, segundo [Bognar Junior](https://bognarjunior.wordpress.com/2016/02/28/angularjs-spa-single-page-application/#:~:text=Single%20Page%20Application%20ou%20SPA,o%20formato%20tradicional%20de%20desenvolvimento.), são:

- Equilibrar o desenvolvimento da aplicação, ou seja, não sobrecarregar o server-side e subutilizar o client-side;

- Otimizar a experiência do usuário da aplicação, dando maior ênfase nas técnicas de desenvolvimento front-end;

- Utilizar mais JavaScript para o desenvolvimento, normalmente com a ajuda de um framework.

O **MPA** (Multi Page Application) é uma plicação web que exibe o conteúdo em múltiplas páginas.
Possui diferentes páginas para os recursos do site, sendo assim, quando o usuário solicita entrar em algum recurso, é carregado para ele uma página com os dados da solicitação. 

As páginas são geradas dentro do servidor e enviadas para o usuário de acordo com a sua interação.

Segundo o site [Library](https://1library.org/article/single-page-application-spa-multi-page-application-mpa.q2gw83ry):

“Em resumo, as SPAs se tornam mais atrativas quando o assunto é experiência do usuário. Porém um dos grandes problemas com essa abordagem é a dificuldade que os mecanismos de busca possuem ao detectar suas páginas. Dessa forma para sites que de- pendem de uma otimização nos motores de busca (do inglês, Search Engine Optimization (SEO)), como comércios eletrônicos, sites de notícias a escolha de uma MPA pode ser a melhor opção.”

---
#### **B.** Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?    
<br>

***Resposta:***

Entre 1989 e 1990 o cientista Tim Berners-Lee teve uma proposta para facilitar a transição entre as páginas da internet, iniciando assim a World Wide Web (WWW), um formato de rede mais aprimorado.

O cientista também elaborou o sistema de navegação por cliques, sendo eles o **HTTP** e o **HTML**.

O **HTTP** (Hypertext Transfer Protocol - Protocolo de Transferência de Hipertexto) é o protocolo usado para transferência de dados entre os computadores, ele determina como será feita a comunicação entre um navegador e um servidor web.

O **HTML** (HyperText Markup Language - Linguagem de Marcação de HiperTexto) é a estrutura codificada por trás da página web, sendo o bloco de construção mais básico da web.

Contudo, ao longo dos anos foram surgindo mais linguagens de programação que foram muito eficientes e necessárias para a melhoria das páginas Web.

Entre essas linguagens, alguns destaques são (entre 1990 e 1ª década dos anos 2000):

- **Python:** 1991;
- **Ruby:** 1993;
- **Java:** 1995;
- **PHP:** 1995;
- **JavaScript:** 1995;
- **C#:** 2000; 

Com o surgimento dessas linguagens (além das que já existiam), ficou cada vez mais prático para os programadores trabalharem em um desenvolvimento de página Web mais atrativa, com boa navegabilidade e eficiência, uma boa experiência para o usuário e desenvolvedores.

Algumas páginas web de grandes empresas nos anos 90 comparadas com o ano de 2016:

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/Img1.0_d-72czxpt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648334393911">

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/Img1.1_xIGKeKwt2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648334393987">

<br>

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/Img2.0_Bp8GE7ket.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648334393454">

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/Img2.1_zdbEWqBTE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648334394110">

<br>

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/Img3.0_nf1PrjRYMN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648334393511">

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/Img3.1_3NzglwJf-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648334393340">

---
#### **C.** O que é WEB 1.0 , WEB 2.0 e WEB 3.0?  
<br>

***Resposta:***

- **WEB 1.0:** É a internet como ela surgiu. Sites de conteúdo estático com pouca interatividade dos internautas e diversos diretórios de links.
No começo a internet era mais restrita ao uso militar e universitário, nela os usuários tinham acesso a recursos limitados, comparando aos disponíveis nos dias de hoje.

- **WEB 2.0**: A Web 2.0, também chamada de web participativa, foi a revolução dos blogs e chats, das mídias sociais colaborativas, das redes sociais e do conteúdo produzido pelos próprios internautas.

- **WEB 3.0:** A Web 3.0 é uma internet onde teremos toda informação de forma organizada para que não somente os humanos possam entender, mas principalmente as máquinas, assim elas podem nos ajudar respondendo pesquisas e perguntas com uma solução concreta, personalizada e ideal. É uma internet cada vez mais próxima da inteligência artificial. É um uso ainda mais inteligente do conhecimento e conteúdo já disponibilizado online, com sites e aplicações mais inteligentes, experiência personalizada e publicidade baseada nas pesquisas e no comportamento de cada indivíduo.

Fonte de pesquisa: [EX2](https://ex2.com.br/blog/web-1-0-web-2-0-e-web-3-0-enfim-o-que-e-isso/)

---
#### **D.** Com suas palavras, responda às seguintes perguntas referentes ao Angular:
<br>


**I.** De forma resumida o que é o Angular?

***Resposta:***
O angular é uma plataforma construída em TypeScript, ou seja, ela possui um conjunto com o JavaScrip, possibilitando realizar todos os comandos de JS e mais alguns adicionais, ele é responsável pela criação de interface com o usuário.
Dentro deste framework é feita a criação do SPA, com isso, de uma forma dinâmica, a atualização de dados é feita somente sob aquilo que é solicitado pelo usuário (evitando muitos dados trafegados), tornando a interação do mesmo mais fluída, e deixando a comunicação entre o navegador e o servidor transparente para ele.

<br>

**II.** Qual a relação do Angular com SPA?

***Resposta:***
Como o objetivo do SPA é apresentar dados solicitados em um único carregamento de página, o angular o auxilia fazendo a sincronização com os dados armazenados no servidor de uma forma simples e bem estruturada.

<br>

**III.** Em uma aplicação básica, o que é essencial ter?

***Resposta:***
- **Componentes:** os componentes são os blocos de construção que compõem um aplicativo. 

- **Modelo:** Cada componente tem um modelo HTML que declara como esse componente é renderizado. Você define esse modelo inline ou por caminho de arquivo.

- **Injeção de dependência:** A injeção de dependência permite declarar as dependências de suas classes TypeScript sem cuidar de sua instanciação. Em vez disso, o Angular lida com a instanciação para você.

<br>

**IV.** O que é o Angular CLI e qual a sua importância? Dê exemplos;

***Resposta:***
É uma ferramenta que cria toda a estrutura necessária para o projeto, com os arquivos, diretórios e scripts necessários para o desenvolvimento da aplicação.

Ela é importante pois facilita a criação de elementos, classes e etc., ajuda a processar e agrupar diversos arquivos.

Alguns exemplos:
- **ng construir:** Compila um aplicativo Angular em um diretório de saída.
- **ng servir:** Constrói e atende seu aplicativo, reconstruindo em alterações de arquivo.
- **ng gerar:** Gera ou modifica arquivos com base em um esquema.
- **teste ng:** Executa testes de unidade em um determinado projeto.
- **ng e2e:** Cria e atende a um aplicativo Angular e, em seguida, executa testes de ponta a ponta.

<br>

**V.** Para que serve o arquivo angular.json?

***Resposta:***
O angular.json define o arquivo que vai iniciar a aplicação, traz propriedades sobre o projeto, entre elas qual é o caminho do arquivo principal main.ts;

<br>

**VI.** Quais pacotes (libs) são considerados primários (default)?

***Resposta:***

- HttpClient: Executa solicitações HTTP. Este serviço está disponível como uma classe injetável, com métodos para realizar requisições HTTP;

- Angular Animations: A animação fornece a ilusão de movimento: os elementos HTML mudam de estilo ao longo do tempo. Animações bem projetadas podem tornar seu aplicativo mais divertido e simples de usar, mas não são apenas cosméticas;

- Angular Schemes: Um esquema é um gerador de código baseado em modelo que suporta lógica complexa. É um conjunto de instruções para transformar um projeto de software gerando ou modificando código. Os esquemas são empacotados em coleções e instalados com npm;

- Angular Router: Implementa o serviço Angular Router , que permite a navegação de uma visualização para outra conforme os usuários realizam tarefas do aplicativo.
Define o **Route** objeto que mapeia um caminho de URL para um componente e a **RouterOutlet** diretiva que você usa para colocar uma visualização roteada em um modelo, bem como uma API completa para configurar, consultar e controlar o estado do roteador;

- PWA Angular:é uma biblioteca com suporte a service worker Angular que fornece uma experiência de usuário como se o aplicativo fosse projetado para ser executado em seu sistema operacional e hardware.

<br>

**VII.** Para que serve o arquivo package.json?

***Resposta:***
O arquivo package.jason descreve o projeto, configura dependências do mesmo (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados.

<br>

**VIII.** Para que serve o arquivo environment.ts?

***Resposta:***
O arquivo environment.ts pode ser usado para definir variáveis globais em ambiente de desenvolvimento

<br>

---
#### **E.** Sobre Text Interpolation, responda:
<br>

**I.** O que é?

***Resposta:***
A interpolação de texto permite incorporar valores de string dinâmicos em seus modelos HTML.

<br>

**II.** Quais os benefícios de se ter interpolação em uma aplicação Angular?

***Resposta:***
O benefício é que a interpolação pode ser usada para alterar dinamicamente o que aparece em uma exibição do aplicativo, como exibir uma saudação personalizada que inclui o nome do usuário.

<br>

**III.** Crie uma interpolação com o seu nome, com nome do seu guia, data do desafio e a sua turma do desafio.

O resultado esperado é mais ou menos assim:

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/Img4_6-tuWHDPx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648664655912">

<br>

***Resposta:***

<br>

## **app.component.ts**
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myname = 'Jaqueline Viel';

  myguia = 'George Victor';

  myturma = '10';

  date = new Date('2022-03-30T19:23:10.000')
}
```

## **app.component.html**
```html
<!DOCTYPE html>
<html lang="pt-br">

<body>
    <router-outlet>
    </router-outlet>

    <div>
        <p>Meu nome é: {{ myname }} e o do meu guia é: {{ myguia }}</p>
        <p>Data de hoje: {{ date }}</p>
        <p>Faço parte da turma: {{ myturma }}</p>
    </div>

</body>

</html>
```

## **app.component.css**
```css
* {
    margin: 2%;
    padding: 0%;
}

body {
    display: flex;
    justify-content: center;
}

div {
    border: 3px solid black;
    width: 50%;
}
```
### **VISUALIZAÇÃO:**

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/EX.4_8pPHSWupxG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648665143055">

---
#### **F.** A respeito de Bindings, responda:
<br>

**I.** O que é Property Binding e quais as suas aplicações?

***Resposta:*** A Property Binding Associa informação do componente para o template (HTML), ajuda a definir valores para propriedades de elementos ou diretivas HTML. Use a associação de propriedade para fazer coisas como a funcionalidade do botão de alternância, definir caminhos programaticamente e compartilhar valores entre componentes.

<br>

**II** Qual é o passo a passo do fluxo das informações com Property Binding?

***Resposta:*** A associação de propriedade move um valor em uma direção, da propriedade de um componente para uma propriedade do elemento de destino.

<br>

**III** Dê um exemplo de Property Binding e explique o seu funcionamento

***Resposta:***
Para associar à propriedade de um elemento, coloque-o entre colchetes, [], que identifica a propriedade como uma propriedade de destino. Uma propriedade de destino é a propriedade DOM à qual você deseja atribuir um valor. Por exemplo, a propriedade de destino no código a seguir é a srcpropriedade do elemento de imagem.

<br>

**src/app/app.component.html**
```html
<img alt="item" [src]="itemImageUrl">
```

Na maioria dos casos, o nome de destino é o nome de uma propriedade, mesmo quando parece ser o nome de um atributo. Neste exemplo, srcé o nome da <img>propriedade do elemento.

Os colchetes, [], fazem com que o Angular avalie o lado direito da atribuição como uma expressão dinâmica. Sem os colchetes, o Angular trata o lado direito como uma string literal e define a propriedade para esse valor estático.

**src/app.component.html**
```html
<app-item-detail childItem="parentItem"></app-item-detail>
```

Omitir os colchetes renderiza a string parentItem, não o valor de parentItem.

-**Fonte de informações:** [Angular - Property binding](https://angular.io/guide/property-binding)

<br>

**IV** O que é Event Binding?

***Resposta:***
Event Binding permite ouvir e responder às ações do usuário, como pressionamentos de tecla, movimentos do mouse, cliques e toques, vincula um código da aplicação a um certo evento disparado pelo navegador.

<br> 

**V** Dê um exemplo de Event Binding e explique o seu funcionamento.

***Resposta:***
Para vincular a um evento (Event Binding), você usa a sintaxe de vinculação de evento Angular. Essa sintaxe consiste em um nome de evento de destino entre parênteses à esquerda de um sinal de igual e uma declaração de modelo entre aspas à direita. No exemplo a seguir, o nome do evento de destino é clicke a instrução do modelo é onSave().

<br>

**Sintaxe de vinculação de eventos**
```html
<button (click)="onSave()">Save</button>
```

A associação de eventos escuta os eventos de clique do botão e chama o onSave()método do componente sempre que ocorre um clique.

<img src="https://ik.imagekit.io/zo6fhpfjl5f/5_1IMG/Img5_HqwbuhZ8S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648666735936">

-**Fonte de informações:** [Angular - Event Binding](https://angular.io/guide/event-binding)

<br>

**VI** O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo?

***Resposta:***
A associação bidirecional oferece aos componentes em seu aplicativo uma maneira de compartilhar dados. Use a associação bidirecional para ouvir eventos e atualizar valores simultaneamente entre componentes pai e filho.

<br>

**VII** Dê um exemplo de Two-Way-Data-Binding e explique.

***Resposta:***
A sintaxe de ligação bidirecional (Two-Way-Data-Binding) do Angular é uma combinação de colchetes e parênteses, [()]. A [()] sintaxe combina os colchetes de associação de propriedade, [], com os parênteses de associação de evento, (), conforme a seguir.

<br>

**src/app/app.component.html**
```html
<app-sizer [(size)]="fontSizePx"></app-sizer>
```

---
#### **G.** Diretivas:
<br>

**I** O que é uma diretiva Angular e qual o seu propósito?

***Resposta:***
As diretivas são classes que adicionam comportamento adicional aos elementos em seus aplicativos angular. Use as diretivas internas do Angular para gerenciar formulários, listas, estilos e o que os usuários veem.

Diretivas são extensões da linguagem HTML, que fornecem a possibilidade de estender/ampliar o comportamento de elementos HTML. Este recurso permite a implementação de novos comportamentos de forma declarativa.

<br>

**II** Quais tipos de diretivas existem?

***Resposta:***

- **Componentes:** diretivas com um modelo. Esse tipo de diretiva é o tipo de diretiva mais comum.

- **Diretivas de atributo:** diretivas que alteram a aparência ou o comportamento de um elemento, componente ou outra diretiva.

- **Diretivas estruturais:** diretivas que alteram o layout do DOM adicionando e removendo elementos DOM.

<br>

**III** O  Angular  possui  algumas  diretivas  default,  explique  as  6  principais  e  dê  um  exemplo de cada;

***Resposta:***

- **NgClass:** Adicione ou remova várias classes CSS simultaneamente com 

- **NgStyle:** Utilizado para definir vários estilos embutidos simultaneamente, com base no estado do componente.

- **NgModel:** Utilizada para exibir uma propriedade de dados e atualizar essa propriedade quando o usuário fizer alterações.

- **NgIf:** Adicione ou remova um elemento aplicando uma NgIf diretiva a um elemento host. 

- **NgFor:** se a NgFor diretiva para apresentar uma lista de itens. 

- **NgSwitch:** exibe um elemento entre vários elementos possíveis, com base em uma condição de troca. Angular coloca apenas o elemento selecionado no DOM. 

---
#### **H.** Reactive forms:
<br>

**I** Qual a diferença entre template-driven e reactive forms?

***Resposta:***

O **template-driven forms** é um tipo de formulário mais simples de implementar, dada a sua proximidade em relação a como criamos formulários apenas com HTML (é necessário importar o módulo FormsModule).

O **reactive forms** fornece uma abordagem baseada em modelo para lidar com entradas de formulário cujos valores mudam ao longo do tempo, a lógica fica, geralmente, no componente e as suas validações são feitas programaticamente com TypeScript (é necessário importar o módulo ReactiveFormsModule).

<br>

**II** Quais benefícios temos ao usar um formulário reativo?

***Resposta:*** 
São mais flexíveis, fornecem um caminho direto para teste, e com isso você pode ter a certeza de que seus dados são consistentes e previsíveis quando solicitados. Quaisquer consumidores dos fluxos têm acesso para manipular esses dados com segurança.
Fornecem também acesso síncrono ao modelo de dados, imutabilidade com operadores observáveis e rastreamento de alterações por meio de fluxos observáveis.

<br>

**III** Quais módulos são necessários para criar os formulários reativos?

***Resposta:*** ReactiveFormsModule 

<br>

**IV** Quais classes base temos para formulários reativos no Angular?

***Resposta:***

- **FormControl:** registra um único controle de formulário;

- **FormGroup:** faz com que a legenda e o campo fiquem juntos;

- **FormBuilder:** fornece métodos convenientes para gerar controles;

- **Validators:** fornece um conjunto de validadores internos que podem ser usados por controles de formulário;

- **FormArray:** é uma alternativa FormGroup para gerenciar qualquer número de controles sem nome;

- **AbstractControl:** A classe base abstrata para as classes de controle de formulário concreto FormControl, FormGroupe FormArray. Ele fornece seus comportamentos e propriedades comuns.

<br>

**V** Como é feita a configuração de um formulário reativo usando separadamente as classes base?

***Resposta:***
A [formControl] diretiva vincula a FormControlinstância criada explicitamente a um elemento de formulário específico na exibição, usando um acessador de valor interno (implementa um campo de entrada para um único controle).

<br>

**VI** Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?

***Resposta:*** Em formulários reativos, cada elemento de formulário na visualização está diretamente vinculado ao modelo de formulário (uma FormControlinstância). As atualizações da exibição para o modelo e do modelo para a exibição são síncronas e não dependem de como a interface do usuário é renderizada.

<br>

**VII** Como é feita a captura dos dados de um formulário reativo e apresentado na tela?

***Resposta:***

- O usuário chama o favoriteColorControl.setValue()método, que atualiza o FormControlvalor.

- A FormControlinstância emite o novo valor por meio do valueChangesobservável.

- Quaisquer assinantes do valueChangesobservável recebem o novo valor.

- O acessador de valor de controle no elemento de entrada de formulário atualiza o elemento com o novo valor.

<br>

**VIII** Explique  para  o  que  serve  a  validação  de  um  formulário  e  como  isto  pode  ser  apresentado para o usuário?

***Resposta:***
A validação de formulários faz parte do gerenciamento de qualquer conjunto de formulários, com isso ele melhora a qualidade geral dos dados 

•	Os **formulários reativos** definem validadores personalizados como funções que recebem um controle para validar.

•	Os **formulários orientados por modelo** estão vinculados a diretivas de modelo e devem fornecer diretivas de validação personalizadas que envolvem funções de validação.

Ele é apresentado ao usuário como uma solicitação de entrada de dados (ex.: login, cadastro e etc.), onde essa entrada deve receber os valores inseridos pelo mesmo, sendo a inserção de nome, preenchimento de todos os campos e etc.

---
Referências de pesquisa:

- [Trybe - Angular: como funciona esse framework e principais bibliotecas!](https://blog.betrybe.com/framework-de-programacao/angular/)

- [BognarJunior - ANGULARJS – SPA – SINGLE PAGE APPLICATION](https://bognarjunior.wordpress.com/2016/02/28/angularjs-spa-single-page-application/#:~:text=Single%20Page%20Application%20ou%20SPA,o%20formato%20tradicional%20de%20desenvolvimento.)

- [Library - Single Page Application SPA vs Multi Page Application MPA](https://1library.org/article/single-page-application-spa-multi-page-application-mpa.q2gw83ry)

<br>

- [TecMundo - A história da Internet: a década de 1990 [infográfico]](https://www.tecmundo.com.br/infografico/10054-a-historia-da-internet-a-decada-de-1990-infografico-.htm)

- [DevSkiller - História das linguagens de programação](https://devskiller.com/pt/historia-da-programacao-idiomas/)

- [CanalTech - Veja como eram os sites dessas 24 empresas nos anos 90](https://canaltech.com.br/internet/veja-como-eram-os-sites-dessas-24-empresas-nos-anos-90-62851/)

<br>

- [EX2 - Web 1.0, Web 2.0 e Web 3.0… Enfim, o que é isso?](https://ex2.com.br/blog/web-1-0-web-2-0-e-web-3-0-enfim-o-que-e-isso/)

<br>

- [Angular - Angular applications: The essentials](https://angular.io/guide/what-is-angular#angular-applications-the-essentials)

- [Angular - Angular CLI](https://angular.io/guide/what-is-angular#angular-cli)

- [Angular - CLI Overview and Command Reference](https://angular.io/cli)

- [DIO - Introdução ao angular: Conceitos e função de componentes](https://www.dio.me/articles/introducao-ao-angular-conceitos-e-funcao-de-componentes)

- [SchoolOfNet - Fórum (Angular CLI - environment.ts)](https://www.schoolofnet.com/forum/topico/angular-4-variaveis-globais-de-ambiente-4396)

<br>

- [Angular - Text interpolation](https://angular.io/guide/interpolation)

<br>

- [Angular - Property binding](https://angular.io/guide/property-binding)

- [CodeEducation - Propriedades reativas ou property binding no Angular](https://code.education/2017/06/propriedades-reativas-ou-property-binding-no-angular/)

- [Angular - Built-in directives](https://angular.io/guide/built-in-directives)

- [Portal GSTI - O que são diretivas no AngularJS e como usar]( https://www.portalgsti.com.br/2017/08/o-que-sao-diretivas-no-angularjs-e-como-usar.html)

- [Angular - Adding and removing classes with NgClass](https://angular.io/guide/built-in-directives#adding-and-removing-classes-with-ngclass)

<br>

- [DevMedia - Angular Forms - Uma visão Geral e como implementar no seu projeto](https://www.devmedia.com.br/angular-forms-uma-visao-geral-e-como-implementar-no-seu-projeto/40702#:~:text=Diferen%C3%A7as%20entre%20Template%2DDrivenorms%20e%20Reactive%20Forms&text=Template%2DDriven%20Forms%20funcionam%20de,s%C3%A3o%20feitas%20programaticamente%20com%20TypeScript.)

- [Angular - Validators](https://angular.io/api/forms/Validators)

- [Angular - Introduction to forms in Angular](https://angular.io/guide/forms-overview#introduction-to-forms-in-angular)

- [Angular - Adding a basic form control](https://angular.io/guide/reactive-forms#adding-a-basic-form-control)

- [Método Programar - Criando Formulário de Login com Angular](https://metodoprogramar.com.br/criando-formulario-de-login-com-angular/)
