# Tecnologias propostas

O HTML do briefing usa JavaScript e CSS nativos. A stack abaixo descreve o produto a desenvolver.

### Next.js + React + TypeScript

Catálogo renderizado no servidor; player, leitor e formulários como componentes interativos. TypeScript define os contratos das telas e dos dados.

- **Onde entra:** Aplicação web responsiva; camada BFF no servidor Next.js.
- **Contrato:** Rotas públicas, área do estúdio e administração com layouts compartilhados.
- [Documentação](https://nextjs.org/docs/app)

### Tailwind CSS + Radix UI

Tokens de cor, espaçamento e estados em Tailwind. Radix fornece primitivas de diálogo, abas e seleção; os elementos da Uiverse são adaptados com os créditos e licenças correspondentes.

- **Onde entra:** Componentes reutilizáveis, responsividade e navegação por teclado.
- **Contrato:** Biblioteca de componentes com foco visível, contraste e estados de erro.
- [Documentação](https://www.radix-ui.com/primitives/docs/overview/introduction)

### TanStack Query

Consulta o catálogo e os endpoints privados, mantém cache e invalida listas após uma edição. O processamento de mídia é acompanhado por consultas periódicas ao status do arquivo.

- **Onde entra:** Busca, favoritos, formulários e acompanhamento de envios.
- **Contrato:** Carregamento, atualização, repetição controlada e erro sem perder o contexto.
- [Documentação](https://tanstack.com/query/latest/docs/framework/react/overview)

### Node.js + NestJS + OpenAPI

API REST separada da interface. Valida entradas, aplica permissões e controla obras, episódios, capítulos e publicações. OpenAPI documenta os contratos usados pelo front-end.

- **Onde entra:** Servidor de aplicação; não transcodifica vídeos dentro da requisição HTTP.
- **Contrato:** Endpoints versionados, validação e documentação de respostas e erros.
- [Documentação](https://docs.nestjs.com/openapi/introduction)

### Keycloak + OpenID Connect

Keycloak gerencia cadastro, confirmação de e-mail, login, recuperação e MFA da equipe. O BFF usa openid-client no fluxo Authorization Code com PKCE; a API verifica emissor, público-alvo e assinatura dos tokens.

- **Onde entra:** Sessão em cookie HttpOnly, Secure e SameSite; tokens mantidos no servidor.
- **Contrato:** Login, encerramento de sessão e autorização por função e vínculo com o estúdio.
- [Documentação](https://www.keycloak.org/securing-apps/oidc-layers)

### PostgreSQL + Prisma

PostgreSQL guarda metadados, vínculos, favoritos, progresso e auditoria. Prisma mantém o esquema e as migrações. A busca inicial usa texto completo e índices do próprio banco.

- **Onde entra:** Arquivos ficam no armazenamento de objetos; o banco registra suas chaves e estados.
- **Contrato:** Restrições de unicidade, transações e restauração de backup testada.
- [Documentação](https://www.prisma.io/docs/orm/overview/databases/postgresql)

### Redis + BullMQ

A API cria tarefas para arquivos concluídos. Workers executam os trabalhos fora do fluxo da navegação, com repetição, limites de concorrência e identificação única por arquivo e versão.

- **Onde entra:** Vídeos, imagens, miniaturas e tarefas de publicação agendada.
- **Contrato:** Progresso, tentativas e falha legível; repetir um trabalho não duplica episódios.
- [Documentação](https://docs.bullmq.io/)

### FFmpeg + H.264 / AAC + HLS

O worker inspeciona o original, cria miniaturas e versões compatíveis com a resolução de origem. As versões são empacotadas em HLS, com playlist mestre e segmentos fMP4/CMAF.

- **Onde entra:** Processo de CPU em contêiner próprio, com limites de tempo e memória.
- **Contrato:** Versões de até 360p, 720p e 1080p quando a fonte permitir; quadros-chave alinhados.
- [Documentação](https://ffmpeg.org/ffmpeg-formats.html)

### HTML5 Video + hls.js + WebVTT

O player utiliza HLS nativo quando disponível e hls.js em navegadores compatíveis. Oferece qualidade automática, legendas WebVTT, volume, velocidade e retomada do progresso.

- **Onde entra:** Tela de reprodução; detectar recursos em vez de pressupor suporte.
- **Contrato:** Estados de buffer, erro, fim de episódio e escolha de legenda.
- [Documentação](https://github.com/video-dev/hls.js)

### Sharp + WebP / AVIF + leitor React

Sharp gera imagens de leitura e miniaturas a partir dos originais. O leitor carrega páginas vizinhas sob demanda, respeita a ordem definida pelo autor e permite modo vertical ou paginado.

- **Onde entra:** Worker de imagens e componente do leitor no front-end.
- **Contrato:** Página atual salva, sentido de leitura, zoom e transcrição quando fornecida.
- [Documentação](https://sharp.pixelplumbing.com/)

### S3 API + Cloudflare R2

O navegador envia arquivos por URLs temporárias e upload multipart autorizado pela API. Originais permanecem privados; derivados aprovados são enviados à área de publicação.

- **Onde entra:** SDK S3 no servidor, sem credenciais de armazenamento no HTML público.
- **Contrato:** Validação de tamanho, tipo e conclusão; nomes de objetos definidos pelo servidor.
- [Documentação](https://developers.cloudflare.com/r2/api/s3/)

### Cloudflare CDN + HTTPS + CORS

Domínio próprio para os objetos publicados, com regras de cache para playlists, segmentos e imagens. CORS é configurado para as origens e métodos necessários ao player e aos uploads.

- **Onde entra:** Entrega pública das obras aprovadas; acesso aos originais continua privado.
- **Contrato:** Content-Type correto, política de cache, invalidação de publicação e TLS.
- [Documentação](https://developers.cloudflare.com/r2/buckets/public-buckets/)

### Linux + Docker Compose + Caddy

Contêineres separam front-end, API, worker, identidade e dados no piloto. Caddy faz proxy e HTTPS. O worker pode crescer independentemente do servidor que atende as telas.

- **Onde entra:** Desenvolvimento, homologação e primeiro ambiente de produção dimensionado.
- **Contrato:** Ambientes separados, volumes persistentes, segredos e procedimentos de recuperação.
- [Documentação](https://docs.docker.com/compose/)

### SMTP + Mailpit no desenvolvimento

O provedor de identidade utiliza um serviço SMTP para confirmação e recuperação. No desenvolvimento, Mailpit recebe mensagens de teste, sem entregá-las aos usuários reais.

- **Onde entra:** Configuração de e-mail do Keycloak e ambiente local.
- **Contrato:** Links de uso único, expiração e teste dos fluxos de recuperação.
- [Documentação](https://www.keycloak.org/docs/latest/server_admin/)

### Git + GitHub Actions

Cada alteração passa por verificação de tipos, testes e build. Imagens dos serviços são versionadas; migrações e implantação acontecem por etapas, com possibilidade de retorno.

- **Onde entra:** Repositório e pipeline de CI/CD.
- **Contrato:** Artefato identificado por commit, execução de testes e registro de implantação.
- [Documentação](https://docs.github.com/en/actions/get-started/understand-github-actions)

### Vitest + Jest/Supertest + Playwright

Vitest cobre funções e interface; Jest/Supertest verificam contratos e autorização da API. Playwright testa os fluxos completos em navegadores e larguras de tela definidos.

- **Onde entra:** Testes de catálogo, upload, moderação, reprodução, leitura e isolamento entre estúdios.
- **Contrato:** Casos de sucesso, falha e retomada; regressões das rotas críticas.
- [Documentação](https://playwright.dev/docs/intro)

### OpenTelemetry + Prometheus + Grafana

Instrumentação no servidor gera métricas de API e processamento. Prometheus coleta as séries e Grafana exibe latência, fila, falhas e consumo. Logs estruturados têm correlação por requisição e tarefa.

- **Onde entra:** Servidores e workers; eventos de playback têm coleta mínima e política de retenção.
- **Contrato:** Painéis e alertas úteis, sem tokens ou dados pessoais nos logs.
- [Documentação](https://opentelemetry.io/docs/languages/js/)
