# Trilha de estudos - KOMA

Do primeiro componente ao streaming.

Fevereiro a julho de 2027. 84 horas estimadas de leitura e prática; não é a estimativa total do produto. O progresso fica no navegador e tem backup próprio na aba Trilha de estudos.

[Baixar kit de exercícios](../materiais/kit-estudos-koma.zip)

## E01 - Organizar catálogo, autoria e versões

2027-02-01 a 2027-02-07 | 6 h | Base

Base recomendada: início da trilha.

**Aprender:** Git; Licença; Obra e episódio; Cadastro de estúdio.

**Prática:** Conferir o catálogo sintético e registrar, por obra, titular, autorização e formatos.

**Conferir:**
- [ ] Autor identificado
- [ ] Autorização registrada
- [ ] Catálogo validado

**Fontes:**
- [Pro Git em português](https://git-scm.com/book/pt-br/v2) - Git / autores do Pro Git | PT-BR | Leitura gratuita. Commits, branches, revisão e recuperação do trabalho.
- [Creative Commons: tipos de licença](https://creativecommons.org/cc-licenses/) - Creative Commons | EN | Leitura gratuita. Identificar autorização, atribuição e condições de uso de cada obra.

Entregas: P01, P02.

Arquivos: [catalogo_demo.json](../materiais/catalogo_demo.json), [validar_catalogo.js](../materiais/validar_catalogo.js).

## E02 - Criar interfaces de catálogo e leitor

2027-02-08 a 2027-02-21 | 12 h | Base

Base recomendada: E01.

**Aprender:** HTML e CSS; JavaScript; TypeScript; React; Rotas.

**Prática:** Montar uma tela com busca, detalhe de obra e navegação pelo teclado antes de integrar streaming.

**Conferir:**
- [ ] Busca funcional
- [ ] Foco visível
- [ ] Estado vazio tratado

**Fontes:**
- [Aprendendo desenvolvimento web](https://developer.mozilla.org/pt-BR/docs/Learn_web_development) - MDN Web Docs | PT-BR | Leitura gratuita. HTML, CSS, JavaScript, formulários e acessibilidade.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - TypeScript / Microsoft | EN | Leitura gratuita. Tipos, interfaces, narrowing e contratos de dados.
- [React: primeiros componentes](https://react.dev/learn) - React | EN | Leitura gratuita. Estado, componentes, eventos e listas.
- [Next.js: App Router](https://nextjs.org/docs/app) - Next.js / Vercel | EN | Leitura gratuita. Rotas, páginas e separação cliente/servidor.

Entregas: P03, P04.

Arquivos: [catalogo_demo.json](../materiais/catalogo_demo.json).

## E03 - Modelar API, perfis e autorização

2027-02-22 a 2027-03-07 | 12 h | Aplicação

Base recomendada: E02.

**Aprender:** Node.js; NestJS; SQL; Prisma; OIDC.

**Prática:** Separar leitor, autor e moderador e testar o acesso a um estúdio diferente.

**Conferir:**
- [ ] Papéis definidos
- [ ] Escopo por estúdio
- [ ] Acesso indevido recusado

**Fontes:**
- [Node.js: introdução](https://nodejs.org/learn/getting-started/introduction-to-nodejs) - Node.js | EN | Leitura gratuita. Execução de scripts, módulos, I/O e APIs.
- [NestJS: fundamentos](https://docs.nestjs.com/) - NestJS | EN | Leitura gratuita. Módulos, controllers, validação, guards e testes.
- [PostgreSQL: tutorial](https://www.postgresql.org/docs/current/tutorial.html) - PostgreSQL Global Development Group | EN | Leitura gratuita. Tabelas, chaves, joins, consultas e transações.
- [Prisma: dados relacionais](https://www.prisma.io/docs) - Prisma | EN | Leitura gratuita. Modelagem, migrações e consultas ao PostgreSQL.
- [Autenticação com OpenID Connect](https://www.keycloak.org/securing-apps/oidc-layers) - Keycloak | EN | Leitura gratuita. Sessões, papéis e autorização no servidor.

Entregas: P04, P05.

Arquivos: [validar_catalogo.js](../materiais/validar_catalogo.js).

## E04 - Produzir HLS a partir de vídeo próprio

2027-03-08 a 2027-03-28 | 12 h | Aplicação

Base recomendada: E03.

**Aprender:** Codec e contêiner; GOP; Playlist; Segmentos; Fila de transcodificação.

**Prática:** Executar o gerador de barras de teste e transformar esse vídeo sintético em HLS.

**Conferir:**
- [ ] Playlist gerada
- [ ] Segmentos presentes
- [ ] Origem sintética documentada

**Fontes:**
- [FFmpeg: formatos e muxer HLS](https://www.ffmpeg.org/ffmpeg-formats.html) - FFmpeg | EN | Leitura gratuita. Segmentação, playlist, duração e GOP. Usar o padrão sintético do exercício.
- [BullMQ: filas e workers](https://docs.bullmq.io/) - BullMQ | EN | Leitura gratuita. Jobs, repetição, concorrência e processamento idempotente.

Entregas: P06, P08.

Arquivos: [gerar_hls_demo.py](../materiais/gerar_hls_demo.py).

## E05 - Reproduzir vídeo com legendas

2027-03-29 a 2027-04-18 | 10 h | Aplicação

Base recomendada: E04.

**Aprender:** HTML Video; hls.js; WebVTT; Retomada; Erros de rede.

**Prática:** Abrir a playlist num player de estudo, anexar a legenda demonstrativa e simular perda de rede.

**Conferir:**
- [ ] Legenda sincronizada
- [ ] Retomada testada
- [ ] Erro explicado ao usuário

**Fontes:**
- [hls.js: player e exemplos](https://github.com/video-dev/hls.js) - video-dev / hls.js | EN | Leitura gratuita. Reprodução HLS, eventos e compatibilidade com o navegador.
- [WebVTT: legendas e faixas](https://www.w3.org/TR/webvtt1/) - W3C | EN | Leitura gratuita. Sincronizar legendas e testar acessibilidade no vídeo.
- [Aprendendo desenvolvimento web](https://developer.mozilla.org/pt-BR/docs/Learn_web_development) - MDN Web Docs | PT-BR | Leitura gratuita. HTML, CSS, JavaScript, formulários e acessibilidade.

Entregas: P09, P13.

Arquivos: [legendas_demo.vtt](../materiais/legendas_demo.vtt).

## E06 - Otimizar páginas de mangá e leitura

2027-04-19 a 2027-05-16 | 10 h | Aplicação

Base recomendada: E05.

**Aprender:** Sharp; WebP; Ordem das páginas; Cache; Progresso.

**Prática:** Criar versões menores de páginas próprias e registrar capítulo e posição de leitura por usuário.

**Conferir:**
- [ ] Ordem preservada
- [ ] Imagem não distorcida
- [ ] Retomada por usuário

**Fontes:**
- [Sharp: processamento de imagens](https://sharp.pixelplumbing.com/) - Sharp | EN | Leitura gratuita. Redimensionamento, formatos e paginação do leitor de mangás.
- [React: primeiros componentes](https://react.dev/learn) - React | EN | Leitura gratuita. Estado, componentes, eventos e listas.
- [PostgreSQL: tutorial](https://www.postgresql.org/docs/current/tutorial.html) - PostgreSQL Global Development Group | EN | Leitura gratuita. Tabelas, chaves, joins, consultas e transações.

Entregas: P10, P13.

Arquivos: [catalogo_demo.json](../materiais/catalogo_demo.json).

## E07 - Validar envio, publicação e operação

2027-05-17 a 2027-05-30 | 12 h | Validação

Base recomendada: E06.

**Aprender:** Jobs idempotentes; Moderação; Backup; Acessibilidade; Observabilidade.

**Prática:** Documentar o percurso envio → processamento → revisão → publicação e testar reenvio do mesmo job.

**Conferir:**
- [ ] Sem publicação duplicada
- [ ] Backup recuperado
- [ ] Fluxo acessível

**Fontes:**
- [BullMQ: filas e workers](https://docs.bullmq.io/) - BullMQ | EN | Leitura gratuita. Jobs, repetição, concorrência e processamento idempotente.
- [Docker Compose: primeiro projeto](https://docs.docker.com/compose/gettingstarted/) - Docker | EN | Leitura gratuita. Serviços locais reproduzíveis, volumes e variáveis de ambiente.
- [Playwright: primeiros testes](https://playwright.dev/docs/intro) - Playwright / Microsoft | EN | Leitura gratuita. Testes do percurso do usuário e evidências de falha.

Entregas: P11, P12, P15, P17.

Arquivos: [protocolo_experimento.md](../materiais/protocolo_experimento.md).

## E08 - Transformar evidências em monografia e artigo

2027-06-01 a 2027-07-16 | 10 h | Validação

Base recomendada: E07.

**Aprender:** Busca e fichamento; Método reproduzível; Figuras e tabelas; Citações e referências; Modelo INIC.

**Prática:** Preencher a matriz de referências, redigir um resultado sustentado pelos dados e fechar o primeiro texto integral do artigo em junho.

**Conferir:**
- [ ] Cada número tem origem
- [ ] Referências revisadas
- [ ] Modelo do evento conferido

**Fontes:**
- [Zotero: guia inicial](https://www.zotero.org/support/quick_start_guide) - Zotero | EN | Leitura gratuita. Coleções, metadados, citações e biblioteca compartilhada.
- [Normas e guias de normalização](https://biblioteca.ufes.br/normalizacao) - Sistema Integrado de Bibliotecas / UFES | PT-BR | Leitura gratuita. Conferir normas de apresentação, citações, referências e resumos.
- [INIC: modelo e submissão](https://www.univap.br/inic/submissao_trabalhos.php) - UNIVAP / INIC | PT-BR | Leitura gratuita. Consultar o modelo da edição de 2027 quando divulgado. A consulta atual identifica 2026.

Entregas: M08, M13, M15, A01, A05, A09.

Arquivos: [matriz_referencias.csv](../materiais/matriz_referencias.csv), [protocolo_experimento.md](../materiais/protocolo_experimento.md).

## Hardware e recursos de bancada

| Item | Quantidade | Uso | Etapa / observação |
| --- | --- | --- | --- |
| Computador de desenvolvimento | 1 | Node.js, interface, banco e testes | Essencial. 8 a 16 GB de RAM como ponto de partida didático; transcodificação deve ser medida. |
| Navegadores atuais | 2 ou mais | Teste de reprodução e acessibilidade | Essencial.  |
| Smartphone | 1 | Teste de leitura e player móvel | Teste.  |
| Fones ou caixas de som | 1 | Conferir áudio e sincronização | Teste.  |
| Disco para cópias de trabalho e backup | 1 | Guardar originais autorizados e derivados | Proposto. Dimensionar pela duração, bitrate e número de versões. |
| Servidor ou máquina local para worker | 1 | Aprender fila e transcodificação | Proposto. O exercício inicial pode rodar no computador local; a operação pública exige orçamento próprio. |

## Drive de Pobre: consulta registrada

[Drive de Pobre](https://drivedepobre.com/) | 31/10/2026 | Consulta bloqueada por verificação humana

O catálogo exigiu verificação humana nesta consulta. Nenhum curso ou arquivo do acervo foi validado ou redistribuído. Use os termos como roteiro de busca e confira autoria e permissão na origem. Os materiais desta trilha estão ligados diretamente às fontes e aos exercícios do projeto.

Termos de busca: JavaScript, TypeScript, Node.js, FFmpeg HLS.

## Uso dos arquivos

Os exercícios e dados do kit são autorais e sintéticos. Fontes externas permanecem no endereço do autor. Conferir versão, autoria e permissão antes de reutilizar material externo. A aplicação não depende do catálogo para abrir os recursos da trilha.
