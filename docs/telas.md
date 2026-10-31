# Inventário de telas · KOMA

38 telas e seus critérios de aceite.

## P01 · Início

`/` · publico

Apresentar obras aprovadas, lançamentos e a continuidade da experiência.

- **Campos:** Destaque editorial; Trilhos de animes e mangás; Continuar assistindo / lendo.
- **Ações:** Abrir uma obra; Retomar progresso; Explorar o catálogo.
- **Estados:** Carregando o catálogo; Sem destaques disponíveis; Falha recuperável na API.
- **API:** `GET /v1/catalog/home`
- **Aceite:** Exibir somente obras publicadas e autorizadas; conteúdo de retomada pertence ao usuário da sessão.

## P02 · Catálogo de animes

`/animes` · publico

Listar as animações disponíveis com navegação por filtros e páginas.

- **Campos:** Gênero; Ano; Classificação indicativa; Estúdio e disponibilidade.
- **Ações:** Filtrar e ordenar; Paginar resultados; Abrir detalhes.
- **Estados:** Lista carregando; Nenhum resultado; Filtro inválido.
- **API:** `GET /v1/works?type=anime`
- **Aceite:** Manter filtros na URL e não repetir itens entre páginas da mesma consulta.

## P03 · Catálogo de mangás

`/mangas` · publico

Reunir mangás e obras em capítulos publicados pelos autores.

- **Campos:** Gênero; Situação da obra; Autor / estúdio; Capítulos disponíveis.
- **Ações:** Filtrar; Abrir obra; Retomar capítulo.
- **Estados:** Carregando; Nenhuma obra; Capítulo ainda indisponível.
- **API:** `GET /v1/works?type=manga`
- **Aceite:** Diferenciar capítulo publicado de rascunho ou agendamento futuro.

## P04 · Busca

`/buscar?q=` · publico

Encontrar obras e estúdios por título, gênero e autoria.

- **Campos:** Termo pesquisado; Tipo de conteúdo; Filtros e resultados.
- **Ações:** Pesquisar; Limpar filtros; Abrir resultado.
- **Estados:** Digitando; Buscando; Nenhuma correspondência; Serviço indisponível.
- **API:** `GET /v1/search?q=&type=`
- **Aceite:** Validar tamanho do termo, escapar a consulta e oferecer retorno quando não houver resultado.

## P05 · Detalhe do anime

`/anime/:slug` · publico

Apresentar o anime antes de abrir o player.

- **Campos:** Capa e sinopse; Estúdio e créditos; Temporadas e episódios; Classificação e idiomas.
- **Ações:** Assistir / continuar; Salvar na lista; Abrir página do estúdio; Reportar problema.
- **Estados:** Carregando; Sem episódio publicado; Obra retirada.
- **API:** `GET /v1/works/:slug`
- **Aceite:** A duração e a disponibilidade de cada episódio vêm dos metadados processados.

## P06 · Detalhe do mangá

`/manga/:slug` · publico

Apresentar a obra, a autoria e a ordem dos capítulos.

- **Campos:** Sinopse e capa; Créditos; Capítulos e datas; Sentido de leitura.
- **Ações:** Começar / continuar leitura; Salvar na lista; Escolher capítulo.
- **Estados:** Sem capítulos; Capítulo retirado; Erro de consulta.
- **API:** `GET /v1/works/:slug/chapters`
- **Aceite:** Respeitar a numeração definida pelo autor e a ordem de publicação dos capítulos.

## P07 · Página pública do estúdio

`/estudios/:slug` · publico

Exibir autoria, apresentação e obras do coletivo.

- **Campos:** Nome e apresentação; Membros creditados; Links informados; Obras publicadas.
- **Ações:** Abrir uma obra; Visitar link oficial; Reportar perfil.
- **Estados:** Sem obras; Estúdio indisponível; Imagem ausente.
- **API:** `GET /v1/studios/:slug`
- **Aceite:** Não expor e-mails de conta ou membros privados como dados públicos.

## P08 · Player de anime

`/assistir/:episodeId` · publico

Reproduzir o episódio e manter o ponto de continuidade.

