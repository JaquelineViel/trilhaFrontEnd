<h1 align="center">Desafio 5.3 - Serviços</h1>
<h6 align="center">Jaqueline Viel</h6>

## Item 1: Services

---
#### **A.** A respeito de services, responda:
<br>

**I.** Qual o propósito de services no angular?  

***Resposta:*** O services é uma categoria ampla que engloba qualquer valor, função ou recurso que um aplicativo precisa. Um serviço é tipicamente uma classe com um propósito estreito e bem definido. Deve fazer algo específico e fazê-lo bem.

<br>

**II.** Porque no Angular há uma distinção entre components e services?    

***Resposta:***  Angular distingue componentes de serviços para aumentar a modularidade e a reutilização. Ao separar a funcionalidade relacionada à visualização de um componente de outros tipos de processamento, você pode tornar suas classes de componentes enxutas e eficientes.

<br>

**III.** Como as services são disponibilizadas em um component?

***Resposta:*** Um component pode delegar determinadas tarefas aos services, como buscar dados do servidor, validar a entrada do usuário ou fazer logon diretamente no console. Ao definir essas tarefas de processamento em uma classe de serviço injetável , você disponibiliza essas tarefas para qualquer componente. Você também pode tornar seu aplicativo mais adaptável injetando diferentes provedores do mesmo tipo de serviço, conforme apropriado em diferentes circunstâncias.

<br>

**IV.** Que tipo de tarefas uma service pode ter?   

***Resposta:*** Pode ter tarefas direcioadas pelo componet, sendo elas a busca de dados do servidor, validador de entrada do usuário ou fazer logon diretamente no console.

<br>

**V.** Verdadeiro ou Falso. Uma service precisa obrigatoriamente estar em pelo menos um módulo? Justifique sua escolha.

***Resposta:*** Verdadeiro, pois ela precisa deste módulo para gerar a função e realizar a comunicação com o component.

<br>
 
**VI.** Verdadeiro ou Falso. Uma service é do tipo de padrão de projeto Singleton?Justifique sua escolha.

***Resposta:*** Verdadeiro, pois o singleton é uma classe que deve ter apenas uma instância e pode ser utilizado por mais components e services.

<br>

**VII.** Escreva uma service que deverá ter os seguintes métodos e em cada um deverá escrever uma implementação básica (pode ser usado Arrays):

***Resposta:*** 

- **getUsers( ): <any> { }**

```js
getUsers( ): <users> { 
    	return this.http.get<users>(this.url);
}
```
<br>

- **getUserById(userId: number): <number> { }**

```js
getUserById(userId: number): <number> { 
    	return this.http.get<number>(this.url);
}
```
<br>

- **setUsers(users: any): <any> { }**

```js
setUsers(users: any): <any> {
    	return this.http.get<any>(this.url);
}
```
<br>

- **deleteUser(userId: number): <any> { }**

```js
- deleteUser(userId: number): <number> { 
    	return this.http.delete<number>(this.url);
}
```
<br>

---

#### **B.** A respeito de services, responda:
<br>

**I.** O que é Injeção de Dependências?    

***Resposta:*** A DI é conectada à estrutura Angular e usada em todos os lugares para fornecer novos componentes com os serviços ou outras coisas que eles precisam. Componentes consomem serviços; ou seja, você pode injetar um serviço em um componente, dando ao componente acesso a essa classe de serviço.

<br>

**II.** Verdadeiro  ou  Falso.  Injeção  de  Dependências  pode  ser  apenas  de  services? Justifique sua escolha.    

***Resposta:*** Falso, pode ser também uma função, por exemplo, ou um valor.

<br>

**III.** Verdadeiro ou Falso. O Angular quando vai instanciar uma classe de componente verifica se as injeções de dependência já não estão sendo usadas?Justifique sua escolha.

***Resposta:*** Verdadeiro, ao saber que um componente depende de um serviço, o angular primeiro verifica se o injetor possui instâncias existentes desse serviço. Se uma instância de serviço solicitada ainda não existir, o injetor cria uma usando o provedor registrado e a adiciona ao injetor antes de retornar o serviço ao Angular.

---

#### **C.** HTTP Client:
<br>

**I.** O que é o protocolo HTTP? 

***Resposta:*** O protocolo HTTP é responsável por fornecer a comunicação entre front-end e o servidor, ele baixa, carrega dados e acessa também outros serviços de back-end.

<br>

**II.** Cite outros tipos de comunicação com o backend e faça um breve resumo de cada.    

***Resposta:*** 

- REST: Um conjunto de princípios e definições necessários para a criação de um projeto com interfaces bem definidas.

