*guia para os colegas de equipe*
# ODA - Projeto Inegrador 


## Como rodar o projeto

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Crie e ative um ambiente virtual**

   ```bash
   python -m venv .venv
   .venv\Scripts\activate  # Windows
   source .venv/bin/activate  # Linux/Mac
   ```

3. **Instale as dependências**

   ```bash
   pip install -r requirements.txt
   ```

4. **Execute as migrações**

   ```bash
   python manage.py migrate
   ```

5. **Inicie o servidor**

   ```bash
   python manage.py runserver
   ```

6. **Acesse o projeto**

   Abra o navegador e vá para:

   ```
   http://127.0.0.1:8000/
   ```