- **Campos:** Vídeo HLS; Legenda e áudio disponíveis; Qualidade / velocidade; Lista de episódios.
- **Ações:** Reproduzir e buscar trecho; Selecionar legenda; Entrar em tela cheia; Ir ao próximo episódio.
- **Estados:** Carregando; Buffer; Erro de mídia; Episódio concluído.
- **API:** `GET /v1/episodes/:id/playback · PUT /v1/progress`
- **Aceite:** Não marcar reprodução como concluída ao apenas abrir a página; retomar um ponto válido após carregar os metadados.

## P09 · Leitor de mangá

`/ler/:chapterId` · publico

Ler capítulos por páginas ou em rolagem contínua.

- **Campos:** Imagens em ordem; Página atual; Modo vertical / paginado; Sentido e zoom.
- **Ações:** Avançar / voltar; Alterar modo; Retomar página; Ir ao próximo capítulo.
- **Estados:** Página carregando; Falha em uma imagem; Fim de capítulo.
- **API:** `GET /v1/chapters/:id/pages · PUT /v1/progress`
- **Aceite:** Carregar páginas vizinhas sem baixar todo o acervo e preservar a posição ao trocar de modo.

## P10 · Entrar

`/entrar` · publico

Iniciar a sessão para lista, histórico e áreas privadas.

- **Campos:** E-mail ou usuário; Senha no provedor; Link de recuperação.
- **Ações:** Entrar; Ir ao cadastro; Recuperar acesso.
- **Estados:** Validando; Credencial inválida; Conta bloqueada; Sessão iniciada.
- **API:** `OIDC Authorization Code + PKCE`
- **Aceite:** Após o retorno do provedor, validar state e nonce e recuperar o destino original permitido.

## P11 · Criar conta

`/criar-conta` · publico

Registrar uma conta de espectador ou futuro autor.

- **Campos:** Nome público; E-mail; Senha e confirmação; Aceite das condições.
- **Ações:** Criar cadastro; Voltar para login.
- **Estados:** E-mail já cadastrado; Senha recusada; Confirmação pendente.
- **API:** `Cadastro hospedado no Keycloak`
- **Aceite:** Não permitir acesso de publicação antes das verificações de conta e vínculo com o estúdio.

## P12 · Verificar e-mail

`/conta/verificar-email` · publico

Confirmar o endereço antes de liberar recursos de publicação.

- **Campos:** Endereço mascarado; Orientação do envio; Estado da confirmação.
- **Ações:** Reenviar com intervalo; Atualizar estado; Voltar para login.
- **Estados:** Aguardando; Link expirado; Confirmado; Limite de reenvio.
- **API:** `Ação de verificação do Keycloak`
- **Aceite:** Link expira e o reenvio respeita os limites do provedor.

## P13 · Recuperar acesso

`/recuperar-acesso` · publico

Solicitar um link de recuperação pelo e-mail cadastrado.

- **Campos:** E-mail; Resposta neutra de solicitação.
- **Ações:** Solicitar link; Voltar para entrar.
- **Estados:** Enviando; Solicitação registrada; Limite temporário.
- **API:** `Fluxo de recuperação do Keycloak`
- **Aceite:** A resposta não revela se um endereço possui conta.

## P14 · Definir nova senha

`/conta/nova-senha` · publico

Concluir a recuperação com o link recebido.

- **Campos:** Nova senha; Confirmação; Validação do link.
- **Ações:** Salvar nova senha; Solicitar novo link.
- **Estados:** Link inválido; Link expirado; Senha atualizada.
- **API:** `Required action do Keycloak`
- **Aceite:** A ação é de uso único; seguir a política do provedor para as sessões anteriores.

## P15 · Perfil da conta

`/minha-conta` · publico

Editar o nome público, avatar e dados permitidos da conta.

- **Campos:** Nome público; Avatar; E-mail / verificação; Acesso aos estúdios vinculados.
- **Ações:** Editar perfil; Abrir estúdio; Sair da sessão; Solicitar exclusão.
- **Estados:** Salvando; Avatar inválido; Sessão expirada.
- **API:** `GET/PATCH /v1/me`
- **Aceite:** Dados públicos e dados de autenticação são tratados em campos e permissões distintos.

## P16 · Minha lista

`/minha-lista` · publico

Reunir as obras salvas pelo usuário.

