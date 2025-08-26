# Site Escolar Profissional

Um site moderno e profissional desenvolvido para trabalhos escolares, apresentando banners informativos, links úteis e recursos educacionais de forma organizada e visualmente atrativa.

## 🎯 Características Principais

- **Design Responsivo**: Funciona perfeitamente em todos os dispositivos (desktop, tablet, mobile)
- **Interface Moderna**: Visual limpo e profissional com gradientes e animações suaves
- **Navegação Intuitiva**: Menu simples e fácil de usar
- **Conteúdo Organizado**: Informações bem estruturadas em seções dedicadas
- **Links Úteis**: Coleção de recursos educacionais e ferramentas para estudantes

## 🛠️ Tecnologias Utilizadas

- **Next.js 15+**: Framework React moderno com App Router
- **TypeScript**: Para desenvolvimento type-safe
- **Tailwind CSS**: Framework CSS utilitário para estilização responsiva
- **React**: Biblioteca JavaScript para interfaces de usuário

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação e Execução

1. **Clone o repositório** (se aplicável):
   ```bash
   git clone [url-do-repositorio]
   cd site-escolar
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse o site**:
   Abra [http://localhost:8000](http://localhost:8000) no seu navegador

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout global com navegação e rodapé
│   ├── page.tsx            # Página inicial com hero section
│   ├── banners/
│   │   └── page.tsx        # Página de banners e recursos
│   ├── sobre/
│   │   └── page.tsx        # Página sobre o projeto
│   └── globals.css         # Estilos globais
├── components/
│   └── ui/                 # Componentes UI reutilizáveis
├── hooks/                  # Custom React hooks
└── lib/
    └── utils.ts            # Funções utilitárias
```

## 📄 Páginas Disponíveis

### 🏠 Página Inicial (`/`)
- Hero section com apresentação do projeto
- Seção de recursos disponíveis
- Call-to-action para navegação

### 📋 Banners (`/banners`)
- Banners informativos organizados em cards
- Links úteis categorizados (Recursos Educacionais e Ferramentas)
- Seção de call-to-action para sugestões

### ℹ️ Sobre (`/sobre`)
- Informações sobre o objetivo do projeto
- Características principais
- Tecnologias utilizadas
- Links para navegação

## 🎨 Personalização

### Cores
O projeto utiliza uma paleta de cores baseada em:
- **Azul**: `blue-600` para elementos principais
- **Roxo**: `purple-600` para destaques
- **Verde**: `green-600` para elementos de sucesso
- **Cinza**: Tons de cinza para texto e backgrounds

### Adicionando Novos Banners
Para adicionar novos banners, edite o arquivo `src/app/banners/page.tsx` e adicione novos cards na seção de banners.

### Adicionando Novos Links
Para adicionar novos links úteis, edite a seção de links no arquivo `src/app/banners/page.tsx`.

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout completo com múltiplas colunas
- **Tablet**: Layout adaptado com colunas reduzidas
- **Mobile**: Layout em coluna única com navegação otimizada

## 🔧 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria build de produção
- `npm run start`: Inicia servidor de produção
- `npm run lint`: Executa verificação de código

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e pode ser usado livremente para trabalhos escolares.

## 🤝 Contribuições

Sugestões e melhorias são sempre bem-vindas! Este projeto serve como base para trabalhos escolares e pode ser expandido conforme necessário.

---

**Desenvolvido com ❤️ para educação**