- SOAP: Um protocolo para troca de informações estruturadas em uma plataforma descentralizada e distribuída.


<br>

**III.** Que recursos o HTTP nos fornece?

***Resposta:*** 

- A capacidade de solicitar objetos de resposta digitados;

- Tratamento de erros simplificado;

- Recursos de testabilidade;

- Interceptação de solicitação e resposta .

<br>

**IV.** Para usar o HttpClient no Angular, como devemos fazer sua importação e injeção?

***Resposta:*** É necessário importar o arquivo Angular HttpClientModule.
Configurar o injetor de dependência HttpClient com serviços de suporte para XSRF (Sea Surf ou Session Riding - é um vetor de ataque que aplica um truque no navegador web, fazendo com que ele execute uma ação indesejada na aplicação web alvo onde a vítima está logada). Importado automaticamente por HttpClientModule.

<br>

**V.** Verdadeiro ou Falso. O HttpClient pode ser usado com RxJS? Justifique sua escolha.

***Resposta:*** Verdadeiro, pois o HttpClient solicita informações e recupera as respostas, e o RxJS é uma biblioteca para construção de programas assíncronos ou baseado em eventos, utilizando uma sequência de observables.

<br>

**VI.** Cite os principais métodos HTTP e faça um breve resumo de cada.

***Resposta:*** 

- **get():** este método recebe dois argumentos; a URL do terminal a partir da qual buscar e um objeto de opções que é usado para configurar a solicitação;

- **POST:** Cria um novo Produto;

- **PUT:** Atualiza um produto;

- **DELETE:** Deleta um produto;

- **HEAD:** O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta;

- **CONNECT:** O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino;

- **OPTIONS:** O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino;

- **TRACE:** O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino;

- **PATCH:** O método PATCH é utilizado para aplicar modificações parciais em um recurso.

<br>

**VII.** Verdadeiro  ou  Falso.  Com  o  protocolo  HTTP  é  possível  dizer/setar  o  tipo  de resposta do servidor backend? Justifique sua escolha.

***Resposta:*** Verdade, pois através do HttpClient.get() - método para buscar dados de um servidor - O método assíncrono envia uma solicitação HTTP e retorna um Observable que emite os dados solicitados quando a resposta é recebida. O tipo de retorno varia com base nos valores observee responseTypeque você passa para a chamada.

<br>

**VIII.** Cite os tipos de retorno que uma requisição HTTP pode ter? Faça um breve resumo de cada.

***Resposta:*** 

- Respostas de informação (100-199): Códigos informativos indicando que a solicitação iniciada pelo navegador continua;

- Respostas de sucesso (200-299): Retornados quando o pedido do navegador foi recebido, compreendido e processado pelo servidor;

- Redirecionamentos (300-399): Retornados quando um novo recurso foi substituído pelo recurso solicitado;

- Erros do cliente (400-499): Indicando que houve um problema com o pedido;

- Erros do servidor (500-599): Indicam que a solicitação foi aceita, mas que um erro no servidor impediu o cumprimento da solicitação.

<br>

**IX.** Cite os principais status de uma requisição HTTP e faça um breve resumo de cada.

***Resposta:*** 

- **100 Continue:** Essa resposta provisória indica que tudo ocorreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se já concluiu o que gostaria;

- **201 Created:**
A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma tipica resposta enviada após uma requisição POST;

- **303 See Other:** O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET;

- **405 Method Not Allowed:** O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado. Os dois métodos obrigatórios, GET e HEAD, nunca devem ser desabilitados e não devem retornar este código de erro;

- **501 Not Implemented:** O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos exigidos que servidores suportem (e portanto não devem retornar este código) são GET e HEAD.

<br>

**X.** Faça um exemplo de chamadas do tipo GET, POST, PUT, DELETE.

***Resposta:*** 

GET
```js
getUsers( ): <users> { 
    	return this.http.get<users>(this.url);
}
```
<br>

POST
```js
getUserById(userId: number): <number> { 
    	return this.http.post<number>(this.url);
}
```
<br>


PUT
```js
getPeso(peso: quilos): <quilos> {
    	return this.http.put<quilos>(this.url);
}
```
<br>


DELETE
```js
- deletePeso(peso: quilos): <quilos> { 
    	return this.http.delete<quilos>(this.url);
}
```
<br>

**XI.** Para que serve o cabeçalho em uma requisição HTTP?

***Resposta:*** Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP.

Cabeçalhos podem ser classificados de acordo com os seus contextos:

- **Cabeçalho genérico:** Cabeçalhos que podem ser usados tanto em solicitações quanto em respostas, porém sem relação com os dados eventualmente transmitidos no corpo da mensagem;

