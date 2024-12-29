import { Component } from "react"
import Header from '../HomePage/Header/Header'
import LatesData from '../data/LatesData.json'
import './Libary.css'

export default class Libary extends Component {
    render() {
        return (
            <div className="libars">
                <Header />
                <h1>Добро пожаловать в Библеотеку</h1>

                <section className='Lates__block libar'>
                    {LatesData.map((item) => {
                        return (
                        <div className="container set" key={item.id}>
                            <div className="lates">
                                <img src={item.image} alt={item.name} />
                                <p className="late__text">{item.name}</p>
                            </div>
                        </div>
                        );
                        })}
                </section>
            </div>
        )
    }
}