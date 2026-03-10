import { Map, Placemark, YMaps } from "@iminside/react-yandex-maps";

function YandexMap() {
    const config = {
        center: [55.779622, 49.128904],
        zoom: 17,
    };
    return (

                <YMaps
                    query={{
                        lang: "en_RU",
                        apikey: "6b35a96c-dd86-46c8-aa49-7c07bc9794f8",
                    }}
                >
                    <Map defaultState={config} width="100%" height="60vh">
                        <Placemark geometry={[55.779622, 49.128904]} />
                    </Map>
                </YMaps>

    );
}

export default YandexMap;
