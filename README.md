# LLM-gpt-backend

## Pré-requisitos

- **Docker** e **Docker Compose** instalados para executar o projeto em um container.
- Uma chave de API da OpenAI para acesso ao ChatGPT.

## Instalação

1. Clone o repositório em um diretório de sua preferência:
    ```bash
    git clone https://github.com/Sathanoj/LLM-gpt-backend.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd LLM-gpt-backend
    ```
    
3. Crie um arquivo `.env` na raiz do projeto e adicione a chave de API no formato abaixo:
    ```env
    OPENAI_API_KEY=sua_chave_da_api
    ```

4. Inicie o projeto usando Docker Compose:
    ```bash
    docker compose up
    ```

O backend estará disponível em [http://localhost:3001](http://localhost:3001).

---

Feito por [Jonathas Menezes](https://github.com/Sathanoj)