- **Cabeçalho de solicitação:** Cabeçalhos contendo mais informação sobre o recurso a ser obtido ou sobre o próprio cliente;

- **Cabeçalho de resposta (en-US):** Cabeçalhos contendo informação adicional sobre a solicitação, como a sua localização ou sobre o servidor;

- **Cabeçalho de entidade:** Cabeçalhos contendo mais informação sobre o conteúdo da entidade, como o tamanho do conteúdo ou o seu MIME-type.

<br>

**XII.** O que é um Interceptor e quais as suas aplicações?

***Resposta:*** O interceptor, inspeciona e transforma solicitações HTTP de seu aplicativo para um servidor e pode também inspecionar e transformar as respostas de um servidor no caminho de volta ao aplicativo. Vários interceptores formam uma cadeia de manipuladores de solicitação/resposta para frente e para trás.

Os interceptores podem executar uma variedade de tarefas implícitas , desde a autenticação até o registro, de maneira rotineira e padrão, para cada solicitação/resposta HTTP.

Sem interceptação, os desenvolvedores teriam que implementar essas tarefas explicitamente para cada HttpClientchamada de método.

Para implementar um interceptor, declare uma classe que implemente o intercept()método da HttpInterceptor (intercepta e manipula um HttpRequestou HttpResponse.) interface.

<br>

**XIII.** Quais cenários mais comuns podemos usar Interceptors?

***Resposta:*** Quando se é necessário executar uma variedade de tarefas implícitas , desde a autenticação até o registro, de maneira rotineira e padrão, para cada solicitação/resposta HTTP.

---

#### **D.** RxJS:
<br>

**I.** O que é o RxJS?    

***Resposta:*** RxJS é uma biblioteca para compor programas assíncronos e baseados em eventos usando sequências observáveis.

<br>

**II.** Qual a diferença de Promises e Observables? 

***Resposta:*** 

- Promise são ansiosas, enquanto Observable são preguiçosos,

- Promise sempre são assíncronas, enquanto Observable pode ser tanto síncronas quanto assíncronas;

- Promise sempre retornam o mesmo valor, enquanto Observable pode retornar um fluxo de valores, de nenhum a vários.

<br>

**III.** O que significa ser baseado em eventos?

***Resposta:*** Significa ser baseado em ações a serem tomadas pelo usuário, por exemplo, evento em um click, utilização de um botão, a interação disposta a partir dessas ações.

<br>

**IV.** O que é o padrão de projetos Observer?    

***Resposta:*** Os OBSERVERs registram-se no SUBJECT para receber atualizações quando os dados do SUBJECT são alterados. Os OBSERVERs também podem cancelar o seu registro e dessa forma não receber mais nenhuma atualização do SUBJECT.

<br>

**V.**  O que é o padrão de projetos Iterator?

***Resposta:*** O padrão Iterator permite o acesso sequencial aos elementos de um conjunto sem expor sua implementação subjacente. O padrão Iterator também é responsável por toda a tarefa de iteração, eliminando assim a responsabilidade adicional, simplificando, assim a sua aplicação e deixando a responsabilidade onde deveria estar.

<br>

**VI.** O que é programação funcional com coleções?

***Resposta:*** Programação funcional é uma forma de programação declarativa. Por outro lado, a maioria das linguagens mais conhecidas, incluindo linguagens OOP (programação orientada a objeto), como C#, Visual Basic, C++ e Java, foram criadas para dar suporte principalmente à programação imperativa (de procedimento).

Na programação funcional a modelagem de um problema computacional é composta por uma coleção de funções que interagem entre si utilizando recursos como: composição funcional, condições e recursão. Essencialmente, “a computação é vista como uma função matemática mapeando entradas e saídas” – onde não há uma noção de estado, e com essa perspectiva, distingue-se diretamente dos paradigmas imperativo, lógico e/ou orientado à objeto.

<br>

**VII.** Quais os conceitos básicos do RxJS para eventos assíncronos? Descreva todos e dê um exemplo de como utilizá-lo.

***Resposta:*** 

- **Observable:** representa a ideia de uma coleção invocável de valores ou eventos futuros;

- **Observer:** é uma coleção de callbacks que sabe escutar os valores entregues pelo Observable;

- **Subscription:** representa a execução de um Observável, é útil principalmente para cancelar a execução;

- **Operators:** são funções puras que permitem um estilo de programação funcional de lidar com coleções com operações como map, filter, concat, reduce, etc;

- **Subject:** é equivalente a um EventEmitter e a única maneira de multicast de um valor ou evento para vários observadores;

