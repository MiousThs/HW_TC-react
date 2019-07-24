import { createStore } from 'redux';
import { rootReducer } from './reducers/index';

const initialState = {
    contacts: [
        {"name":{"title":"queen","first":"Katalin","last":"Medici"},"email":"queen.of.france@example.com","phone":"0459-564 5413", "imgSrc": "http://receptexpressz.hu/wp-content/uploads/2015/12/medici-katalin-1.jpg"},{"name":{"title":"lord","first":"Volan","last":"de Mort"},"email":"evil.666@example.com","phone":"05-636-130", "imgSrc": "data:image/jpeg;base64,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"},{"name":{"title":"president","first":"Donald","last":"Trump"},"email":"queen.of.USA@example.com","phone":"111-11-12", "imgSrc": "data:image/jpeg;base64,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"}
    ]
}

export default function setupStore() {
    return createStore(rootReducer, initialState);
}
