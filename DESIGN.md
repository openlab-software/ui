---
name: OpenLab UI
description: Biblioteca de componentes React e Vue, monocromática, de cantos retos e em Geist Mono.
colors:
  ink: "oklch(0.145 0 0)"
  paper: "oklch(1 0 0)"
  graphite: "oklch(0.205 0 0)"
  fog: "oklch(0.97 0 0)"
  slate: "oklch(0.556 0 0)"
  hairline: "oklch(0.922 0 0)"
  ring-grey: "oklch(0.708 0 0)"
  alarm: "oklch(0.577 0.245 27.325)"
  night: "oklch(0.145 0 0)"
  night-raised: "oklch(0.205 0 0)"
  night-muted: "oklch(0.269 0 0)"
  night-text: "oklch(0.985 0 0)"
  night-slate: "oklch(0.708 0 0)"
  night-alarm: "oklch(0.704 0.191 22.216)"
typography:
  body:
    fontFamily: "'Geist Mono Variable', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.25rem"
  title:
    fontFamily: "'Geist Mono Variable', monospace"
    fontSize: "1rem"
    fontWeight: 500
  label:
    fontFamily: "'Geist Mono Variable', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1rem"
rounded:
  base: "0rem"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
components:
  button-default:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.paper}"
    rounded: "{rounded.base}"
    height: "2.25rem"
    padding: "0 0.75rem"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    height: "2.25rem"
    padding: "0 0.75rem"
  button-destructive:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.alarm}"
    rounded: "{rounded.base}"
    height: "2.25rem"
    padding: "0 0.75rem"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    height: "2.25rem"
    padding: "0.25rem 0.75rem"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "1.5rem"
---

# Design System: OpenLab UI

## Overview

**Creative North Star: "The Terminal Blueprint"**

OpenLab UI se comporta como uma planta técnica: monocromática, composta em monoespaçada, desenhada com linhas finas e sem ornamento. O conteúdo é a estrutura, e a interface mostra onde as coisas estão em vez de decorá-las. Os dois temas (claro e escuro) usam a mesma gramática, só invertida.

A sensação dos componentes é tátil e confiante: bordas e cantos retos, contraste forte nos estados, e resposta física ao toque (o botão desce 1px ao ser pressionado). Nada é suave por padrão; o rigor é parte da identidade.

**Key Characteristics:**
- Raio de canto zero em todos os componentes (`radius.base = 0rem`).
- Uma única família, Geist Mono, em todos os papéis.
- Sem cor de marca: a única cor cromática é o vermelho de erro.
- Profundidade por hairlines de 1px, não por sombras.
- Foco sempre visível, com anel de 3px.

## Colors

Paleta neutra em escala de cinza OKLCH, mais um vermelho de alerta. O tema escuro troca os papéis de superfície e texto.

### Primary
- **Graphite** (oklch(0.205 0 0)): fundo do botão principal e elementos de ênfase no tema claro. No escuro, o papel de primário passa para um cinza quase branco (oklch(0.922 0 0)).

### Neutral
- **Ink** (oklch(0.145 0 0)): texto e, no tema escuro, fundo da página (**Night**).
- **Paper** (oklch(1 0 0)): fundo da página e de cards no tema claro.
- **Fog** (oklch(0.97 0 0)): superfícies secundárias, muted, accent.
- **Slate** (oklch(0.556 0 0)): texto secundário. No escuro: **Night Slate** (oklch(0.708 0 0)).
- **Hairline** (oklch(0.922 0 0)): bordas e divisórias. No escuro é branco a 10% de opacidade.
- **Ring Grey** (oklch(0.708 0 0)): cor do anel de foco, aplicada a 50% de opacidade.
- **Night Raised** (oklch(0.205 0 0)) e **Night Muted** (oklch(0.269 0 0)): cards e superfícies secundárias no tema escuro.

### Alert
- **Alarm** (oklch(0.577 0.245 27.325)): erro e ações destrutivas. No escuro: **Night Alarm** (oklch(0.704 0.191 22.216)).

### Named Rules
**The No Brand Color Rule.** O sistema não tem cor de marca. Ênfase vem de inversão de contraste e peso, nunca de uma cor de acento.

**The One Chromatic Voice Rule.** O vermelho de alerta é o único matiz; aparece só para erro e destruição.

## Typography

**Body Font:** Geist Mono Variable (com fallback monospace)

