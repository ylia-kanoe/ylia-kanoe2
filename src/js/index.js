import '../index.scss';
import './elements/modal.js';
import './elements/showMore.js';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/image/', true, /\.(png|jpe?g|svg)$/));
const fonts = importAll(require.context('../assets/fonts/', true, /\.(ttf|woff)$/));
