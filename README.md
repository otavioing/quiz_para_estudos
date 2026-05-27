# Quiz Genérico (HTML / CSS / JS)

Este projeto contém um sistema de quiz totalmente genérico, implementado em HTML, CSS e JavaScript puro. Ele foi feito para ser facilmente editável: todas as perguntas são controladas por um único array no arquivo `script.js`.

## Estrutura de arquivos

- [index.html](index.html) — Interface do quiz.
- [style.css](style.css) — Estilos modernos e responsivos.
- [script.js](script.js) — Lógica do quiz e array `perguntas`.

## Como funciona (fluxo)

- As perguntas são carregadas dinamicamente a partir do array `perguntas` em `script.js`.
- A ordem das perguntas é embaralhada automaticamente a cada carregamento e também ao reiniciar o quiz.
- Cada pergunta exibe exatamente 4 alternativas.
- O usuário deve selecionar uma alternativa para habilitar o botão **Próxima pergunta**.
- Ao avançar, o sistema confirma a resposta, destaca a alternativa correta (verde) e a errada (vermelho), e mostra feedback de acerto/erro.
- Ao final, é exibido um painel com: número de acertos, número de erros e porcentagem de aproveitamento. Há também um botão para reiniciar o quiz.
 - No início o sistema pede o seu nome (apenas para registro). Ao finalizar, seus acertos, erros e tempo total são salvos no `localStorage` e aparecem na seção **Ranking** do painel de resultado.

## Como editar as perguntas

Abra `script.js` e procure o array `perguntas` no topo do arquivo. Cada item deve ter esta forma:

```js
{
  pergunta: "Texto da pergunta",
  respostas: ["opção A", "opção B", "opção C", "opção D"],
  correta: 1 // índice da resposta correta (0..3)
}
```

Regras importantes:
- Deve haver exatamente 4 itens em `respostas` para cada pergunta.
- `correta` é um número inteiro entre 0 e 3.

Exemplo mínimo:

```js
const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    correta: 1
  }
];
```

## Executando localmente

Basta abrir `index.html` no navegador (duplo clique) ou servir a pasta com um servidor estático para evitar restrições de CORS:

```bash
# Python 3
python -m http.server 8000
# então abra http://localhost:8000
```

## Observações e personalizações

- A ordem das perguntas é embaralhada por padrão (Fisher–Yates). As alternativas de cada pergunta também são embaralhadas automaticamente mantendo a referência da resposta correta.
- Há um temporizador por pergunta (padrão: 20s). Se o tempo se esgotar, a pergunta é confirmada como errada e você pode avançar com o botão **Próxima pergunta**. Ao final é exibido o tempo total gasto.
 - O quiz pede o nome do participante ao iniciar e salva o resultado no `localStorage` para criar um ranking local no navegador.
- O layout é responsivo e pode ser estilizado em `style.css`.
- O código JavaScript foi escrito para ser legível e comentado — altere apenas o array `perguntas` para trocar o conteúdo do quiz.

## Configurações rápidas

- Alterar tempo por pergunta: abra `script.js` e edite `QUESTION_TIME` (valor em segundos). Por exemplo, para 30 segundos:

```js
const QUESTION_TIME = 30;
```

- Limpar ranking manualmente: no painel de resultados há um botão **Limpar ranking** que remove os registros salvos no `localStorage`. Para limpar programaticamente execute no console do navegador:

```js
localStorage.removeItem('quiz_ranking');
```

## Notas de interface

- O modal inicial usa um cartão opaco para garantir legibilidade sobre o fundo escuro.
- Há espaçamento entre o temporizador e o botão **Próxima pergunta** para melhor usabilidade em telas sensíveis ao toque.
- Os botões no painel de resultado têm espaçamento entre si para evitar cliques acidentais.

## Sobre o ranking

- O ranking é salvo apenas localmente no navegador do usuário (`localStorage`) e não é sincronizado entre dispositivos.
- Os registros contém: `name`, `correct`, `wrong`, `timeSeconds` e `date`.

---

Se quiser que eu adicione exportação do ranking (CSV), sincronização remota ou histórico detalhado por tentativa, posso implementar qualquer uma dessas opções.