import { useEffect, useState } from "react";
import { modifyArticle } from "../api/apiCalls";


const UpdatePost = (props) => {
    const [contentModified, setContentModified] = useState('');
    const [imageModified, setImageModified] = useState('');
    const [newimageUrl, setNewimageUrl] = useState('');

    useEffect(() => {
        setContentModified(props.post.content);
        setImageModified(props.post.imageUrl);
        setNewimageUrl(props.post.imageUrl);
    }, []);

    const handleUpdatePost = () => {
        if (contentModified === '') {
            return;
        }
        const params = {
            post: {
                _id: props.post._id,
                content: contentModified,
                imageUrl: imageModified
            },
        }
        modifyArticle(params).then(function () {
            props.onPostUpdated();
        })
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImageModified(img);
            setNewimageUrl(URL.createObjectURL(img));
        }
    };


    return (
        <>
            <div className="container h-100 w-75 mb-3">
                <label className="comment mb-2" htmlFor="comment">Contenu de la publication</label>
                <textarea value={contentModified} className="form-control mb-2" rows="1" id="comment" name="text" placeholder="Écrivez ce que vous voulez ici !" onChange={(e) => setContentModified(e.target.value)}>
                </textarea>
                <div className="mb-3">
                    <div className="d-flex">
                        <div className="form-file">
                            <input className="form-control form-control-sm btn-danger" id="formFileSm" type="file" onChange={onImageChange} />
                        </div>
                    </div>

                </div>
                {
                    props.post.imageUrl ? <img src={newimageUrl} className="post-img img-fluid" /> : <></>
                }
                <div className="d-flex justify-content-end align-items-center">
                    <button type="button" className="btn btn-danger btn-sm" onClick={props.handleCancel}>Annuler</button>
                    <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleUpdatePost}>Mettre à jour</button>
                </div>
            </div>
        </>
    )
}

export default UpdatePost;