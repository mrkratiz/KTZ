# Sistema de Gestão Têxtil

Sistema completo para gestão de produtos, materiais, custos e ordens de serviço para indústria têxtil.

## 🚀 Deploy na Internet

### Opção 1: Vercel (Recomendada)

1. **Criar conta no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub, GitLab ou email

2. **Fazer Deploy**
   - Clique em "New Project"
   - Importe seu repositório ou faça upload dos arquivos
   - O Vercel detectará automaticamente que é um projeto Next.js

3. **Configurar Variáveis de Ambiente**
   - No dashboard do projeto, vá em "Settings" > "Environment Variables"
   - Adicione:
     ```
     BASIC_AUTH_USERNAME=davidlucas
     BASIC_AUTH_PASSWORD=123452
     ```

4. **Acessar o Sistema**
   - Use o domínio fornecido pelo Vercel (ex: `seu-projeto.vercel.app`)
   - Digite as credenciais configuradas

### Opção 2: Netlify

1. **Criar conta no Netlify**
   - Acesse [netlify.com](https://netlify.com)
   - Faça login

2. **Fazer Deploy**
   - Arraste a pasta do projeto para a área de deploy
   - Ou conecte com GitHub/GitLab

3. **Configurar Build**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Configurar Variáveis de Ambiente**
   - Vá em "Site settings" > "Environment variables"
   - Adicione as mesmas variáveis do Vercel

### Opção 3: Railway

1. **Criar conta no Railway**
   - Acesse [railway.app](https://railway.app)
   - Faça login com GitHub

2. **Conectar Repositório**
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha seu repositório

3. **Configurar Variáveis**
   - Vá em "Variables" e adicione as credenciais

## 🔐 Segurança

O sistema está protegido com autenticação básica HTTP. Apenas você terá acesso usando as credenciais configuradas.

### Alterar Credenciais

Para alterar as credenciais de acesso:

1. **No Vercel/Netlify**: Altere as variáveis de ambiente no dashboard
2. **Localmente**: Crie um arquivo `.env.local` com:
   ```
   BASIC_AUTH_USERNAME=davidlucas
   BASIC_AUTH_PASSWORD=123452
   ```

## 📱 Acesso Mobile

O sistema é responsivo e funciona perfeitamente em:
- ✅ Computadores
- ✅ Tablets
- ✅ Smartphones

## 💾 Backup de Dados

Os dados são salvos no IndexedDB do navegador. Para backup:

1. **Exportar Dados**: Use a função de exportar no sistema
2. **Importar Dados**: Use a função de importar quando necessário

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção local
npm start
```

## 📋 Funcionalidades

- ✅ Gestão de Produtos
- ✅ Gestão de Materiais
- ✅ Gestão de Aviamentos
- ✅ Cálculo de Custos
- ✅ Ordens de Serviço
- ✅ Relatórios
- ✅ Sistema de Design
- ✅ Backup/Autobackup

## 🔧 Tecnologias

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI**: Tailwind CSS, Radix UI
- **Storage**: IndexedDB (local)
- **Deploy**: Vercel/Netlify/Railway

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todas as variáveis de ambiente estão configuradas
2. Teste localmente primeiro
3. Verifique os logs do deploy 