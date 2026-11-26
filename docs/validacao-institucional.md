# Validação institucional — Gestão Inteligente do Futebol

Status: plano de validação, não certificação. Executar em ambiente isolado com dados fictícios antes de publicar.

## Critérios de aceite
- [ ] Cadastro, login, recuperação de senha e sessão expirada.
- [ ] Dois clubes fictícios: testar leitura, escrita, exclusão, RPCs e arquivos cruzados; negar acesso indevido.
- [ ] Validar perfis e categorias; impedir autoelevação de privilégios.
- [ ] Rouparia: estoque, entrega, devolução, lavanderia, histórico e relatórios; testar duplicidade e concorrência.
- [ ] Atletas: cadastro, foto, posição e numeração; validar acesso e arquivos.
- [ ] Preparação física: programação, campo, academia, histórico e notificações.
- [ ] DM e transição: acesso mínimo necessário, registros e liberação.
- [ ] Fisiologia: testes, unidades, histórico, questionários e links com expiração; validar identidade e acesso.
- [ ] GPS: validar credenciais autorizadas, disponibilidade de API Polar/Catapult, latência e reconexão; não anunciar tempo real antes de comprovar.
- [ ] Nutrição, análise, imprensa, viagens, comunicação e diretoria: validar cada fluxo e perfil.
- [ ] Cobrança: isenção individual auditável, plano institucional separado, webhooks idempotentes, sem alterar licenças existentes.
- [ ] Mobile iOS/Android, desktop, rede lenta, acessibilidade, recuperação de erros.
- [ ] Revisar backups, restauração, retenção, LGPD, logs e incidentes.

## Auditoria inicial (26/11/2026)
RLS ativo nas 35 tabelas inspecionadas; isso não comprova isolamento. Revisar funções SECURITY DEFINER, proteção contra senhas vazadas, tabelas sem políticas e 28 chaves estrangeiras sem índice apontadas pelo advisor. Não alterar permissões ou índices em produção sem validar dependências e plano de reversão.

## Demonstração comercial
Usar dados sintéticos, sem escudos ou dados reais sem autorização. Apresentar apenas funcionalidades verificadas. Propor piloto institucional, treinamento, suporte e preço negociado; não presumir parceria ou contrato.

## Publicação
Registrar evidências por teste, corrigir falhas críticas, revisar mudanças, validar em homologação, obter aceite e manter rollback. Nenhum item acima está marcado como aprovado sem evidência.
