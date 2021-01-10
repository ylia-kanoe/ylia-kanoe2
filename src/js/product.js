import '../index.scss';
import './elements/json/productJson.js';
import './elements/modalmask.js';
import './elements/modal.js';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/image/', true, /\.(png|jpe?g|svg)$/));
const fonts = importAll(require.context('../assets/fonts/', true, /\.(ttf|woff)$/));
