Prezados que estejam bem,

Venho pro meio deste fornecer algumas informações referentes ao método para utilizar o Formulário de Cadastro de Clientes:

Front-End:

Após a clonagem do repositório, rode o comando -yarn para iniciar a intalação da node_modules.

Após isso, será possivel rodar o comando -yarn dev, em seguida basta clicar no link local para acessar o site no navegador.

Back_End:

Inicialmente, faz-se necessário a criação de um banco de dados em postgres.

Após isso, crie um arquivo .env com as variáveis nomeadas no arquivo .env.example.

Com isso feito, instale os seguintes comandos juntamente com suas respectivas tipagens:

-yarn add -D typescript
-yarn add uuid
-yarn add -D @types/uuid
-yarn add express
-yarn add -D @types/express
-yarn tsc --init
-yarn add -D ts-node-dev

Logo em seguida rode as migrações iniciais junto com a criação das tabelas, com o comando:
-yarn typeorm migration:create src/migrations/initialMigration
-yarn typeorm migration:generate src/migrations/initialMigration -d src/data-source.ts
-yarn typeorm migration:run -d src/data-source.ts