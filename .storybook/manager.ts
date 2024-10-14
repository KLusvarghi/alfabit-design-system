import { addons } from '@storybook/manager-api'; //importando da api que insalamos
import alfabitTheme from './alfabitTheme'

addons.setConfig({
  theme: alfabitTheme // dentro de theme colocamos o arquivo importando que contem o theme
})