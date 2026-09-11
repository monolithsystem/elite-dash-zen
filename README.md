# Executive Dashboard

Por favor, atue como um engenheiro front-end sênior especialista em interfaces premium e atualize a seção de CARDS superiores do arquivo `src/components/reception-view.tsx`. Mantenha o fundo escuro chique semi-transparente atual, mas aplique este novo layout e a lógica de atualização silenciosa a cada 10 segundos:

1. AGORA SERÃO 4 CARDS ALINHADOS (REFINAMENTO VISUAL E ÍCONES MINIMALISTAS):

- Remova todas as bolinhas foscas de fundo de todos os ícones. Deixe os ícones soltos, vazados e minimalistas

CARD 4 (NOVO): Título "PACIENTES EM REATIVAÇÃO" -> Aplique nossa regra estrita da planilha. Faça o filtro dinâmico na coluna 'Tentativas_Reativacao' (Coluna K) e só some +1 se o valor for estritamente MAIOR QUE ZERO ( > 0 ). Se for 0 ou vazio, ignore. Linha lateral em Bronze/Cobre (border-l-4 border-l-rose-700/40). 2. ATUALIZAÇÃO 100% SILENCIOSA EM SEGUNDO PLANO: - Garanta que a busca automática na planilha a cada 10 segundos ocorra de forma invisível em segundo plano (background fetch). Não mostre textos de 'a processar', não limpe a tela e não dê trancos visuais. Os dados antigos devem ficar perfeitamente estáticos até que os novos os substituam de forma instantânea. Me devolva o código completo e unificado deste arquivo da recepção.

Por favor, atue como um engenheiro de software sênior especialista em dashboards executivos de altíssimo luxo e refabrique por completo o arquivo `src/components/director-view.tsx`. Vamos ELIMINAR a ligação com o Looker/Data Studio externo e criar um painel 100% nativo com acabamentos visuais no MÁXIMO NÍVEL DE ELITE. Siga estas especificações estritas:

1. DESTRUIR O IFRAME DO LOOKER STUDIO:

- Delete completamente a tag de <iframe> ou o bloco que tenta carregar o relatório externo do Google. O painel deve ser gerado puramente por código local.

2. OS 4 CARDS EXECUTIVOS EM VIDRO FUMÊ SUPREMO (DESIGN VIP):

Monte a seção superior com 4 cards exibindo dados fictícios locais estáveis, adicionando animação suave de entrada (animate-fade-in):

- CARD 1: TOTAL AGENDADOS -> Exiba o número 40. Linha lateral esquerda fina em Ouro (border-l-4 border-l-amber-500).

- CARD 2: TAXA DE CONFIRMAÇÃO -> Exiba '85%'. Linha lateral esquerda fina em Verde Esmeralda (border-l-4 border-l-emerald-600/40).

- CARD 3: PENDÊNCIAS DE CONFIRMAÇÃO -> Exiba o número 6. Linha lateral esquerda fina em Bronze/Cobre (border-l-4 border-l-rose-700/40).

- CARD 4: CAMPANHAS DE REATIVAÇÃO -> Exiba o número 14. Linha lateral esquerda fina em Cinza Platina (border-l-4 border-l-slate-400/40).

- ACABAMENTO MÁXIMO: Ícones vazados sem bolinhas de fundo. As caixas devem ser pretas semi-transparentes (bg-black/50), efeito de desfoque de vidro (backdrop-blur-lg), borda dourada ultra fina (border-amber-500/10) e um leve brilho neon dourado de fundo (shadow-[0_0_15px_rgba(212,175,55,0.03)]). Números em branco puro.

3. GRÁFICOS RECHARTS DE ALTA COSTURA DIGITAL (ESTILO DASHBOARD CRIPTO):

No espaço central onde ficava o Looker Studio [C21], injete os dois gráficos com dados locais de teste:

- GRÁFICO 1 (Procedimentos mais Procurados): Use um AreaChart. A linha deve ser ultra fina e na cor Dourado Metálico (#D4AF37). O LinearGradient por baixo começa em ouro com opacidade baixa (amber-500/0.15) e vai sumindo até ficar 100% transparente (opacity 0) na base. Remova as linhas verticais da grade (<CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />). Dados: Limpeza: 12, Aparelho: 8, Geral: 15, Implante: 5, Estetica: 9.

- GRÁFICO 2 (Status dos Agendamentos): Use um PieChart em formato de rosca bem fina (Donut Chart com innerRadius grande e outerRadius compacto). Fatia de Confirmados em Dourado Brilhante (#F59E0B) e Pendentes em Cinza Escuro Fosco (#334155).

Por favor, configure os componentes <Tooltip /> de ambos os gráficos com o ACABAMENTO SUPREMO DE ALTÍSSIMO LUXO (Estilo Vidro Fluido de Elite). Siga exatamente estas propriedades em linha nos dois gráficos:

1. COMPORTAMENTO VISUAL DO BALÃO (contentStyle):

- Use fundo preto semi-transparente premium com desfoque de vidro profundo: backgroundColor: 'rgba(10, 10, 10, 0.75)', backdropFilter: 'blur(12px)'.

- Borda de ouro ultra fina e cantos arredondados: border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '8px'.

- Sombra suave projetada para efeito de flutuação: boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'.

- Padding ultra compacto e elegante: padding: '6px 10px'.

2. DESIGN DOS TEXTOS INTERNOS (itemStyle e labelStyle):

- O nome do item/procedimento deve ser em cinza claro e limpo: labelStyle={{ color: '#94A3B8', fontSize: '11px', fontWeight: '500', marginBottom: '2px' }}.

- O número/valor deve ser em branco puro ou dourado brilhante em negrito: itemStyle={{ color: '#F59E0B', fontSize: '12px', fontWeight: '700' }}.

-

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://elite-dash-zen.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9bd72952-6252-4905-a45d-33e0dc8f100b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