**Character:** uma monoespaçada única, em todos os papéis. A hierarquia vem de tamanho e peso, não de troca de família, o que dá aspecto de terminal e de documento técnico.

### Hierarchy
- **Title** (500, 1rem): títulos de card e de seção de componente.
- **Body** (400, 0.875rem, 1.25rem): texto padrão de componentes e controles.
- **Label** (400, 0.75rem, 1rem): botões xs, metadados e legendas.

### Named Rules
**The One Family Rule.** Não introduza uma segunda família. Ênfase usa peso (400 e 500) e tamanho.

## Layout

Componentes são compactos e alinhados a uma escala de altura: 1.5rem (xs), 2rem (sm), 2.25rem (padrão) e 2.5rem (lg). Espaçamento interno usa passos de 0.25, 0.5, 0.75, 1 e 1.5rem. Cards usam padding de 1.5rem, e 1rem no tamanho `sm`. Em telas pequenas os componentes mantêm tamanho; só a docs reorganiza o layout (sidebar vira drawer abaixo de 900px).

## Elevation & Depth

Flat por padrão. A profundidade vem de hairlines de 1px (`box-shadow: 0 0 0 1px` a 10% de foreground nos cards, bordas nos inputs) e de variações de tom. Sombras difusas ficam reservadas a camadas flutuantes (popover, dialog, toast).

### Shadow Vocabulary
- **Hairline ring** (`box-shadow: 0 0 0 1px color-mix(foreground 10%)`): contorno de cards.
- **Focus ring** (`box-shadow: 0 0 0 3px color-mix(ring 50%)`, mais borda na cor do anel): foco visível em botões e inputs.
- **Error ring** (`box-shadow: 0 0 0 3px color-mix(destructive 20%)`): campo inválido.

### Named Rules
**The Flat-By-Default Rule.** Superfícies não têm sombra em repouso. Sombra só aparece em foco, erro ou camada flutuante.

## Shapes

Cantos retos em tudo (radius 0), incluindo botões, inputs, cards e containers. Bordas de 1px. A geometria é ortogonal; nenhum componente usa pílula ou círculo, exceto onde a semântica pede (avatar).

## Components

Tátil e confiante: estados com resposta clara e contraste forte.

### Buttons
- **Shape:** canto reto (0), borda de 1px transparente, altura 2.25rem.
- **Default:** fundo Graphite, texto Paper, padding horizontal 0.75rem; no hover o fundo clareia (mix a 80%).
- **Outline / Secondary / Ghost / Link:** outline com borda Hairline e fundo translúcido; ghost ganha borda no hover; link sublinha no hover.
- **Destructive:** fundo vermelho a 10% com texto Alarm.
- **Hover / Focus:** transição de 0.15s `cubic-bezier(0.4, 0, 0.2, 1)`; foco com anel de 3px; `:active` desloca 1px para baixo; desabilitado a 50% de opacidade.

### Inputs / Fields
- **Style:** borda de 1px (Hairline), fundo translúcido, altura 2.25rem, canto reto.
- **Focus:** borda na cor do anel e anel de 3px.
- **Error / Disabled:** borda Alarm com anel de 3px a 20%; desabilitado a 50% com cursor `not-allowed`.

### Cards / Containers
- **Corner Style:** reto.
- **Background:** Card (Paper no claro, Night Raised no escuro).
- **Shadow Strategy:** só o hairline ring.
- **Internal Padding:** 1.5rem (1rem em `sm`).

### Navigation (docs)
- Sidebar com itens em Slate; hover em Fog; o item ativo é invertido (fundo Ink, texto Paper). Abaixo de 900px vira drawer com scrim.

## Do's and Don'ts

### Do:
- **Do** manter radius 0 em qualquer componente novo.
- **Do** usar os tokens de `vars` (`theme-contract.css.ts`) para toda cor; nenhum valor solto.
- **Do** dar foco visível com anel de 3px na cor do anel a 50%.
- **Do** expressar ênfase por inversão de contraste e peso (400 e 500).
- **Do** manter paridade: o mesmo componente existe com o mesmo visual em React e Vue.

### Don't:
- **Don't** introduzir cor de marca ou acento cromático.
- **Don't** arredondar cantos ou usar formas de pílula.
- **Don't** usar sombras difusas em superfícies em repouso.
- **Don't** misturar uma segunda família tipográfica.
- **Don't** usar o vermelho de alerta fora de erro ou ação destrutiva.
