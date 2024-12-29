import '../Latest-Release/Lates.css'
import LatesData from '../../data/LatesData.json'
// import { useNavigate  } from 'react-router-dom'



export default function Lates () {
//         const navigate = useNavigate();
      
//         const handleCardClick = (id) => {
//           navigate(`/video/${id}`);
        // };
    return (
        <>
            <footer>
                <div className="contaner">
                    <div className="footer__block">
                        <div className="footer__text">
                            <h1>Lates Release</h1>
                        </div>
                    </div>
                </div>
            </footer>

            <section className='Lates__block'>
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

            <div className="next__button" >
            <button className="next">Next:</button>
            </div>
        </>
    )
}