- **Campos:** Obras favoritas; Filtro anime / mangá; Data de inclusão.
- **Ações:** Remover da lista; Abrir obra; Filtrar.
- **Estados:** Lista vazia; Sincronizando; Obra retirada do catálogo.
- **API:** `GET/POST/DELETE /v1/me/favorites`
- **Aceite:** Uma obra só aparece uma vez por usuário; uma retirada não expõe mídia privada.

## P17 · Histórico e continuidade

`/historico` · publico

Retomar episódios e capítulos sem perder o progresso.

- **Campos:** Segundos ou página; Último acesso; Itens concluídos.
- **Ações:** Retomar; Remover um registro; Limpar histórico.
- **Estados:** Sem progresso; Conflito entre dispositivos; Item indisponível.
- **API:** `GET/PUT/DELETE /v1/me/progress`
- **Aceite:** A atualização tem controle de versão ou data para evitar que uma sessão antiga sobrescreva a mais recente.

## P18 · Preferências

`/preferencias` · publico

Configurar a experiência de leitura e reprodução.

- **Campos:** Legenda preferida; Qualidade automática; Autoplay opcional; Sentido e modo de leitura; Preferências de acessibilidade.
- **Ações:** Salvar; Restaurar padrão.
- **Estados:** Salvando; Preferência não suportada; Sessão expirada.
- **API:** `GET/PATCH /v1/me/preferences`
- **Aceite:** O modo automático é padrão; preferências não devem forçar uma faixa inexistente no arquivo.

## E01 · Cadastrar estúdio

`/estudio/novo` · estudio

Criar a identidade do coletivo que publicará as obras.

- **Campos:** Nome e slug; Apresentação; Responsável; Links e declaração de vínculo.
- **Ações:** Salvar cadastro; Enviar para análise quando exigido.
- **Estados:** Slug ocupado; Dados incompletos; Verificação pendente.
- **API:** `POST /v1/studios`
- **Aceite:** O criador recebe vínculo de proprietário; o servidor valida o slug e registra a criação.

## E02 · Visão geral do estúdio

`/estudio/:id` · estudio

Concentrar obras, envios e pendências da equipe.

- **Campos:** Obras por situação; Processamentos ativos; Pareceres pendentes; Atalhos de criação.
- **Ações:** Criar obra; Retomar envio; Abrir pendência.
- **Estados:** Primeiro acesso; Nenhuma obra; Sem vínculo com o estúdio.
- **API:** `GET /v1/studios/:id/dashboard`
- **Aceite:** As contagens consideram apenas o estúdio selecionado e não incluem dados de outro coletivo.

## E03 · Editar perfil do estúdio

`/estudio/:id/perfil` · estudio

Manter apresentação, identidade e links públicos.

- **Campos:** Nome / apresentação; Avatar e banner; Links públicos; Responsáveis privados.
- **Ações:** Editar; Pré-visualizar página pública.
- **Estados:** Salvando; Imagem inválida; Permissão insuficiente.
- **API:** `PATCH /v1/studios/:id`
- **Aceite:** Somente funções autorizadas editam os dados; imagens são validadas e otimizadas.

## E04 · Obras do estúdio

`/estudio/:id/obras` · estudio

Listar os títulos em rascunho, revisão, publicação ou retirada.

- **Campos:** Tipo e título; Situação editorial; Última alteração; Responsável.
- **Ações:** Criar; Editar; Arquivar / restaurar quando permitido.
- **Estados:** Lista vazia; Carregando; Sem permissão.
- **API:** `GET /v1/studios/:id/works`
- **Aceite:** Arquivamento e retirada preservam o histórico de auditoria.

## E05 · Nova obra

`/estudio/:id/obras/nova` · estudio

Cadastrar metadados antes de enviar episódios ou capítulos.

- **Campos:** Título / tipo; Sinopse e gêneros; Capa e classificação; Créditos / titularidade / licença.
- **Ações:** Salvar rascunho; Prosseguir para mídia.
- **Estados:** Metadado ausente; Arquivo inválido; Rascunho salvo.
- **API:** `POST /v1/studios/:id/works`
- **Aceite:** A obra começa como rascunho; o envio de um arquivo não a publica automaticamente.

## E06 · Editar obra e créditos

`/estudio/:id/obras/:workId` · estudio

Revisar metadados, capa e documentos de autorização da obra.

