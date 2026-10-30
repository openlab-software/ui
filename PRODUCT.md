# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Time interno da OpenLab: devs que montam interfaces React ou Vue 3 nos produtos da própria OpenLab e consultam a documentação (`examples/docs`) para encontrar componentes e copiar exemplos de uso.

## Product Purpose

OpenLab UI é a biblioteca de componentes da OpenLab. Entrega o mesmo conjunto de componentes para React (sobre `@base-ui/react`) e Vue 3 (elementos nativos), com estilos únicos definidos em `packages/core` via vanilla-extract. Sucesso: um dev encontra um componente e o usa em React ou Vue com o mesmo resultado visual e comportamento equivalente.

## Positioning

Paridade real entre React e Vue a partir de uma única fonte de CSS (core), combinada com uma identidade visual própria: monocromática, cantos retos (radius 0), Geist Mono.

## Operating Context

Monorepo pnpm: `packages/core` (CSS), `packages/react`, `packages/vue`, `examples/react`, `examples/vue` e `examples/docs` (site Astro com previews React/Vue e abas por seção). Tema claro/escuro via classes `defaultTheme` / `darkTheme`.

## Capabilities and Constraints

- Componentes novos exigem arquivo de estilo em core, implementação React e espelho Vue.
- Classes geradas levam o prefixo `openlab-ui_`.
- Sem testes configurados ainda.
- Publicação/versionamento externo: não decidido.

## Brand Commitments

Estética mono/sharp (monocromática, sem cantos arredondados, Geist Mono) é identidade assumida pelo time.

## Product Principles

- Paridade React/Vue: qualquer componente existe nos dois, com o mesmo visual.
- Uma única fonte de estilo (core); frameworks só adaptam.
- Docs orientada a copiar: exemplo funcional e código lado a lado.
- Identidade sharp consistente em todos os componentes e na docs.

## Accessibility & Inclusion

Sem requisito formal além do que o Base UI já fornece; manter foco visível e navegação por teclado.
