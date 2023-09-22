import { useEffect, useState } from "react"
import { jsonplaceholderService } from "../../services/jsonplaceholderService";
import useErrorHandler from "../../hooks/useErrorHandler";
import AutoFilterDropdown from "../AutofilterDropdown";

const FilterPhotosExample = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const handleError = useErrorHandler();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);

        jsonplaceholderService.getPhotos().then(data => {
            setPhotos(data);

            setIsLoading(false);
        }).catch(error => {
            handleError(error);

            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnValueChange = (photo) => {
        const selected = [...selectedPhotos, photo];

        setSelectedPhotos(selected);
    }

    const handleOnClicRemove = (id) => {
        const selected = selectedPhotos.filter(photo => photo['id'] !== id);

        setSelectedPhotos(selected);
    }

    return (
        isLoading ? <div> Loading...</div > : <div className="pb-5">
            <div className="display-flex mb-5 pb-3">
                {selectedPhotos.length === 0 && <>Empty</>}
                {selectedPhotos.map((photo, key) => (
                    <div key={key} className="photo-container pb-3">
                        <span className="btn-close-container">
                            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={() => handleOnClicRemove(photo['id'])}></button>
                        </span>
                        <img className="card-img-top" src={photo['url']} alt={photo['title']}></img>
                    </div>
                ))}
            </div>

            <AutoFilterDropdown items={photos} filterProperty={'title'} valueChange={handleOnValueChange} />
        </div >
    )
}

export default FilterPhotosExample;