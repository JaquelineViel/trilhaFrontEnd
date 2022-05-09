<h1 align="center">Desafio 9 - Desafio Final</h1>
<h6 align="center">Jaqueline Viel</h6>

### Com base no curso de “Angular 11 Avançado: Criando uma Arquitetura Master/Detail” responda as seguintes questões

---

#### **A.** Qual a responsabilidade do package.json no projeto?

<br>

**_Resposta:_** O **package.json** tem a responsabilidade de configurar as dependências do projeto, como os pacotes necessários para a execução, versão do node.js e npm, url do repositório, versão do projeto, scripts automatizados entre outras coisas. Ele descreve o projeto, como se fosse uma receita a ser seguida para executar o mesmo.

---
#### **B.** Qual a responsabilidade do angular.json no projeto?

<br>

**_Resposta:_** O **angular.json** tem a responsabilidade de informar as configurações globais da aplicação, define o arquivo que vai iniciar a aplicação, fazendo o SPA.

---

#### **C.** Qual a finalidade da tag < router-outlet>< /router-outlet>?

<br>

**_Resposta:_** A tag **<router-outlet></router-outlet>** tem a finalidade de renderizar um componente, ela é uma das diretivas de Router. Quando nós importamos AppRoutingModule em AppModule, ele nos permite adicioná-la dentro do arquivo HTML do nosso AppComponent, dessa forma nós podemos passar as nossas rotas para que ele possa interpreta-las e direcionar para o component correto.

---

#### **D.** Qual a diferença entre as duas declarações de rotas a seguir? Qual delas é denominada de eager-load e lazy-load?

<br>

**Declaração 1:**

```ts
const routes: Routes = [{ path: "entries/new", component: EntryFormComponent }];
```

**Declaração 2:**

```ts
const routes: Routes = [
  {
    path: "entries",
    loadChildren: () =>
      import("./pages/entries/entries.module").then((m) => m.EntriesModule),
  },
];
```

**_Resposta:_** A primeira declaração é denominada como Eager Load, pois é feito o carregamento imediato quando o objeto principal é carregado já de início. A segunda declaração é denominada como Lazy Load, pois ela “fatia” a aplicação em pequenas partes para que assim a parte mais importante seja carregada primeiro.

---

#### **E.** Qual a importância da componentização?

<br>

**_Resposta:_** A importância da componentização se vem do fato dela diminuir a complexidade no projeto, ou seja, são criados vários componentes, onde cada um é focado em apenas uma funcionalidade ou conjunto de funcionalidades semelhantes. Deste modo, estas funcionalidades podem ser reutilizadas em diversas aplicações através do acesso ao componente.

---

#### **F.** Quais componentes reaproveitáveis foram criados no projeto?

<br>

**_Resposta:_** 

- CategoryFormComponent;
- CategoryListComponent,
- EntryFormComponent;
- EntryListComponent;
- BaseResourceFormComponent;
- BaseResourceListComponent;
- BreadCrumbComponent;
- FormFieldErrorComponent;
- PageHeaderComponent;
- ServerErrorMessagesComponent;
- NavbarComponent.

---

#### **G.** No arquivo bread-crumb.component.ts qual funcionalidade da linha a seguir:

```ts
@Input() items: Array<BreadCrumbItem> = [];
```

**_Resposta:_** A funcionalidade desta linha é tornar o componente dinâmico, neste caso ele vai renderizar o componente, o input permite trabalhar com passagem de parâmetros, foi criada uma variável “items” onde vai receber um array com um objeto chamado “BreadCrumbItem” que recebe valor em string, padronizando o projeto.

---

#### **H.** Com base no exercício anterior para qual finalidade a anotação a seguir é utilizada?

```ts
@Output()
```

**_Resposta:_** A anotação @Output() tem a finalidade de compartilhar informações junto ao componente filho (input), por exemplo, ou seja, o @Output recebe uma variável onde é declarado um valor, esta variável pode ser seguida de uma execução (método), e depois passa a informação de dentro do componente pai para o componente filho, ambos são declarados no html através das variáveis criadas.

---

#### **I.** Sobre a arquitetura proposta no curso, descreva os requisitos para se enquadrar em cada um dos níveis a seguir: core, pages e shared

<br>

<img src="https://ik.imagekit.io/zo6fhpfjl5f/img01__-GPLmiCn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652118188559">

**_Resposta:_**

- Core: Possui arquivos necessários para a execução do projeto, importações e declarações;

- Pages: Possui as categorias a serem utilizadas no projeto, junto a comando de rotas e serviços. Faz o papel de uma SPA onde apresenta o conteúdo em uma única página;

