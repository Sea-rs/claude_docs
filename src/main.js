import './styles/main.scss';
import { Deck } from './core/Deck.js';
import { slides } from './slides/index.js';

new Deck(document.getElementById('app'), slides).mount();
