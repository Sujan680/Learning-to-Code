import { useState } from "react"
import './App.css';
const AnotherExample = () => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? 'Deactive' : 'Activate'}
        </button>
        {/* { isActive ? 'You are active' : 'You are Deactive' } */}
        <div className={isActive ? 'active' : 'inactive'}>
        This divs class changes based on the button click.
      </div>
    </div>
  )
}

export default AnotherExample