- **Schedulers:** são despachantes centralizados para controlar a simultaneidade, permitindo-nos coordenar quando a computação acontece em, por exemplo, setTimeoutou requestAnimationFrameoutros.

<br>

**VIII.** Quais são os operadores de criação?

***Resposta:*** 

- ajax;

- bindCallback;

- bindNodeCallback;

- defer;

- empty;

- from;

- fromEvent;

- fromEventPattern;

- generate;

- interval;

- of;

- range;

- throwError;

- timer;

- iif.

<br>

**IX.** Ainda dentro de operadores de criação, explique melhor e dê um exemplo para os seguintes operadores:

***Resposta:*** 

- ajax: **Ele cria um observável para uma solicitação Ajax com um objeto de solicitação com url, cabeçalhos, etc. ou uma string para uma URL.**

```
const ajax: AjaxCreationMethod;
```

<br>

- from: **Cria um Observable a partir de um Array, um objeto do tipo array, um Promise, um objeto iterável ou um objeto do tipo Observable.**

```
from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>
```

<br>

- fromEvent: **Cria um Observable que emite eventos de um tipo específico provenientes de determinado destino de evento.**

```
fromEvent<T>(target: any, eventName: string, options?: EventListenerOptions | ((...args: any[]) => T), resultSelector?: (...args: any[]) => T): Observable<T>
```

<br>

- generate: **Gera uma sequência observável executando um loop controlado por estado produzindo os elementos da sequência, usando o agendador especificado para enviar mensagens de observador.**

```
generate<T, S>(initialStateOrOptions: S | GenerateOptions<T, S>, condition?: ConditionFunc<S>, iterate?: IterateFunc<S>, resultSelectorOrScheduler?: SchedulerLike | ResultFunc<S, T>, scheduler?: SchedulerLike): Observable<T>
```

<br>

- of: **Converte os argumentos em uma sequência observável.**

```
of<T>(...args: (SchedulerLike | T)[]): Observable<T>
```

<br>

- interval: **Cria um Observable que emite números sequenciais a cada intervalo de tempo especificado, em um SchedulerLike.**

```
interval(period: number = 0, scheduler: SchedulerLike = asyncScheduler): Observable<number>
```

<br>

- throwError: **Emitir erro na assinatura.**

```
throwError(errorOrErrorFactory: any, scheduler?: SchedulerLike): Observable<never>
```

<br>

- timer: **Após determinada duração, emite números em sequência a cada duração especificada.**

```
timer(dueTime: number | Date = 0, intervalOrScheduler?: number | SchedulerLike, scheduler: SchedulerLike = asyncScheduler): Observable<number>
```

<br>

**X.** Quais os operadores de criação de associação?

***Resposta:*** 

- combineLatest;

- concat;

- forkJoin;

- merge;

- partition;

- race;

- zip.

<br>

**XI.** Ainda dentro de operadores de criação de associação, explique melhor e dê um exemplo para os seguintes operadores:

- concat: **Cria um Observable de saída que emite sequencialmente todos os valores do primeiro Observable fornecido e depois passa para o próximo.**

```
concat(...args: any[]): Observable<unknown>
```

<br>

- forkJoin: **Aceita um ou um dicionário Arrayde e retorna um que emite uma matriz de valores na mesma ordem exata da matriz passada ou um dicionário de valores na mesma forma que o dicionário passado.ObservableInputObjectObservableInputObservable**

```
forkJoin(...args: any[]): Observable<any>
```

<br>

- merge: **Cria uma saída Observable que emite simultaneamente todos os valores de cada entrada Observable.**

```
merge(...args: (number | SchedulerLike | Observable<unknown> | InteropObservable<unknown> | AsyncIterable<unknown> | PromiseLike<unknown> | ArrayLike<...> | Iterable<...> | ReadableStreamLike<...>)[]): Observable<unknown>
```

<br>

**XII.** Quais os operadores de transformação?

***Resposta:*** 

- buffer;

- bufferCount;

- bufferTime;

- bufferToggle;

- bufferWhen;

- concatMap;

- concatMapTo;

- exhaust;

- exhaustMap;

- expand;

- groupBy;

- map;

- mapTo;

- mergeMap;

- mergeMapTo;

- mergeScan;

- pairwise;

- partition;

- pluck;

- scan;

- switchScan;

- switchMap;

- switchMapTo;

- window;

- windowCount;

- windowTime;

- windowToggle;

- windowWhen;

<br>

**XIII.** Ainda dentro de operadores de transformação, explique melhor e dê um exemplo para os seguintes operadores:- concatMap;- map;- mapTo;- mergeMap;- mergeMapTo;- switchMap;- switchMapTo;

