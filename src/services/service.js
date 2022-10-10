import URL from './config';
class Service {

    get = async (id) => {
        try {
            const result = await fetch(`${URL}/atletas/mercado/${id}`);
            const json = await result.json();
            return json;
        } catch (error) {
            throw error;
        }
    }

}

export default Service