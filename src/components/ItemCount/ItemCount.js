import '../../styles.css';

const ItemCount = ({setClicks, clicks, onAdd}) => {

    function handleAdd(n) {
        setClicks(clicks + n);
    }
  
    function handleSubstract(n){
        clicks >= 1 && setClicks(clicks - n);
    }
  
    function handleReset(){
        setClicks(0);
        onAdd();
    }
    
    return <div>

        <button className='btnCount' onClick={() => handleAdd(1)}>
          Sumar 1
        </button>
        <button className='btnCount' onClick={() => handleSubstract(1)}>
          Restar 1
        </button>
        <button className='btnCount' onClick={() => handleReset()}>
          Reiniciar
        </button>

    </div>;
};

export default ItemCount;
