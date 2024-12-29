import { Component } from "react"
import Header from '../HomePage/Header/Header'
// import Vidio from '../../public/vidio/vid.mp4'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className="abouts">
                <Header />
            {/* <video src={Vidio} width={500} controls></video> */}
                <div className="about">
                    <div className="about__text">
                        <div className="about__title">
                            <h1>Добро Пожаловать на сайт!</h1>
                            <h2>Далее о нас:</h2>
                        </div>

                        
                        <div className="about__subtitle blocks">
                            <div className="sub__text">

                                <h1>О нашем сайте!</h1>
                                <p className="text_1">
                                Добро пожаловать на Anime World! Мы создали этот сайт, чтобы объединить всех, кто увлечён миром аниме. Здесь вы сможете узнать больше о ваших любимых персонажах, открыть для себя новые шедевры японской анимации и почувствовать себя частью огромного сообщества единомышленников.
                                </p>

                                <p className="text_2">
                                Наша цель — сделать аниме доступным и понятным каждому. Мы предлагаем статьи, галереи, обзоры и рекомендации, которые помогут вам погрузиться в этот удивительный мир. Наши авторы — такие же фанаты, как и вы, поэтому мы стараемся делиться самым интересным и актуальным контентом.
                                </p>

                                <p className="text_3">
                                Сайт Anime World — это место, где оживают герои и истории. Независимо от того, только ли вы начинаете своё путешествие или уже давно погружены в аниме, мы рады приветствовать вас здесь. Присоединяйтесь к нашему миру, и давайте вместе наслаждаться волшебством анимации!
                                </p>
                            </div>

                            <div className="new__block">
                                <h1>О авторе:</h1>
                                <p>Этот сайт создан для всех любителей аниме, как новичков, так и настоящих ценителей японской культуры. Меня зовут NAN_kiberzero, и я — автор этой страницы. Аниме вдохновляет меня уже много лет, и я стремлюсь делиться этой любовью с другими.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}