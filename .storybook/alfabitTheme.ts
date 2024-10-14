import { create } from '@storybook/theming/create'; // importando a função create

export default create({
  base: 'dark',
  brandTitle: 'Alfabit Design System', // ele irá aparecer quando não estiver exibindo a logo
  brandUrl: 'https://github.com/KLusvarghi/alfabit-design-system', // ao clicar  nela será elevado para o repositório do projeto
  brandImage: './logo-alfabit-branco.png', //a logo a ser exibida
  brandTarget: '_self', //dizendo que ao clicar na logo abrirá o link na mesma página
});