- Shared: Possui a execução de comandos de serviço e componentes compartilhados.

---

#### **J.** Qual o papel do arquivo in-memory-database.ts?

<br>

**_Resposta:_** O arquivo in-memory-database.ts nos permite configurar um contexto para se conectar a um banco de dados na memória nomeado. O banco de dados na memória é compartilhado em qualquer lugar que o mesmo nome é usado, mas apenas para um determinado provedor de serviços.

---

#### **K.** Liste 5 métodos e 5 propriedades de um objeto do tipo *FormGroup e suas respectivas funcionalidades. Segue exemplo abaixo de declaração.

```ts
this.categoriaForm = this.formBuilder.group({
  id: [null],
  name: [null, [Validators.required, Validators.minLength(2)]],
  description: [null],
});
```

**_Resposta:_**

<br>

**Métodos:**

- **registerControl():** Registra um controle com a lista de controles do grupo;

- **addControl():** Adicione um controle a este grupo;

- **removeControl():** Remova um controle deste grupo;

- **setControl():** Substitua um controle existente;

- **contains():** Verifique se há um controle habilitado com o nome fornecido no grupo.

**Propriedades:**

- **abstractControl():** Ele fornece alguns dos comportamentos compartilhados que todos os controles e grupos de controles têm, como executar validadores, calcular o status e redefinir o estado - Uma coleção de controles filho. A chave para cada filho é o nome com o qual ele está registrado;

- **value:** O valor atual do controle;

- **enabled:** Os valores dos controles ativados como um objeto com um par chave-valor para cada membro do grupo;

- **disabled:** Os valores de todos os controles como um objeto com um par chave-valor para cada membro do grupo.

- **parent:** O controle dos pais;

---

#### **L.** Explique o funcionamento da seguinte sentença:

```ts
if (this.currentAction == "edit") {
    this.route.paramMap.pipe(
        switchMap(params => this.lancamentoService.getById(+params.get("id")))
    )
        .subscribe(
        (lancamento) => {
        this.lancamento = lancamento;     
        this.lancamentoForm.patchValue(lancamento);
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')    
    )    
}
```

**_Resposta:_** Se a variável currentAction estiver com o valor "edit", então será feito um parâmetro que vai acessar os valores correspondentes no "id", senão será emitido uma mensagem em "alert" de erro.

---

#### **M.** A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ouinjeção de dependências?

```ts
export class EntryFormComponent extends BaseResourceFormComponent<Entry> implements OnInit 
```

**_Resposta:_** Herança, pois **"EntryFormComponent"** (componente filho) recebe diretamente as informações passadas no **"BaseResourceFormComponent"** (componente pai), pensando na comunicação entre @input e @outPut.

---

#### **N.** A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ouinjeção de dependências?

```ts
ngOnInit() {    
    this.loadCategories();    
    super.ngOnInit();
    }
```

**_Resposta:_** Polimorfismo, pois pode-se considerar ngOnInit() como uma classe abstrata e loadCategories() como uma classe concretas, onde o ngOnInit() é uma especificação que pode ter várias implementações com características diferentes (no caso a loadCategories()).

---

#### **O.** A linha a seguir se refere a encapsulamento, polimorfismo, herança, abstração ou injeção de dependências? Existe outra maneira?

```ts
@NgModule({   
    providers: [
        EntryService   
    ]  
    }) 
```

**_Resposta:_** Injeção de dependências, pois separa a implementação de serviços do componente.

---

Referências de pesquisa:

- [Dio.Me - Introdução ao Angular - Conceitos e função de componentes](https://www.dio.me/articles/introducao-ao-angular-conceitos-e-funcao-de-componentes) ;

- [Medium - Angular 5 trabalhando com rotas](https://medium.com/angularbr/angular-5-trabalhando-com-rotas-8335617fcdbc) ;

- [DevMedia - Desenvolvimento baseado em componentes - Revista Java Magazine 110](https://www.devmedia.com.br/desenvolvimento-baseado-em-componentes-revista-java-magazine-110/26550#:~:text=O%20que%20%C3%A9%20componentiza%C3%A7%C3%A3o%3F,um%20conjunto%20de%20funcionalidades%20semelhantes.) ;

- [Microsoft - InMemoryDbContextOptionsExtensions.UseInMemoryDatabase Método](https://docs.microsoft.com/pt-br/dotnet/api/microsoft.entityframeworkcore.inmemorydbcontextoptionsextensions.useinmemorydatabase?view=efcore-6.0) ;

- [Angular - FormGroup](https://angular.io/api/forms/FormGroup)

