# Treinamento em gerencia de estado e testes básicos.

Nesse repositório você encontra os slides, um projeto contendo o desafio e outro para ser usado como guia.

## Desafio

Convido-o(a) a aprimorar o projeto `projetos/desafio` usando os conceitos e técnicas ensinadas no treinamento.

Não há apenas uma solução e não se prenda a uma técnica. Use essa oportunidade para experimentar conceitos, bibliotecas e idéias que você tiver e converse com seus colegas sobre as vantagens e desvantages de cada conceito e biblioteca.

Use o projeto `projetos/guia` para tirar dúvidas ou estudar a minha implementação.

### Bugs e pontos a melhorar

1. O estado do contador da carta é resetado uma vez que a mesma é desmontada.
2. O componente `src/containers/Counter` depende do contexto e isso gera uma dependencia desnecessária.

### Requisitos

1. Testes de integração para os containers e testes unitários para os componentes.
2. Se uma carta for desmontada e renderizada de novo o contador deve manter seu estado.
3. Os componentes `src/containers/CardGrid` e `src/containers/Counter` devem ser refatorados em componentes de apresentação.
   
## Rodando os projetos

1. Vá para o diretório do projeto desejado
2. Execute `$ npm install`
3. Inicie o servidor execuntando `$ npm start`

Toda vez que você salvar uma mudança no código uma nova build será gerada automaticamente.
Não é necessário recomeçar o servidor.

### Testando

1. Execute `$ npm test` no diretório do projeto

Os testes rodarão em watch mode e toda vez que você salvar algum arquivo os testes serão executados automaticamente. 

## Links úteis

### Bibliotecas

1. [Zustand](https://zustand-demo.pmnd.rs/)
2. [React Query](https://react-query-v3.tanstack.com/)
3. [Jotai](https://jotai.org/)
4. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### Vídeos

1. [How to know what to test?](https://www.youtube.com/watch?v=ahrvE062Kv4)
2. [Testing a React component that uses useContext](https://www.youtube.com/watch?v=3yiialslPbc)

### Cursos

1. [Testing JavaScript](https://testingjavascript.com/)

## Gerar PDF 

Caso você edite os slides e deseja recriar o PDF `treinamento-react.pdf` siga os passos abaixo:

1. No diretório raiz desse repositorio execute `$ npm install` para instalar as dependencias
2. Em seguida, `$ npm run generate-pdf` 
3. O arquivo `treinamento-react.pdf` será atualizado conforme os novos slides