- **Campos:** Dados editoriais; Créditos; Idiomas; Declarações e versão dos termos.
- **Ações:** Salvar versão; Abrir mídia; Solicitar revisão.
- **Estados:** Conflito de edição; Mudança aguardando revisão; Salvo.
- **API:** `PATCH /v1/works/:id`
- **Aceite:** Alterações relevantes após publicação são versionadas e seguem a regra de revisão definida.

## E07 · Temporadas e episódios

`/estudio/:id/obras/:workId/episodios` · estudio

Organizar a estrutura de publicação de um anime.

- **Campos:** Temporadas; Número e nome do episódio; Idioma / legenda; Situação do vídeo.
- **Ações:** Criar episódio; Editar ordem; Abrir envio.
- **Estados:** Sem episódios; Número repetido; Arquivo pendente.
- **API:** `POST /v1/works/:id/seasons · POST /v1/seasons/:id/episodes`
- **Aceite:** Unicidade de numeração por temporada e vínculo correto com a obra.

## E08 · Enviar vídeo e legendas

`/estudio/:id/episodios/:episodeId/envio` · estudio

Enviar original, miniatura e legendas ao armazenamento privado.

- **Campos:** Arquivo original; Progresso de upload; Idioma e WebVTT; Declaração de autorização.
- **Ações:** Iniciar / retomar envio; Cancelar; Concluir upload.
- **Estados:** Enviando; Parte interrompida; Arquivo recusado; Upload concluído.
- **API:** `POST /v1/uploads · POST /v1/uploads/:id/complete`
- **Aceite:** O servidor autoriza cada envio e verifica conclusão antes de criar o trabalho de processamento.

## E09 · Processamento de mídia

`/estudio/:id/midias/:assetId` · estudio

Acompanhar validação, transcodificação e geração dos derivados.

- **Campos:** Etapa atual; Versões produzidas; Tentativas e erros; Resultado técnico.
- **Ações:** Atualizar; Repetir trabalho autorizado; Substituir original.
- **Estados:** Na fila; Processando; Falhou; Pronto para revisão.
- **API:** `GET /v1/assets/:id/status · POST /v1/assets/:id/retry`
- **Aceite:** Falhas não publicam arquivos incompletos; repetir a tarefa não gera duplicações.

## E10 · Enviar capítulo de mangá

`/estudio/:id/obras/:workId/capitulos/novo` · estudio

Cadastrar o capítulo e enviar suas imagens originais.

- **Campos:** Número / título; Arquivos de página; Créditos e transcrição; Sentido de leitura.
- **Ações:** Enviar páginas; Conferir arquivos; Prosseguir para ordenação.
- **Estados:** Imagem inválida; Envio parcial; Capítulo sem páginas.
- **API:** `POST /v1/works/:id/chapters · POST /v1/uploads`
- **Aceite:** Validar quantidade, dimensões e formato das imagens; não usar o nome do arquivo como única ordem.

## E11 · Organizar e revisar páginas

`/estudio/:id/capitulos/:chapterId/paginas` · estudio

Definir ordem, substituições e apresentação do capítulo.

- **Campos:** Miniaturas numeradas; Posição da página; Sentido de leitura; Transcrição por página.
- **Ações:** Reordenar; Substituir / remover; Pré-visualizar leitor.
- **Estados:** Posição repetida; Alteração pendente; Página em processamento.
- **API:** `PATCH /v1/chapters/:id/pages`
- **Aceite:** Salvar a ordem em uma transação e preservar consistência entre miniaturas e páginas.

## E12 · Revisão e publicação

`/estudio/:id/obras/:workId/publicacao` · estudio

Conferir os requisitos e solicitar publicação da obra e de seus itens.

- **Campos:** Checklist editorial; Mídia pronta; Titularidade e licença; Data de liberação.
- **Ações:** Enviar para revisão; Agendar após aprovação; Retirar publicação.
- **Estados:** Requisitos pendentes; Em revisão; Aprovado; Publicado; Retirado.
- **API:** `POST /v1/works/:id/review · POST /v1/releases`
- **Aceite:** Publicar exige aprovação, mídia pronta e data válida; a mudança fica na auditoria.

## E13 · Equipe e permissões

`/estudio/:id/equipe` · estudio

Gerenciar membros do coletivo e seus acessos.