***Resposta:*** 

- **concatMap:** Projeta cada valor de origem para um Observable que é mesclado no Observable de saída, de maneira serializada, esperando que cada um seja concluído antes de mesclar o próximo.

```
concatMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>
```

<br>

- **map:** Aplica uma determinada projectfunção a cada valor emitido pelo Observable de origem e emite os valores resultantes como um Observable.

```
map<T, R>(project: (value: T, index: number) => R, thisArg?: any): OperatorFunction<T, R>
```

<br>

- **mapTo:** Emite o valor constante dado na saída Observable toda vez que a fonte Observable emite um valor.

```
mapTo<R>(value: R): OperatorFunction<any, R>
```

<br>

- **mergeMap:** Projeta cada valor de origem para um Observable que é mesclado na saída Observable.

```
mergeMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: number | ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R), concurrent: number = Infinity): OperatorFunction<T, ObservedValueOf<O> | R>
```

<br>

- **mergeMapTo:** Projeta cada valor de origem para o mesmo Observable que é mesclado várias vezes na saída Observable.

```
mergeMapTo<T, R, O extends ObservableInput<unknown>>(innerObservable: O, resultSelector?: number | ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R), concurrent: number = Infinity): OperatorFunction<T, ObservedValueOf<O> | R>
```

<br>

- **switchMap:** Projeta cada valor de origem para um Observable que é mesclado no Observable de saída, emitindo valores apenas do Observable projetado mais recentemente.

```
switchMap<T, R, O extends ObservableInput<any>>(project: (value: T, index: number) => O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>
```

<br>

- **switchMapTo:** Projeta cada valor de origem para o mesmo Observable que é nivelado várias vezes com switchMapo Observable de saída.

```
switchMapTo<T, R, O extends ObservableInput<unknown>>(innerObservable: O, resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, ObservedValueOf<O> | R>
```
---

Referências de pesquisa: 

- [Angular - Introduction to services and dependency injection](https://angular.io/guide/architecture-services#introduction-to-services-and-dependency-injection)

- [Angular - Comunicação com serviços de back-end usando HTTP](https://angular.io/guide/http#communicating-with-backend-services-using-http)

- [Macoratti.net - A classe HttpClient - II (Consumindo uma Web API)](https://www.macoratti.net/16/01/net_httpc2.htm)

- [Dtidigital - RxJS: Primeiros passos e aprendizados de desenvolvimento](https://www.dtidigital.com.br/blog/rxjs/#:~:text=Come%C3%A7ando%20por%20uma%20defini%C3%A7%C3%A3o%20da,utilizando%20uma%20sequ%C3%AAncia%20de%20observables.)

- [Developer.Mozilla - Métodos de requisição HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)

- [Totvs - Arquitetura REST: Saiba o que é e seus diferenciais](https://www.totvs.com/blog/developers/rest/)

- [Developer.Mozilla - Códigos de status de respostas HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

- [Kinsta - Um Guia Completo e Lista de Códigos de Status HTTP](https://kinsta.com/pt/blog/lista-codigos-status-http/)

- [Developer.Mozilla - Cabeçalhos HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers)

- [RXJS](https://rxjs.dev/guide/overview)

- [Dev.to - Javascript - Promise ou Observable](https://dev.to/kurybr/promise-ou-observable-misterios-do-javascript-4f70#:~:text=Promise%20s%C3%A3o%20ansiosas%2C%20enquanto%20Observable,valores%2C%20de%20nenhum%20a%20v%C3%A1rios.)

- [Devmedia - Padrão de Projeto Observer em Java](https://www.devmedia.com.br/padrao-de-projeto-observer-em-java/26163)

- [Devmedia - Padrão de Projeto Iterator em Java - Conceitos, Funcionamento e Aplicação prática](https://www.devmedia.com.br/padrao-de-projeto-iterator-em-java-conceitos-funcionamento-e-aplicacao-pratica/28748#:~:text=O%20padr%C3%A3o%20Iterator%20permite%20o,a%20responsabilidade%20onde%20deveria%20estar.)

- [Microsoft - Programação funcional versus programação imperativa (LINQ to XML)](https://docs.microsoft.com/pt-br/dotnet/standard/linq/functional-vs-imperative-programming#:~:text=Programa%C3%A7%C3%A3o%20funcional%20%C3%A9%20uma%20forma,programa%C3%A7%C3%A3o%20imperativa%20(de%20procedimento).)

- [TQI - Uma Introdução ao Paradigma Funcional com Clojure](https://www.tqi.com.br/blog/uma-introducao-ao-paradigma-funcional-com-clojure/)


