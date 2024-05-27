import Cartbox from '../../components/chartbox/Chartbox'
import TopBox from '../../components/topbox/TopBox'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>
        <TopBox />
      </div>
      <div className='box box2'>
        <Cartbox />
      </div>
      <div className='box box3'>
        <Cartbox />
      </div>
      <div className='box box4'>Box4</div>
      <div className='box box5'>
        <Cartbox />
      </div>
      <div className='box box6'>
        <Cartbox />
      </div>
      <div className='box box7'>Box7</div>
      <div className='box box8'>box8</div>
      <div className='box box9'>Box8</div>
    </div>
  )
}

export default Home