- **Campos:** Membros e convites; Função por estúdio; Estado do convite.
- **Ações:** Convidar; Alterar função; Remover vínculo.
- **Estados:** Convite expirado; Sem permissão; Último proprietário.
- **API:** `GET/POST/PATCH /v1/studios/:id/members`
- **Aceite:** Não remover o último proprietário sem transferência; uma função não vale automaticamente para todos os estúdios.

## E14 · Métricas das obras

`/estudio/:id/metricas` · estudio

Apresentar consumo agregado das obras do estúdio.

- **Campos:** Período; Inícios válidos; Tempo assistido / leitura; Conclusões e erros.
- **Ações:** Filtrar; Comparar itens; Exportar agregado.
- **Estados:** Sem dados; Amostra insuficiente; Consulta carregando.
- **API:** `GET /v1/studios/:id/analytics`
- **Aceite:** Definir o que conta como início e conclusão; não apresentar abertura de página como visualização completa.

## E15 · Pareceres e pendências

`/estudio/:id/revisoes` · estudio

Receber o retorno da moderação e responder aos ajustes solicitados.

- **Campos:** Obra / versão; Motivo do parecer; Requisitos de correção; Histórico de respostas.
- **Ações:** Corrigir; Responder; Reenviar para revisão.
- **Estados:** Aguardando resposta; Corrigido; Revisão concluída.
- **API:** `GET /v1/studios/:id/reviews · POST /v1/reviews/:id/reply`
- **Aceite:** O retorno está vinculado à versão analisada e não apaga os pareceres anteriores.

## A01 · Fila de moderação

`/admin/revisoes` · admin

Organizar os materiais que aguardam análise editorial.

- **Campos:** Obra / estúdio; Tipo da solicitação; Tempo em fila; Responsável.
- **Ações:** Assumir análise; Filtrar; Abrir revisão.
- **Estados:** Fila vazia; Item assumido por outro revisor; Sem acesso.
- **API:** `GET /v1/admin/reviews`
- **Aceite:** A API restringe a fila aos papéis administrativos e controla análise concorrente.

## A02 · Revisar conteúdo

`/admin/revisoes/:id` · admin

Conferir conteúdo, metadados, créditos e autorização para publicação.

- **Campos:** Prévia da mídia; Declarações e documentos; Classificação; Parecer por versão.
- **Ações:** Aprovar; Solicitar ajustes; Rejeitar com motivo.
- **Estados:** Mídia indisponível; Dados insuficientes; Decisão registrada.
- **API:** `POST /v1/admin/reviews/:id/decision`
- **Aceite:** A decisão tem autor, horário e motivo; processamento técnico não substitui a aprovação.

## A03 · Denúncias e retirada

`/admin/denuncias` · admin

Tratar problemas de publicação, autoria e conteúdo.

- **Campos:** Alvo da denúncia; Categoria e descrição; Histórico de análise; Situação da retirada.
- **Ações:** Abrir caso; Pedir informações; Retirar / restaurar com justificativa.
- **Estados:** Caso aberto; Em análise; Resolvido.
- **API:** `POST /v1/reports · PATCH /v1/admin/reports/:id`
- **Aceite:** A retirada bloqueia novas entregas e considera invalidação de cache; o histórico é preservado.

## A04 · Contas, estúdios e acessos

`/admin/acessos` · admin

Administrar situações de conta e verificação de coletivos.

- **Campos:** Contas e estúdios; Funções administrativas; Vínculos e situação; Eventos de auditoria.
- **Ações:** Verificar; Suspender / reativar; Revisar acessos.
- **Estados:** Sem permissão; Alteração em validação; Mudança auditada.
- **API:** `GET/PATCH /v1/admin/accounts`
- **Aceite:** Ações administrativas exigem autenticação reforçada e não alteram outros papéis por conveniência da interface.

## A05 · Saúde da operação

`/admin/operacao` · admin

Conferir falhas, processamento e capacidade do serviço.

- **Campos:** Fila e workers; Erros de mídia / API; Armazenamento; Último backup e restauração testada.
- **Ações:** Abrir incidente; Reprocessar item autorizado; Consultar painéis.
- **Estados:** Serviço degradado; Fila parada; Sem métricas recentes.
- **API:** `GET /v1/admin/health · painéis internos`
- **Aceite:** Ações operacionais são restritas e auditadas; segredos não aparecem no painel.
