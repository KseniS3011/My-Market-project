import './Reviews.css';
import Review from './Review';


function Reviews(props) {

    let { item, raiting } = props

    return (
        <div>
            <div className="reviews-header">
                <div className="reviews-header__text">
                    Отзывы
                    <span className="reviews-header__number">425</span>
                </div>
            </div>

            <div className="reviews-body" >

                {
                    item.map(function ({ name, src, experience, pluses, minuses }, index) {

                        if (index) {
                            return (
                                <div key={name}>
                                    <Review name={name} src={src} raiting={raiting[1]} experience={experience} pluses={pluses} minuses={minuses}  />
                                </div>
                            )

                        } else {
                            return (
                                <div key={name}>
                                    <Review name={name} src={src} raiting={raiting[0]} experience={experience} pluses={pluses} minuses={minuses} />
                                    <div><hr className="reviews-body__separator" /></div>
                                </div>
                            )
                        }

                    })
                }

            </div>
        </div>
    );
}

export default Reviews;
