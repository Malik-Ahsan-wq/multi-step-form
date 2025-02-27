
import profilepic from './assets/react.svg'
function Card(){
    return (
      <div className="card">
        <img className='img' src={profilepic} alt="profilepic" />
        <h2 className='ahsan'>Ahsan malik</h2>
        <p className='para'>I learned react js now</p>
      </div>
    );
}

export default Card;