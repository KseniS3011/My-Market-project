import { useState } from 'react';
import './Form.css';

const mistakeInitial = { name: '', grade: '', reviewText: '' };


function Form(props) {

    const [input, setInput] = useState(JSON.parse(localStorage.getItem('reviewFormInput') || '{"name":"","grade":"","reviewText":""}'));
    const [mistake, setMistake] = useState({ ...mistakeInitial });
    localStorage.setItem('reviewFormInput', (JSON.stringify(input)));

    const handleChangeName = (event) => { setInput({ ...input, name: event.target.value }) };
    const handleFocusName = () => { setMistake({ ...mistakeInitial }) };
    const handleChangeGrade = (event) => { setInput({ ...input, grade: (event.target.value) }) };
    const handleFocusGrade = () => { setMistake({ ...mistakeInitial }) };
    const handleChangeReviewText = (event) => { setInput({ ...input, reviewText: event.target.value }) };
    const handleFocusReviewText = () => { setMistake({ ...mistakeInitial }) };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newMistake = {};

        if (input?.name.trim() === '') {
            setMistake({ ...mistakeInitial, name: 'Вы забыли ввести Имя и Фамилию' });
            return
        }

        if (input?.name.trim().length < 3) {
            setMistake({ ...mistakeInitial, name: 'Имя не может быть короче двух символов' });
            return
        }

        for (let i = 0; i < input?.name.trim().length; i++) {

            let codeOfSymbol = input?.name.trim().charCodeAt(i);

            if (codeOfSymbol === 32) {

            } else if (codeOfSymbol > 64 && codeOfSymbol < 90) {

            } else if (codeOfSymbol > 96 && codeOfSymbol < 122) {

            } else if (codeOfSymbol > 1039 && codeOfSymbol < 1103) {

            } else {

                setMistake({ ...mistakeInitial, name: 'Используйте буквы русского или английского алфавита' });
                return
            }
        }

        if ((input?.grade.trim()) < 1 || (input?.grade.trim()) > 5) {

            setMistake({ ...mistakeInitial, grade: 'Оценка должна быть от 1 до 5' });
            return
        }

        if (isNaN(input?.grade.trim())) {

            setMistake({ ...mistakeInitial, grade: 'Оценка должна быть от 1 до 5' });
            return
        }

        if (input?.reviewText.trim() === '') {

            setMistake({ ...mistakeInitial, reviewText: 'Вы забыли указать текст отзыва' });
            return
        }

        setMistake(newMistake);

        setInput({ name: "", grade: "", reviewText: "" })

        alert('Ваш отзыв был успешно отправлен и будет отображён после модерации');
    };

    return (
        <div>
            <form className="form"
                onSubmit={handleSubmit}
            >
                <div className="form__name">
                    Добавить свой отзыв
                </div>
                <div className="form__content">
                    <div className="form__input">
                        <div className="input-container1">
                            <input
                                className={`input1 ${mistake?.name ? 'mistake' : ''}`}
                                type="text"
                                name="name"
                                placeholder="Имя и фамилия"
                                value={input?.name}
                                onChange={handleChangeName}
                                onFocus={handleFocusName}
                            />
                            <div className={`input-mistake-name ${mistake?.name ? 'color' : ''}`}>{mistake?.name}</div>
                        </div>
                        <div className="input-container2"></div>
                        <div className="input-container3">
                            <input
                                className={`input2 ${mistake?.grade ? 'mistake' : ''}`}
                                type="text"
                                name="grade"
                                placeholder="Оценка"
                                value={input?.grade}
                                onChange={handleChangeGrade}
                                onFocus={handleFocusGrade}
                            />
                            <div className={`input-mistake-grade ${mistake?.grade ? 'color' : ''}`}>{mistake?.grade}</div>
                        </div>
                    </div>

                    <textarea
                        className={`textarea ${mistake?.reviewText ? 'mistake' : ''}`}
                        name="text"
                        placeholder="Текст отзыва"
                        value={input?.reviewText}
                        onChange={handleChangeReviewText}
                        onFocus={handleFocusReviewText}
                    ></textarea>
                    <div className={`input-mistake-review ${mistake?.reviewText ? 'color' : ''}`}>{mistake?.reviewText}</div>
                    <div className="form__button">
                        <button type="submit" className="form__button_button">Отправить отзыв</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default Form;
