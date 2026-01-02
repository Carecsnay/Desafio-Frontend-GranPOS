# Desafio Frontend Gran PÓS Faculdade - Desenvolvimento Full Stack e Cloud Computing

Este projeto é uma aplicação web desenvolvida com **React.js (NextJS)** e **React Bootstrap**, ensinando a dar os primeiros passos com a biblioteca REACTJS.

## 🚀 Funcionalidades Implementadas

-   **Integração com ViaCEP:** Busca automática de endereço ao digitar os 8 dígitos do CEP.
-   **(PLUS) Feedback Visual (Toasts):**
    -   🟡 **Aguarde:** Notificação amarela com texto escuro enquanto busca os dados.
    -   🟢 **Sucesso:** Notificação verde ao encontrar o endereço ou enviar o formulário.
    -   🔴 **Erro:** Notificação vermelha caso o CEP não seja encontrado ou ocorra falha na rede.
-   **(PLUS) UX / UI (Experiência do Usuário):**
    -   **Delay Simulado:** Atraso intencional de 2 segundos para melhor visualização do feedback de carregamento.
    -   **Validação:** Campos obrigatórios gerenciados via `react-hook-form`.
-   **Componentização:** Uso de componentes reutilizáveis que aceitam propriedades dinâmicas como `loading`, `required`.

## 🧠 Fundamentos de React Aplicados

Além das bibliotecas, este projeto serviu para praticar conceitos essenciais do React:

-   **(PLUS) useState:** Hook fundamental utilizado para gerenciar o estado local da aplicação. Foi usado para controlar a visibilidade dos Toasts, armazenar as mensagens de feedback e alternar o estado de carregamento (`isLoading`) durante a requisição à API.
-   **Props (Propriedades):** Mecanismo utilizado para passar dados e configurações do componente pai (`Endereco`) para o componente filho (`Field`). Isso permitiu tornar o input genérico e reutilizável, recebendo dinamicamente atributos como `label`, `placeholder` e `loading`.
-   **Eventos:** Manipulação direta de eventos do DOM/React, como `onChange` (para capturar e formatar o CEP em tempo real) e `onSubmit` (para interceptar o envio do formulário).

## ⚒️ Tecnologias Utilizadas

As principais dependências do projeto, conforme o `package.json`:

-   **React** (v19.0.0) - Biblioteca para interfaces.
-   **React Bootstrap** - Componentes Bootstrap para React.
-   **Axios** - Cliente HTTP para consumo da API ViaCEP.
-   **React Hook Form** - Gerenciamento performático de formulários.

## 📦 Como rodar o projeto

Certifique-se de ter o **Node.js** instalado em sua máquina.

1. **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

2. **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

3. **Acesse a aplicação:**
   Abra o navegador em http://localhost:3000/.

## 📂 Estrutura de Arquivos Relevantes

-   `pages/endereco.js`: Lógica principal do formulário, estados de loading e toasts.

-   `components/Alert.js`: Demonstração de variantes de alertas do Bootstrap.
-   `components/Botoes.js`: Demonstração de variantes de botões do Bootstrap.
-   `components/Box.js`: Exemplo de componente de post com titulo e paragrafo.
-   (PLUS) `components/Form.js`: Componente de Input genérico (`Field`). 
-   `components/Pagina.js`: Navbar do projeto.
