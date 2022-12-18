import './Review.css';


function Review(props) {
    let { name, src, raiting, experience, pluses, minuses } = props;

    return (
        <div className="review">
            <div className="review-photo">
                <img className="review-photo__img" src={src} alt="Author" />
            </div>
            <div className="review-content">
                <div className="review-content__name">
                    <div>
                        {name}
                    </div>

                    <div className="review-content__stars" >
                        {
                            raiting.map(function (star, index) {
                                return (
                                    <div key={index}>
                                        <div className={star} ></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="review-content__text">
                    <p className="review-content__paragraph">
                        <strong>Опыт использования:</strong> {experience}
                    </p>
                    <p>
                        <strong>Достоинства:</strong><br />
                        {pluses}
                    </p>
                    <p className="last-paragraph">
                        <strong>Недостатки:</strong><br />
                        {minuses}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Review;

